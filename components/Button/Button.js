import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({ children, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#37819d',
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: { color: 'white', textAlign: 'center' },
});

export default Button;
