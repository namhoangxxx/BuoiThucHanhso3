import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

type Student = {
  id: string;
  name: string;
  age: string;
  className: string;
  hometown: string;
};

export default function StudentDetail() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const studentsJSON = params.students as string | undefined;

  let students: Student[] = [];
  if (studentsJSON) {
    try {
      students = JSON.parse(decodeURIComponent(studentsJSON));
    } catch (e) {
      console.error('Failed to parse students JSON', e);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thông tin sinh viên</Text>

      {students.length === 0 ? (
        <Text>Không có sinh viên nào</Text>
      ) : (
        <FlatList
          data={students}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.info}>Tên: {item.name}</Text>
              <Text style={styles.info}>Mã: {item.id}</Text>
              <Text style={styles.info}>Tuổi: {item.age}</Text>
              <Text style={styles.info}>Lớp: {item.className}</Text>
              <Text style={styles.info}>Quê: {item.hometown}</Text>
            </View>
          )}
        />
      )}

      <View style={{ marginTop: 20 }}>
        <Button title="Quay lại" onPress={() => router.back()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#E8F0FE' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  item: { padding: 10, borderBottomWidth: 1, borderColor: '#ccc', marginBottom: 10 },
  info: { fontSize: 16 },
});

