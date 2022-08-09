import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

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
        <Text>Choose your color 🎉🎉🎉</Text>

        <View style={styles.box}>
          {colors.map(({ color }) => (
            <TouchableOpacity
              style={[styles.boxItem, { backgroundColor: color }]}
              key={color}
              onPress={handleColorChange(color)}
            >
              <Text>{color}</Text>
            </TouchableOpacity>
          ))}
        </View>
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
  box: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  boxItem: {
    width: 65,
    height: 65,
    marginHorizontal: 3,
    marginVertical: 3,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    textAlign: 'center',
  },
});
