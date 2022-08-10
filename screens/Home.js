import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { SCREENS, COLOR_PALETTES, initialImage } from '../constants';
import { ColorsPreview, ImagePreview } from '../components';

const Home = ({ navigation }) => {
  const handleButtonPress = (palette) => () => {
    navigation.navigate(SCREENS.colorBox, palette);
  };

  const handleGalleryClick = () => {
    navigation.navigate(SCREENS.gallery);
  };

  return (
    <View>
      <View style={[styles.box, styles.container]}>
        <Text style={styles.title}>Color Box</Text>
        <ColorsPreview
          colors={COLOR_PALETTES}
          onPaletteClick={handleButtonPress}
        />
      </View>

      <View style={[styles.box, styles.container]}>
        <Text style={styles.title}>Gallery</Text>

        <TouchableOpacity onPress={handleGalleryClick}>
          <ImagePreview uri={initialImage} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    borderBottomColor: '#0e6c5f',
    borderBottomWidth: 2,
  },
  container: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});

export default Home;
