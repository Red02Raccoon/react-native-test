import { useState } from 'react';
import { StyleSheet, View, Platform } from 'react-native';

import { ColorBox } from '../components';

const colors = [
  { color: '#2aa198' },
  { color: '#268bd2' },
  { color: '#d33682' },
  { color: '#cb4b16' },
  { color: '#b58900' },
  { color: '#6c71c4' },
  { color: '#859900' },
  { color: '#fdf6e3' },
  { color: '#268b56' },
];

const ColorBoxScreen = () => {
  const [currentColor, setCurrentColor] = useState(null);

  const handleColorChange = (color) => () => {
    setCurrentColor(color);
  };

  return (
    <View
      style={[
        styles.container,
        styles.color,
        currentColor && { backgroundColor: currentColor },
      ]}
    >
      <View style={styles.inner}>
        <ColorBox colors={colors} onColorClick={handleColorChange} />
      </View>
    </View>
  );
};

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

export default ColorBoxScreen;