import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

import { SCREENS } from '../constants';

const Home = ({ navigation }) => {
  const handleButtonPress = () => {
    navigation.navigate(SCREENS.colorBox);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Text style={styles.buttonTitle}>Go to {SCREENS.colorBox}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: 'rgb(102, 102, 191)',
    maxWidth: 150,
    textAlign: 'center',
    borderRadius: 5,
  },
  buttonTitle: {
    color: 'white',
  },
});

export default Home;
