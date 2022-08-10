import { View, StyleSheet } from 'react-native';

import { SCREENS, COLOR_PALETTES } from '../constants';
import { ColorsPreview } from '../components';

const Home = ({ navigation }) => {
  const handleButtonPress = (palette) => () => {
    navigation.navigate(SCREENS.colorBox, palette);
  };

  return (
    <View style={styles.container}>
      <ColorsPreview
        colors={COLOR_PALETTES}
        onPaletteClick={handleButtonPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default Home;
