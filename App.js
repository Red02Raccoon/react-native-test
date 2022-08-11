import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home, ColorBox, Gallery, Orders } from './screens';
import { OrderModal } from './modals';
import { SCREENS } from './constants';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name={SCREENS.home} component={Home} />
      <MainStack.Screen name={SCREENS.colorBox} component={ColorBox} />
      <MainStack.Screen name={SCREENS.gallery} component={Gallery} />
      <MainStack.Screen name={SCREENS.orders} component={Orders} />
    </MainStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen name={SCREENS.orderModal} component={OrderModal} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
