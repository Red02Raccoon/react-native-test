import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const ColorBox = ({ title, colors, onColorClick }) => {
  return (
    <View>
      <FlatList
        data={colors}
        keyExtractor={(item) => item.hexCode}
        renderItem={({ item: { hexCode } }) => (
          <TouchableOpacity
            style={[styles.boxItem, { backgroundColor: hexCode }]}
            key={hexCode}
            onPress={onColorClick(hexCode)}
          >
            <Text>{hexCode}</Text>
          </TouchableOpacity>
        )}
        numColumns={3}
        ListHeaderComponent={
          <View>
            <Text style={[styles.title, styles.titleBold]}>{title}</Text>
            <Text style={styles.title}>Choose your color 🎉</Text>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleBold: {
    fontWeight: 'bold',
  },
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
});

export default ColorBox;
