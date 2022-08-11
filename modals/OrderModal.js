import { useState } from 'react';

import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Switch,
  Alert,
} from 'react-native';

import { SCREENS } from '../constants';

const formInitialState = {
  userName: '',
  guests: '',
  description: '',
  selected: false,
};

const OrderModal = ({ navigation }) => {
  const [form, setValue] = useState(formInitialState);

  const handleInputChange = (fieldName) => (val) => {
    setValue((values) => ({ ...values, [fieldName]: val }));
  };

  const validation = (values) => {
    return Object.entries(values).every(([key, i]) =>
      key !== 'selected' ? !!i : true,
    );
  };

  const navigateToOrders = (order) => () => {
    navigation.navigate(SCREENS.orders, { order });
  };

  const handleOrder = () => {
    if (validation(form)) {
      setValue(formInitialState);
      showNotification(
        'Thanks for order. Have a good day!',
        navigateToOrders(form),
      );

      return;
    }

    showNotification('Please add information to continue!');
  };

  const showNotification = (
    message,
    handleOk = () => console.log('OK Pressed'),
  ) => {
    Alert.alert('Order Status', message, [{ text: 'OK', onPress: handleOk }]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Form</Text>

      <Text style={styles.label}>User Name</Text>
      <TextInput
        style={[styles.input, styles.inputPadding]}
        placeholder="Add user name"
        value={form.userName}
        onChangeText={handleInputChange('userName')}
      />

      <Text style={styles.label}>Guests q-ty</Text>
      <TextInput
        style={[styles.input, styles.inputPadding]}
        placeholder="quantity"
        keyboardType="numeric"
        value={form.guests}
        onChangeText={handleInputChange('guests')}
      />

      <Text style={styles.label}>Description</Text>
      <View style={styles.input}>
        <TextInput
          style={styles.inputPadding}
          maxLength={40}
          multiline
          numberOfLines={4}
          placeholder="Add message"
          value={form.description}
          onChangeText={handleInputChange('description')}
        />
      </View>

      <View>
        <Text style={styles.label}>Do you want to get notification?</Text>

        <Switch
          style={styles.switch}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={form.selected ? '#f5dd4b' : '#f4f3f4'}
          onValueChange={handleInputChange('selected')}
          value={form.selected}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleOrder}>
        <Text style={styles.buttonText}>Add Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  inputPadding: { padding: 5 },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    marginBottom: 20,
  },
  switch: { marginRight: 'auto' },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#37819d',
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: { color: 'white', textAlign: 'center' },
});

export default OrderModal;
