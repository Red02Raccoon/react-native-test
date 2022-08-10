import { View, StyleSheet, ImageBackground } from 'react-native';

const ImagePreview = ({ uri, boxStyle }) => {
  return (
    <View style={[styles.box, boxStyle]}>
      <ImageBackground
        source={{
          uri,
        }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    minHeight: 300,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ImagePreview;
