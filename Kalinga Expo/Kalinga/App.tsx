import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { getFonts } from '@/functions';

import {
  SplashScreen,
  LogInPage,
  OnBoardingPage
} from '@/Pages'


export type RootStackParams = {
  SplashScreen: undefined;
  LogInPage: undefined;
  OnBoardingPage: undefined;
}

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
      <Stack.Navigator initialRouteName='OnBoardingPage' screenOptions={{headerShown:false}}>
        <Stack.Screen name='SplashScreen' component={SplashScreen}/>
        <Stack.Screen name='OnBoardingPage' component={OnBoardingPage}/>
        <Stack.Screen name='LogInPage' component={LogInPage}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
