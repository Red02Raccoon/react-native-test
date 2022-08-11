import { useEffect, useState } from 'react';

import { View, StyleSheet, Text, FlatList } from 'react-native';

import { SCREENS } from '../constants';
import { Button } from '../components';
import { globalStyles } from '../styles';

const Orders = ({ navigation, route }) => {
  const { order: newOrder } = route.params || {};

  console.log({ newOrder });

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (newOrder) {
      setOrders((all) => [...all, newOrder]);
    }
  }, [newOrder]);

  const handleBtnClick = () => {
    navigation.navigate(SCREENS.orderModal);
  };

  console.log({ orders });

  return (
    <View style={globalStyles.container}>
      <Button onPress={handleBtnClick}>Add order</Button>

      <FlatList
        data={orders}
        keyExtractor={({ userName }) => userName}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={styles.title}>
              <Text style={styles.text}>{item.userName}</Text>
              <Text style={styles.text}>{item.guests}</Text>
            </View>
            <Text style={[styles.text, styles.margin]}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  margin: { marginTop: 10 },
  item: {
    borderWidth: 1,
    borderColor: '#5f8c9d',
    borderRadius: 10,
    backgroundColor: '#bbc2c3',
    padding: 10,
    marginTop: 10,
  },
  title: { flexDirection: 'row', justifyContent: 'space-between' },
  text: { color: 'white' },
});

export default Orders;
