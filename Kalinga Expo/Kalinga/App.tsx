import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { getFonts } from '@/functions';

import {
  SplashScreen,
  LogInPage
} from '@/Pages'

const Stack = createStackNavigator()

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState<boolean>(false)

  useEffect(()=> {
    async function loadFonts() {
      await getFonts()
      setFontsLoaded(true)
    }
    loadFonts();
  },[])

  if(fontsLoaded)
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{headerShown:false}}>
        <Stack.Screen name='SplashScreen' component={SplashScreen}/>
        <Stack.Screen name='LogInPage' component={LogInPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export type RootStackParams = {
  SplashScreen: undefined
  LogInPage: undefined
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
