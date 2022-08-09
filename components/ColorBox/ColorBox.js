import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const ColorBox = ({ title = 'Choose your color', colors, onColorClick }) => {
  return (
    <View>
      <Text style={styles.title}>{title} 🎉🎉🎉</Text>

      <View style={styles.box}>
        {colors.map(({ color }) => (
          <TouchableOpacity
            style={[styles.boxItem, { backgroundColor: color }]}
            key={color}
            onPress={onColorClick(color)}
          >
            <Text>{color}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: { textAlign: 'center' },
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

export default ColorBox;
