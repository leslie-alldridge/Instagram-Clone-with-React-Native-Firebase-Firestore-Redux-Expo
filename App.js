import React from 'react';
import firebase from 'firebase/app';
import fireBaseConfig from './env';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './components/auth/Landing';
import RegisterScreen from './components/auth/Register';

if (!firebase.apps.length) {
  firebase.initializeApp(fireBaseConfig);
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRoute='Landing'>
        <Stack.Screen
          name='Landing'
          component={LandingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name='Register' component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
