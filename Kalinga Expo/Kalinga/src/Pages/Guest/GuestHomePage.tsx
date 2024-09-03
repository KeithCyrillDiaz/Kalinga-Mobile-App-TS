import { Text, View, StyleSheet, StatusBar, Platform, } from "react-native";
import { GuestHomePageComponents, KalingaStatusBar } from "@/Components";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "@@/App";

export default function GuestHomePage () {
    const navigation = useNavigation<StackNavigationProp<RootStackParams>>()
    return(
        <View style={styles.container}>
            <StatusBar 
            barStyle={"light-content"}
            translucent={Platform.OS === 'android' ? false : true}
            />
            <KalingaStatusBar title="" home={true} 
            navigation={useNavigation<StackNavigationProp<RootStackParams>>()}
            back="GuestHomePage"
            />
            <GuestHomePageComponents navigation={navigation}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5"
    }
})

