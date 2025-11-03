import { useRouter } from 'expo-router';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default function Profile() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={{ uri: 'https://i.pravatar.cc/200' }} style={styles.avatar} />
        <Text style={styles.name}>Nguyễn Hoàng Nam</Text>
        <Text style={styles.job}>Sinh viên</Text>
        <Text style={styles.contact}>namhoang@gmail.com</Text>
        <View style={{ marginTop: 15 }}>
          <Button title="Quay lại" onPress={() => router.back()} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8F0FE', // nền sáng cố định
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    width: 280,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 5, // đổ bóng Android
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  job: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  contact: {
    fontSize: 14,
    color: '#555',
  },
});
