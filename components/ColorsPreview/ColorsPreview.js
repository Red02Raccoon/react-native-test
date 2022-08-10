import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const ColorsPreview = ({ colors, onPaletteClick }) => {
  return (
    <FlatList
      data={colors}
      keyExtractor={({ paletteName }) => paletteName}
      renderItem={({ item }) => (
        <View style={styles.palette}>
          <TouchableOpacity onPress={onPaletteClick(item)}>
            <Text style={styles.title}>{item.paletteName}</Text>

            <FlatList
              style={styles.colors}
              data={item.colors.slice(0, 5)}
              renderItem={({ item: { hexCode } }) => (
                <View style={[styles.item, { backgroundColor: hexCode }]} />
              )}
            />
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  palette: {
    marginBottom: 15,
  },
  title: {
    marginBottom: 8,
    fontWeight: 'bold',
  },
  colors: {
    flexDirection: 'row',
  },
  item: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
});

export default ColorsPreview;
