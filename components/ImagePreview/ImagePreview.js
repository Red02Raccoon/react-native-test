import { View, StyleSheet, ImageBackground } from 'react-native';

const ImagePreview = ({ uri, boxStyle }) => {
  return (
    <View style={[styles.box, boxStyle]}>
      <ImageBackground
        resizeMode="cover"
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
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default ImagePreview;
