import { Text, View, StyleSheet, Image, Dimensions, TextInput, TouchableOpacity} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { LogInBody, LogInFooter, LogInHeader } from "@/Components";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "@@/App";


export default function LogInPage() {
    const navigation = useNavigation<StackNavigationProp<RootStackParams>>()
    return(
        <LinearGradient
        // Background Linear Gradient
        colors={['#EF5487', '#EB90AC', '#E690AA', '#E36A91', '#EB7AA9']}
        style={{flex: 1}}>
           <LogInHeader/>
           <LogInBody navigation={navigation}/>
           <LogInFooter/>
        </LinearGradient>
    )
}

