import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/components/screens/HomeScreen/homeScreen';
import Camera from './src/components/screens/Camera/camera';
import Settings from './src/components/screens/Settings/settings';
import {Screens} from './src/constants';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={Screens.home} component={HomeScreen} />
        <Stack.Screen name={Screens.settings} component={Settings} />
        <Stack.Screen name={Screens.camera} component={Camera} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
