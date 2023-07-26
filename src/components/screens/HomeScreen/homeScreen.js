import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import Chats from '../Chats/chats';
import Status from '../Status/status';
import Calls from '../Calls/calls';
import {Screens} from '../../../constants';

const HomeScreen = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name={Screens.chats} component={Chats} />
      <Tab.Screen name={Screens.status} component={Status} />
      <Tab.Screen name={Screens.calls} component={Calls} />
    </Tab.Navigator>
  );
};
export default HomeScreen;
