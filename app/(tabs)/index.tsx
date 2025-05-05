import { ScrollView, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Image } from 'expo-image';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  return (
    <ScrollView 
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Hero Section */}
      <ThemedView style={styles.heroContainer}>
        <Image
          source={require('@/assets/images/about.jpg')}
          style={styles.heroImage}
        />
        
       
      </ThemedView>

      {/* Content Section */}
      <ThemedView style={styles.content}>
        {/* Welcome Card */}
        <ThemedView style={styles.card}>
          <MaterialIcons name="travel-explore" size={32} color="#3b82f6" />
          <ThemedText type="title" style={styles.welcomeTitle}>
            Keşif Dolu Bir Yolculuğa Hazır Olun
          </ThemedText>
          <ThemedText style={styles.description}>
            Seyahat tutkumuzu paylaşan herkese özel rehberler, ipuçları ve 
            unutulmaz deneyimler burada bir arada!
          </ThemedText>
        </ThemedView>

        {/* Features Grid */}
        <ThemedView style={styles.gridContainer}>
          <ThemedView style={styles.gridItem}>
            <MaterialIcons name="location-city" size={28} color="#3b82f6" />
            <ThemedText style={styles.gridText}>Şehir Rehberleri</ThemedText>
          </ThemedView>
          
          <ThemedView style={styles.gridItem}>
            <MaterialIcons name="local-dining" size={28} color="#3b82f6" />
            <ThemedText style={styles.gridText}>Yemek Kültürü</ThemedText>
          </ThemedView>
          
          <ThemedView style={styles.gridItem}>
            <MaterialIcons name="photo-camera" size={28} color="#3b82f6" />
            <ThemedText style={styles.gridText}>Fotoğraf Noktaları</ThemedText>
          </ThemedView>
          
          <ThemedView style={styles.gridItem}>
            <MaterialIcons name="attach-money" size={28} color="#3b82f6" />
            <ThemedText style={styles.gridText}>Bütçe Dostu</ThemedText>
          </ThemedView>
        </ThemedView>

        {/* CTA Section */}
        <ThemedView style={styles.ctaContainer}>
          <ThemedText style={styles.ctaText}>
            Hemen Yolculuğunu Planla {'\n'}
            <ThemedText style={{ color: '#3b82f6' }}>Keşfetmeye Başla →</ThemedText>
          </ThemedText>
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f8fafc',
  },
  heroContainer: {
    height: 350,
    marginBottom: 25,
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  imageOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '50%',
  },
  heroContent: {
    position: 'absolute',
    bottom: 40,
    left: 25,
    right: 25,
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 36,
    color: '#1e3a5f',
    fontWeight: '800',
    marginBottom: 10,
    textShadowColor: 'rgba(255,255,255,0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  subTitle: {
    fontSize: 20,
    color: '#3b82f6',
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  content: {
    paddingHorizontal: 25,
    marginTop: -40,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 5,
  },
  welcomeTitle: {
    fontSize: 22,
    color: '#1e293b',
    marginVertical: 15,
    textAlign: 'center',
    fontWeight: '700',
    lineHeight: 30,
  },
  description: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 24,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  gridItem: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  gridText: {
    fontSize: 14,
    color: '#1e293b',
    marginTop: 10,
    fontWeight: '500',
    textAlign: 'center',
  },
  ctaContainer: {
    backgroundColor: '#eef4ff',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    marginVertical: 20,
  },
  ctaText: {
    fontSize: 18,
    color: '#1e293b',
    textAlign: 'center',
    fontWeight: '600',
    lineHeight: 28,
  },
});