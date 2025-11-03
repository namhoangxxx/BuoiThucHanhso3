import React, { useState } from 'react';
import { Alert, Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function TasksScreen() {
  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);

  // Thêm công việc mới
  const addTask = () => {
    if (!taskText.trim()) {
      Alert.alert('Lỗi', 'Vui lòng nhập công việc');
      return;
    }
    setTasks([...tasks, taskText.trim()]);
    setTaskText('');
  };

  // Xóa công việc theo index
  const removeTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danh sách công việc</Text>

      {/* Input + nút Thêm */}
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Nhập công việc mới"
          value={taskText}
          onChangeText={setTaskText}
        />
        <Button title="Thêm" onPress={addTask} />
      </View>

      {/* Danh sách công việc */}
      <FlatList
        style={styles.list}
        data={tasks}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.taskRow}
            onLongPress={() => removeTask(index)} // nhấn giữ để xóa
          >
            <Text style={styles.taskText}>{item}</Text>
            <Button title="X" onPress={() => removeTask(index)} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F5FCFF' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  inputRow: { flexDirection: 'row', marginBottom: 15 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 8,
    padding: 10,
    marginRight: 10,
  },
  list: { marginTop: 10 },
  taskRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    marginBottom: 8,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  taskText: { fontSize: 16 },
});
