import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home, ColorBox } from './screens';
import { SCREENS } from './constants';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={SCREENS.home} component={Home} />
        <Stack.Screen name={SCREENS.colorBox} component={ColorBox} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
