import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useLocalSearchParams } from 'expo-router';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import Weather from '@/components/Weather';

interface BlogDetail {
  Baslik: string;
  BlogImage: string;
  Aciklama: string;
  sehir: string;
}

export default function BlogDetailScreen() {
  const params = useLocalSearchParams();
  const [blogDetail, setBlogDetail] = useState<BlogDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        const docRef = doc(db, 'Blogs', params.id as string);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setBlogDetail(docSnap.data() as BlogDetail);
        }
      } catch (error) {
        console.error("Blog detayı yüklenemedi:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetail();
  }, [params.id]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#3b82f6" />
      </View>
    );
  }

  if (!blogDetail) {
    return (
      <View style={styles.errorContainer}>
        <ThemedText style={styles.errorText}>Blog bulunamadı</ThemedText>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: blogDetail.BlogImage }}
        style={styles.image}
        resizeMode="cover"
      />

      <ThemedView style={styles.content}>
        <ThemedText type="title" style={styles.title}>
          {blogDetail.Baslik}
        </ThemedText>

        <ThemedText style={styles.city}>
          📍 {blogDetail.sehir}
        </ThemedText>

        <ThemedText style={styles.description}>
          {blogDetail.Aciklama}
        </ThemedText>

        {/* Hava Durumu Bileşeni */}
        <Weather city={blogDetail.sehir} />
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f8fafc',
  },
  image: {
    width: '100%',
    height: 300,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    color: '#1e3a5f',
    marginBottom: 10,
    fontWeight: '700',
  },
  city: {
    fontSize: 18,
    color: '#3b82f6',
    marginBottom: 15,
    fontWeight: '500',
  },
  description: {
    fontSize: 16,
    color: '#4a5568',
    lineHeight: 24,
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
