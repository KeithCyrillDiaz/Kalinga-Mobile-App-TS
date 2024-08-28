import { Text, View, StyleSheet, StatusBar, Platform, } from "react-native";
import { GuestHomePageComponents, KalingaStatusBar } from "@/Components";


export default function GuestHomePage () {
    return(
        <View style={styles.container}>
            <StatusBar 
            barStyle={"light-content"}
            translucent={Platform.OS === 'android' ? false : true}
            />
            <KalingaStatusBar title="" name = "Rogine" home={true}/>
            <GuestHomePageComponents/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5"
    }
})

