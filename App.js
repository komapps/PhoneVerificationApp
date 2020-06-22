/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import PhonePage from './pages/PhonePage';
import VerifyPage from './pages/VerifyPage';
import MainPage from './pages/MainPage';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PhonePage" component={PhonePage} />
      <Stack.Screen name="VerifyPage" component={VerifyPage} />
      <Stack.Screen name="MainPage" component={MainPage} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
