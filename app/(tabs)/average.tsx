// app/average.tsx
import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function AverageScreen() {
  const [toan, setToan] = useState('');
  const [ly, setLy] = useState('');
  const [hoa, setHoa] = useState('');
  const [average, setAverage] = useState<number | null>(null);

  const calculateAverage = () => {
    const t = parseFloat(toan);
    const l = parseFloat(ly);
    const h = parseFloat(hoa);

    if (isNaN(t) || isNaN(l) || isNaN(h)) {
      Alert.alert('Lỗi', 'Vui lòng nhập đúng số cho tất cả môn');
      return;
    }

    const avg = (t + l + h) / 3;
    setAverage(avg);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tính điểm trung bình</Text>

      <TextInput style={styles.input} placeholder="Điểm Toán" keyboardType="numeric" value={toan} onChangeText={setToan} />
      <TextInput style={styles.input} placeholder="Điểm Lý" keyboardType="numeric" value={ly} onChangeText={setLy} />
      <TextInput style={styles.input} placeholder="Điểm Hóa" keyboardType="numeric" value={hoa} onChangeText={setHoa} />

      <Button title="Tính điểm" onPress={calculateAverage} />

      {average !== null && <Text style={styles.result}>Điểm trung bình: {average.toFixed(2)}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#F5FCFF' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#888', borderRadius: 8, padding: 10, marginBottom: 15 },
  result: { marginTop: 20, fontSize: 18, fontWeight: 'bold', textAlign: 'center' },
});
