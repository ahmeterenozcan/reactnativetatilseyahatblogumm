import { useEffect, useState } from 'react';
import { View, FlatList, Image, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { Link } from 'expo-router';

interface BlogPost {
  id: string;
  Baslik: string;
  BlogImage: string;
}

export default function BlogScreen() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'Blogs'));
        const blogPosts = querySnapshot.docs.map(doc => ({
          id: doc.id,
          Baslik: doc.data().Baslik,
          BlogImage: doc.data().BlogImage
        })) as BlogPost[];
        setPosts(blogPosts);
      } catch (err) {
        setError('Blog gönderileri yüklenirken bir hata oluştu');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  const renderBlogItem = ({ item }: { item: BlogPost }) => (
    <Link
      href={{
        pathname: "../blogdetail", // 👈 Ana dizinde olduğu için bu şekilde
        params: {
          id: item.id,
          title: item.Baslik,
          image: item.BlogImage
        }
      }}
      style={styles.blogItem}
      asChild // 👈 Alt navigasyonda görünmesini engeller
    >
      <TouchableOpacity>
        <Image
          source={{ uri: item.BlogImage }}
          style={styles.blogImage}
          resizeMode="cover"
        />
        <ThemedView style={styles.textContainer}>
          <ThemedText type="title" style={styles.blogTitle}>
            {item.Baslik}
          </ThemedText>
        </ThemedView>
      </TouchableOpacity>
    </Link>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#3b82f6" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <ThemedText style={styles.errorText}>{error}</ThemedText>
      </View>
    );
  }

  return (
    <FlatList
      data={posts}
      renderItem={renderBlogItem}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  blogItem: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  blogImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  textContainer: {
    padding: 15,
  },
  blogTitle: {
    fontSize: 18,
    color: '#1e3a5f',
    fontWeight: '600',
    textAlign: 'center'
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    color: '#ef4444',
    fontSize: 16,
    textAlign: 'center',
  },
});