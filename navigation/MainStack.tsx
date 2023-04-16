import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';

import { LaunchListScreen } from '../screens/LaunchListScreen';
import { LaunchDetailScreen } from '../screens/LaunchDetailScreen';
import { HomeScreen } from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

export const defTheme = {
  ...DefaultTheme,
};

export const darkTheme = {
  ...DarkTheme,
};

export function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="LaunchList" component={LaunchListScreen} />
      <Stack.Screen name="LaunchDetail" component={LaunchDetailScreen} />
    </Stack.Navigator>
  );
}
