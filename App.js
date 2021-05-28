import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from './src/services/firebaseConnection'
import 'react-native-gesture-handler';
import { StatusBar, View } from 'react-native';

import AuthProvider from './src/contexts/auth'

import Routes from './src/routes'

export default function App() {

 return (
   <NavigationContainer>
     <AuthProvider>
      <Routes/>
     </AuthProvider>
   </NavigationContainer>
  );
}