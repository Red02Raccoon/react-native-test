import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const ColorBox = ({ title = 'Choose your color', colors, onColorClick }) => {
  return (
    <View>
      <FlatList
        data={colors}
        keyExtractor={(item) => item.color}
        renderItem={({ item: { color } }) => (
          <TouchableOpacity
            style={[styles.boxItem, { backgroundColor: color }]}
            key={color}
            onPress={onColorClick(color)}
          >
            <Text>{color}</Text>
          </TouchableOpacity>
        )}
        numColumns={3}
        ListHeaderComponent={<Text style={styles.title}>{title} 🎉🎉🎉</Text>}
      />
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
