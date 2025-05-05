import { ScrollView, StyleSheet, Linking } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export default function AboutScreen() {
  const handleInstagramPress = () => {
    Linking.openURL('https://instagram.com/ahmet.eren.ozcan');
  };

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
        <LinearGradient
          colors={['rgba(0,0,0,0.8)', 'transparent']}
          style={styles.gradient}
        />
        
      </ThemedView>

      {/* Content Section */}
      <ThemedView style={styles.content}>
        {/* Profile Card */}
        <ThemedView style={styles.profileCard}>
          <Image
            source={require('@/assets/images/about.jpg')}
            style={styles.profileImage}
          />
          <ThemedView style={styles.profileInfo}>
            <ThemedText type="title" style={styles.profileName}>
              Ahmet Eren Özcan
            </ThemedText>
            <ThemedText style={styles.profileTitle}>
              Profesyonel Gezgin & İçerik Üreticisi
            </ThemedText>
            <TouchableOpacity 
              style={styles.socialButton}
              onPress={handleInstagramPress}
            >
              <MaterialIcons name="travel-explore" size={20} color="dark" />
              <ThemedText style={styles.socialButtonText}>
                Seyahatlerimi Takip Edin
              </ThemedText>
            </TouchableOpacity>
          </ThemedView>
        </ThemedView>

        {/* Story Section */}
        <ThemedView style={styles.section}>
          <ThemedText type="title" style={styles.sectionTitle}>
            🌍 Hikayemiz
          </ThemedText>
          <ThemedText style={styles.paragraph}>
            2015'te ilk sırt çantamı alıp Avrupa turuna çıktığımda, hayatımın en önemli yolculuğuna çıktığımı bilmiyordum. O günden beri 45+ ülke, 150+ şehir ve sayısız kültür deneyimledim.
          </ThemedText>
          
          <ThemedView style={styles.statsContainer}>
            <ThemedView style={styles.statItem}>
              <ThemedText type="title" style={styles.statNumber}>45+</ThemedText>
              <ThemedText style={styles.statLabel}>Ülke</ThemedText>
            </ThemedView>
            <ThemedView style={styles.statItem}>
              <ThemedText type="title" style={styles.statNumber}>500K+</ThemedText>
              <ThemedText style={styles.statLabel}>Kilometre</ThemedText>
            </ThemedView>
            <ThemedView style={styles.statItem}>
              <ThemedText type="title" style={styles.statNumber}>8Y+</ThemedText>
              <ThemedText style={styles.statLabel}>Deneyim</ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>

        {/* Philosophy Section */}
        <ThemedView style={styles.section}>
          <ThemedText type="title" style={styles.sectionTitle}>
            🧭 Felsefemiz
          </ThemedText>
          <ThemedText style={styles.paragraph}>
            Seyahat etmek sadece fiziksel bir hareket değil, bir zihniyet biçimidir. Her yolculukta kendimizi yeniden keşfediyor, dünyanın bize sunduğu güzellikleri anlamaya çalışıyoruz.
          </ThemedText>
          
          <ThemedView style={styles.philosophyGrid}>
            <ThemedView style={styles.philosophyItem}>
              <MaterialIcons name="public" size={28} color="#3b82f6" />
              <ThemedText style={styles.philosophyText}>
                Kültürel Mirası Koruma
              </ThemedText>
            </ThemedView>
            <ThemedView style={styles.philosophyItem}>
              <MaterialIcons name="eco" size={28} color="#3b82f6" />
              <ThemedText style={styles.philosophyText}>
                Sürdürülebilir Seyahat
              </ThemedText>
            </ThemedView>
            <ThemedView style={styles.philosophyItem}>
              <MaterialIcons name="group" size={28} color="#3b82f6" />
              <ThemedText style={styles.philosophyText}>
                Yerel Deneyim Odaklı
              </ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>

        {/* CTA Section */}
        <ThemedView style={styles.ctaContainer}>
          <ThemedText type="title" style={styles.ctaText}>
            Hazır mısınız?{'\n'}
            <ThemedText style={{ color: '#3b82f6' }}>🌟</ThemedText>
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
    height: 400,
    marginBottom: 30,
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '60%',
  },
  heroContent: {
    position: 'absolute',
    bottom: 40,
    left: 25,
    right: 25,
  },
  mainTitle: {
    fontSize: 36,
    color: 'white',
    fontWeight: '800',
    marginBottom: 10,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  subTitle: {
    fontSize: 20,
    color: 'rgba(255,255,255,0.9)',
    fontWeight: '500',
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  content: {
    paddingHorizontal: 25,
    marginTop: -60,
    zIndex: 1,
  },
  profileCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 5,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 20,
    color: '#1e293b',
    fontWeight: '700',
    marginBottom: 5,
  },
  profileTitle: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 15,
  },
  socialButton: {
    flexDirection: 'row',
    backgroundColor: '#3b82f6',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialButtonText: {
    color: 'white',
    marginLeft: 10,
    fontWeight: '500',
  },
  section: {
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 24,
    color: '#1e293b',
    marginBottom: 25,
    fontWeight: '700',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 26,
    color: '#475569',
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: 28,
    color: '#3b82f6',
    fontWeight: '700',
  },
  statLabel: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 5,
  },
  philosophyGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  philosophyItem: {
    width: '30%',
    backgroundColor: '#f1f5f9',
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
    marginBottom: 15,
  },
  philosophyText: {
    fontSize: 13,
    color: '#475569',
    textAlign: 'center',
    marginTop: 10,
    fontWeight: '500',
  },
  ctaContainer: {
    backgroundColor: '#3b82f6',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    marginVertical: 30,
  },
  ctaText: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
    fontWeight: '600',
    lineHeight: 32,
  },
});