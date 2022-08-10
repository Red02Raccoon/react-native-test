import { useState } from 'react';
import { StyleSheet, View, Platform } from 'react-native';

import { ColorBox } from '../components';

const ColorBoxScreen = ({ route }) => {
  const { paletteName, colors } = route.params;

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
        <ColorBox
          title={paletteName}
          colors={colors}
          onColorClick={handleColorChange}
        />
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
