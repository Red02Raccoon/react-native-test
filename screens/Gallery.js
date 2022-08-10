import { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';

import { ImagePreview } from '../components';

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(null);
  const [images, setImages] = useState([{ uri: null, id: null }]);

  useEffect(() => {
    getImages();
  }, []);

  const getImages = () => {
    fetch('https://fakestoreapi.com/products')
      .then((data) => data.json())
      .then((data) => {
        const list = data.slice(0, 10);

        setImages(list);
        setCurrentImage(list[0].image);
      })
      .catch((e) => console.error('Some error occurs'));
  };

  const handleImageClick = (image) => () => {
    setCurrentImage(image);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ImagePreview
          boxStyle={[styles.imgCommon, styles.preview]}
          uri={currentImage}
        />

        {currentImage ? (
          <FlatList
            numColumns={5}
            data={images}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <TouchableOpacity onPress={handleImageClick(item.image)}>
                  <ImagePreview
                    boxStyle={[styles.imgCommon, styles.img]}
                    uri={item.image}
                  />
                </TouchableOpacity>
              </View>
            )}
          />
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  list: {
    flexDirection: 'row',
    marginHorizontal: 'auto',
    flexWrap: 'wrap',
    flex: 1,
    justifyContent: 'center',
  },
  item: { marginRight: 5 },
  imgCommon: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'gray',
    overflow: 'hidden',
    borderRadius: 5,
  },
  preview: {
    width: '90%',
    borderRadius: 10,
    marginHorizontal: 'auto',
    marginBottom: 20,
  },
  img: {
    width: 50,
    height: 50,
    minHeight: 'auto',
    marginRight: 5,
    marginBottom: 5,
  },
});

export default Gallery;
