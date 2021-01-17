import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import {Login,ViewNotes,AddNotes} from './src/screens';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator>
         <Stack.Screen name="Login"    component={Login}/>
        <Stack.Screen name="ViewNotes" component={ViewNotes} />
        <Stack.Screen name="AddNotes"  component={AddNotes}/>
    </Stack.Navigator>
   </NavigationContainer>
   )
}

