import { dataPrivacyActText } from "@/data/devData";
import { Text, View, StyleSheet, Dimensions } from "react-native";


const {height, width} = Dimensions.get("screen")
export const DataPrivacyAct: React.FC = () => {
    return(
        <View style={{
            backgroundColor: "white",
            marginHorizontal: "7%",
            elevation: 17,
            marginTop: "30%",
            flex: 1,
            padding: 17,
            borderRadius: 17
        }}>
            <Text
            style={{
                fontFamily: 'Open-Sans-Bold',
                fontSize: 25,
                color: '#E60965',
                textAlign: "center"
            }}
            > Data Privacy Act</Text>
            <Text style={{
                fontFamily: 'Open-Sans-Regular',
                fontSize: 17,
                textAlign: 'justify',
                color: '#E60965',
            }}>
                {dataPrivacyActText}
            </Text>
        </View>
    )
}