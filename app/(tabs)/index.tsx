import { useRouter } from 'expo-router'; // dùng Expo Router để push sang màn hình khác
import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  const [bgColor, setBgColor] = useState('#F5FCFF'); // màu nền hiện tại
  const router = useRouter(); // router để push sang Profile

  const changeColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setBgColor(randomColor);
  };

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={{ width: 80, height: 80, marginBottom: 20 }}
      />
      <Text style={styles.text}>Hello React Native</Text>

      {/* Khối màu hiển thị */}
      <View style={[styles.colorBlock, { backgroundColor: bgColor }]} />

      <Button title="Đổi màu" onPress={changeColor} />

      {/* Nút xem hồ sơ */}
      <View style={{ marginTop: 20 }}>
   <Button title="Xem hồ sơ" onPress={() => router.push('./profile')} />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  colorBlock: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 15,
  },
});
