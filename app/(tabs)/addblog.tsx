import { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, ScrollView, FlatList, TouchableOpacity, Text, Modal } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { db } from '../../firebaseConfig';
import { collection, addDoc, deleteDoc, doc, getDocs } from 'firebase/firestore';

export default function AddBlogScreen() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [image, setImage] = useState('');
  const [city, setCity] = useState('');

  const [blogs, setBlogs] = useState<any[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'Blogs'));
      const blogList: any[] = [];
      querySnapshot.forEach((doc) => {
        blogList.push({ id: doc.id, ...doc.data() });
      });
      setBlogs(blogList);
    } catch (error) {
      console.error('Blogları alma hatası:', error);
    }
  };

  const handleSubmit = async () => {
    if (!title || !desc || !image || !city) {
      Alert.alert('Uyarı', 'Lütfen tüm alanları doldurun');
      return;
    }

    try {
      await addDoc(collection(db, 'Blogs'), {
        Baslik: title,
        Aciklama: desc,
        BlogImage: image,
        sehir: city,
      });

      Alert.alert('Başarılı', 'Blog eklendi!');
      setTitle('');
      setDesc('');
      setImage('');
      setCity('');
      fetchBlogs();
    } catch (error) {
      console.error('Blog eklenemedi:', error);
      Alert.alert('Hata', 'Blog eklenirken bir sorun oluştu');
    }
  };

  const confirmDelete = (id: string) => {
    setSelectedId(id);
    setModalVisible(true);
  };

  const handleDelete = async () => {
    if (!selectedId) return;

    try {
      await deleteDoc(doc(db, 'Blogs', selectedId));
      Alert.alert('Başarılı', 'Blog silindi!');
      setModalVisible(false);
      setSelectedId(null);
      fetchBlogs();
    } catch (error) {
      console.error('Silme hatası:', error);
      Alert.alert('Hata', 'Blog silinirken bir hata oluştu');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedText type="title" style={styles.heading}>Yeni Blog Ekle</ThemedText>

      <TextInput
        placeholder="Başlık"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <TextInput
        placeholder="Açıklama"
        value={desc}
        onChangeText={setDesc}
        style={[styles.input, { height: 100 }]}
        multiline
      />
      <TextInput
        placeholder="Resim URL"
        value={image}
        onChangeText={setImage}
        style={styles.input}
      />
      <TextInput
        placeholder="Şehir"
        value={city}
        onChangeText={setCity}
        style={styles.input}
      />

      <Button title="Blogu Ekle" onPress={handleSubmit} />

      <View style={styles.divider} />

      <ThemedText type="title" style={styles.heading}>Blog Sil</ThemedText>

      <FlatList
        data={blogs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.blogItem}>
            <Text style={styles.blogText}>{item.Baslik} - {item.sehir}</Text>
            <TouchableOpacity onPress={() => confirmDelete(item.id)} style={styles.deleteButton}>
              <Text style={styles.deleteButtonText}>Sil</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Bu blogu silmek istediğinizden emin misiniz?</Text>
            <View style={styles.modalButtons}>
              <Button title="İptal" onPress={() => setModalVisible(false)} />
              <Button title="Sil" onPress={handleDelete} color="#dc2626" />
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  heading: {
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  divider: {
    marginVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  blogItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  blogText: {
    fontSize: 16,
    color: '#1f2937',
  },
  deleteButton: {
    backgroundColor: '#ef4444',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});
