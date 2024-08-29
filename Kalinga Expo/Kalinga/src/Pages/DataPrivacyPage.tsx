import { KalingaStatusBar } from "@/Components";
import { RootStackParams } from "@@/App";
import { StackHeaderProps, StackScreenProps } from "@react-navigation/stack";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";

type Props = StackScreenProps<RootStackParams, 'DataPrivacyPage'>

export default function DataPrivacyPage ({route} : Props) {
    const {userType} = route.params
    console.log("userType: ", userType)
    return(
        <SafeAreaView style={{
            backgroundColor: "#f5f5f5"
        }}>
            <KalingaStatusBar title={`Apply as ${userType}`} home={false}/>
        </SafeAreaView>
    )
}