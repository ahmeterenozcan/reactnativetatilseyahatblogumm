import { ScrollView, StyleSheet, Linking } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ContactScreen() {
  const handleEmailPress = () => {
    Linking.openURL('mailto:traveleraeo33@gmail.com');
  };

  const handleInstagramPress = () => {
    Linking.openURL('https://instagram.com/ahmet.eren.ozcan');
  };

  return (
    <ScrollView 
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <ThemedView style={styles.header}>
        <Ionicons name="earth" size={60} color="#2563eb" style={styles.icon} />
        <ThemedText type="title" style={styles.title}>
          Traveler Ahmet Eren
        </ThemedText>
        <ThemedText style={styles.subtitle}>
          Global Wanderer & Content Creator
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.content}>
        <ThemedText type="title" style={styles.sectionTitle}>
          📬 İletişim Bilgileri
        </ThemedText>

        {/* Instagram Card */}
        <TouchableOpacity 
          onPress={handleInstagramPress}
          style={[styles.card, styles.instagramCard]}
        >
          <Ionicons name="logo-instagram" size={28} color="#fff" />
          <ThemedView style={styles.cardContent}>
            <ThemedText style={styles.cardTitle}>Instagram</ThemedText>
            <ThemedText style={styles.cardInfo}>@ahmet.eren.ozcan</ThemedText>
          </ThemedView>
        </TouchableOpacity>

        {/* Email Card */}
        <TouchableOpacity 
          onPress={handleEmailPress}
          style={[styles.card, styles.emailCard]}
        >
          <Ionicons name="mail" size={28} color="#fff" />
          <ThemedView style={styles.cardContent}>
            <ThemedText style={styles.cardTitle}>E-posta</ThemedText>
            <ThemedText style={styles.cardInfo}>traveleraeo33@gmail.com</ThemedText>
          </ThemedView>
        </TouchableOpacity>

        {/* Contact Info */}
        <ThemedView style={styles.infoBox}>
          <ThemedText style={styles.infoText}>
            🌍 Sorularınız veya işbirliği teklifleriniz için 7/24 ulaşabilirsiniz!
          </ThemedText>
          <ThemedText style={styles.infoText}>
            ⏳ Maksimum 24 saat içinde dönüş yapıyorum
          </ThemedText>
        </ThemedView>
      </ThemedView>

      <ThemedView style={styles.footer}>
        <ThemedText style={styles.footerText}>
          ✈️ Keşfetmek için sabırsızlanıyorum! 🗺️
        </ThemedText>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f8fafc',
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 40,
    backgroundColor: '#ffffff',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 5,
  },
  icon: {
    marginBottom: 15,
  },
  title: {
    fontSize: 28,
    color: '#1e40af',
    fontWeight: '700',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#64748b',
    fontWeight: '500',
  },
  content: {
    paddingHorizontal: 25,
  },
  sectionTitle: {
    fontSize: 22,
    color: '#1e293b',
    marginBottom: 25,
    fontWeight: '600',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  instagramCard: {
    backgroundColor: '#E1306C',
  },
  emailCard: {
    backgroundColor: '#3b82f6',
  },
  cardContent: {
    marginLeft: 15,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 3,
  },
  cardInfo: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 16,
  },
  infoBox: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 20,
    marginTop: 25,
  },
  infoText: {
    fontSize: 15,
    color: '#475569',
    lineHeight: 24,
    marginBottom: 10,
  },
  footer: {
    marginTop: 40,
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  footerText: {
    fontSize: 14,
    color: '#64748b',
    fontStyle: 'italic',
    textAlign: 'center',
    lineHeight: 22,
  },
});