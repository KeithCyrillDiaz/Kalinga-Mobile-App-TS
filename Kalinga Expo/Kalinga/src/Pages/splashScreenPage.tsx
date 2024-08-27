
import { SplashScreen } from '@/Components/splashScreen'
import {Text, View, StyleSheet} from 'react-native'
import { useEffect } from 'react'
import { CommonActions, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '@@/App';
import { ResetPage } from '@/functions';

export default function SplashScreenPage () {
    const navigation = useNavigation<StackNavigationProp<RootStackParams>>()
    useEffect(()=>{
        const timer = setTimeout(()=> {
           ResetPage(navigation, "LogInPage")
        },2000)

        return () => clearTimeout(timer);
    },[navigation])
    return(
        <>
            <View>
                <SplashScreen/>
            </View>
        </>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})