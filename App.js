import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, SafeAreaView } from 'react-native';

import { ColorBox } from './components';

const colors = [
  { color: '#2aa198' },
  { color: '#268bd2' },
  { color: '#d33682' },
  { color: '#cb4b16' },
];

export default function App() {
  const [currentColor, setCurrentColor] = useState(null);

  const handleColorChange = (color) => () => {
    setCurrentColor(color);
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        styles.color,
        currentColor && { backgroundColor: currentColor },
      ]}
    >
      <View style={styles.inner}>
        <ColorBox colors={colors} onColorClick={handleColorChange} />
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  color: {
    ...Platform.select({
      android: {
        backgroundColor: 'green',
      },
      default: {
        backgroundColor: 'pink',
      },
    }),
  },
  inner: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: 'white',
  },
});
