import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

type Student = {
  id: string;
  name: string;
  age: string;
  className: string;
  hometown: string;
};

export default function Index() {
  const router = useRouter();
  const [students, setStudents] = useState<Student[]>([]);
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [age, setAge] = useState('');
  const [className, setClassName] = useState('');
  const [hometown, setHometown] = useState('');

  const addStudent = () => {
    if (!name || !id) return;
    setStudents(prev => [...prev, { name, id, age, className, hometown }]);
    setName(''); setId(''); setAge(''); setClassName(''); setHometown('');
  };

  const handleViewDetail = () => {
    if (students.length === 0) return;
    // Convert danh sách sinh viên thành JSON string và encode
    const encoded = encodeURIComponent(JSON.stringify(students));
    router.push(`/studentDetail?students=${encoded}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danh sách sinh viên</Text>

      <TextInput placeholder="Tên" value={name} onChangeText={setName} style={styles.input} />
      <TextInput placeholder="Mã sinh viên" value={id} onChangeText={setId} style={styles.input} />
      <TextInput placeholder="Tuổi" value={age} onChangeText={setAge} style={styles.input} />
      <TextInput placeholder="Lớp" value={className} onChangeText={setClassName} style={styles.input} />
      <TextInput placeholder="Quê" value={hometown} onChangeText={setHometown} style={styles.input} />

      <Button title="Thêm sinh viên" onPress={addStudent} />

      <FlatList
        style={{ marginTop: 20 }}
        data={students}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.itemText}>Mã: {item.id}</Text>
          </View>
        )}
      />

      {students.length > 0 && (
        <View style={{ marginTop: 20 }}>
          <Button title="Xem chi tiết sinh viên" onPress={handleViewDetail} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F5FCFF' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 8, marginBottom: 10 },
  item: { padding: 10, borderBottomWidth: 1, borderColor: '#eee' },
  itemText: { fontSize: 16 },
});
