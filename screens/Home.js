import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { SCREENS, COLOR_PALETTES, initialImage } from '../constants';
import { ColorsPreview, ImagePreview, Button } from '../components';

const Home = ({ navigation }) => {
  const handleButtonPress = (palette) => () => {
    navigation.navigate(SCREENS.colorBox, palette);
  };

  const handleGalleryClick = () => {
    navigation.navigate(SCREENS.gallery);
  };

  const handleOrdersClick = () => {
    navigation.navigate(SCREENS.orders);
  };

  return (
    <ScrollView>
      <View style={[styles.box, styles.container]}>
        <Button onPress={handleOrdersClick}>See all orders</Button>
      </View>

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
    </ScrollView>
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
  inputPadding: { padding: 5 },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    marginBottom: 20,
  },
  switch: { marginRight: 'auto' },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#37819d',
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: { color: 'white', textAlign: 'center' },
});

export default Home;
