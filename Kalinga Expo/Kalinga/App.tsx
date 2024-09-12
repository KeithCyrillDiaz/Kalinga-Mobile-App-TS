import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { getFonts } from '@/functions';

import {
  SplashScreen,
  LogInPage,
  OnBoardingPage,
  GuestHomePage,
  DataPrivacyPage,
  MilkBankLocatorPage,
  ApplyAsRequestorPage,
  ApplyAsRequestorPage2,
  ApplyAsDonorPage
} from '@/Pages'
import { ScreeningFormType } from '@/data/props';


export type RootStackParams = {
  SplashScreen: undefined;
  LogInPage: undefined;
  OnBoardingPage: undefined;
  GuestHomePage: undefined;
  DataPrivacyPage: {userType: string};
  MilkBankLocatorPage: undefined;
  ApplyAsRequestorPage: {userType: string};
  ApplyAsRequestorPage2: {userType: string, data: ScreeningFormType};
  ApplyAsDonorPage: {userType: string}

}

const Stack = createStackNavigator<RootStackParams>()

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
      <Stack.Navigator initialRouteName='GuestHomePage' screenOptions={{headerShown:false}}>
        <Stack.Screen name='SplashScreen' component={SplashScreen} />
        <Stack.Screen name='OnBoardingPage' component={OnBoardingPage}/>
        <Stack.Screen name='LogInPage' component={LogInPage}/>
        <Stack.Screen name='GuestHomePage' component={GuestHomePage}/>
        <Stack.Screen name='DataPrivacyPage' component={DataPrivacyPage}/>
        <Stack.Screen name='MilkBankLocatorPage' component={MilkBankLocatorPage}/>

        {/* ScreeningForms */}
        <Stack.Screen name='ApplyAsRequestorPage' component={ApplyAsRequestorPage}/>
        <Stack.Screen name='ApplyAsRequestorPage2' component={ApplyAsRequestorPage2}/>
        
        <Stack.Screen name='ApplyAsDonorPage' component={ApplyAsDonorPage}/>
        




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
