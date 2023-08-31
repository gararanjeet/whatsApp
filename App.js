import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/components/screens/HomeScreen/homeScreen';
import Camera from './src/components/screens/Camera/camera';
import Settings from './src/components/screens/Settings/settings';
import {Screens, keys} from './src/constants';
import {getBoolean} from './src/utils/mmkv';
import WelcomeScreen from './src/components/screens/WelcomeScreen/welcomeScreen';
import PhoneNumberVerificaiton from './src/components/screens/PhoneNumberVerification/phoneNumberVerification';
import ProfileInfo from './src/components/screens/ProfileInfo/profileInfo';
import Splash from './src/components/screens/Splash/splash';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={Screens.splash}
          component={Splash}
          options={{headerShown: false}}
        />
        {getBoolean(keys.isLogedIn) ? (
          <Stack.Group>
            <Stack.Screen name={Screens.home} component={HomeScreen} />
            <Stack.Screen name={Screens.settings} component={Settings} />
            <Stack.Screen name={Screens.camera} component={Camera} />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen name={Screens.welcome} component={WelcomeScreen} />
            <Stack.Screen
              name={Screens.phoneNumberVerificaiton}
              component={PhoneNumberVerificaiton}
            />
            <Stack.Screen name={Screens.profileInfo} component={ProfileInfo} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
