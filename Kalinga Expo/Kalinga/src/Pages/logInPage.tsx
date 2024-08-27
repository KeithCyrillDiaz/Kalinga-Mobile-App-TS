import { Text, View, StyleSheet, Image, Dimensions, TextInput, TouchableOpacity} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { LogInBody, LogInFooter, LogInHeader } from "@/Components";



export default function LogInPage() {
    return(
        <LinearGradient
        // Background Linear Gradient
        colors={['#EF5487', '#EB90AC', '#E690AA', '#E36A91', '#EB7AA9']}
        style={{flex: 1}}>
           <LogInHeader/>
           <LogInBody/>
           <LogInFooter/>
        </LinearGradient>
    )
}

