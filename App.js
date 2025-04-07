
import React from 'react';
import {
 
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/components/SplashScreen/SplashScreen';
import Home from './src/components/Home/Home';
import LoginScreen from './src/components/Login/LoginScreen';
import UserForm from './src/components/UserForm/UserForm';
const Stack = createNativeStackNavigator();


function App(){

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={UserForm} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}



export default App;
