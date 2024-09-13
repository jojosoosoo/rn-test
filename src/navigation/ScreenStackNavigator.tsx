import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';

const ScreenStackNavigator = (): JSX.Element => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="AboutScreen" component={AboutScreen} />
    </Stack.Navigator>
  );
};

export default ScreenStackNavigator;
