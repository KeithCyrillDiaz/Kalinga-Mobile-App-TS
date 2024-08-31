import { CustomButton, DataPrivacyAct, KalingaStatusBar } from "@/Components";

import { RootStackParams } from "@@/App";
import { StackHeaderProps, StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import { Text, View, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { DataPrivacyProps } from "@/data/props";
import { useNavigation } from "@react-navigation/native";


export default function DataPrivacyPage ({route} : DataPrivacyProps) {
    const {userType} = route.params
    const navigation = useNavigation<StackNavigationProp<RootStackParams>>()
    return(
        <SafeAreaView style={{
            backgroundColor: "#f5f5f5"
        }}>
            <KalingaStatusBar title={`Apply as ${userType}`} home={false}/>
            <ScrollView>
            <DataPrivacyAct/>
            <View
                style={{
                    flexDirection: "row",
                    gap: 27,
                    alignSelf: "center",
                    marginVertical: "10%"
                }}
            >
                {/* Accept button */}
                <CustomButton 
                navigateTo={userType === "Donor" ? 'ApplyAsDonorPage' : 'ApplyAsRequestorPage'}
                params={userType === "Donor" ? {userType: 'Donor'} : {userType: 'Requestor'}}
                navigation={navigation}
                color="#E60965"
                textColor="white"
                elevation={17}
                text="Accept"/>
                
                {/* Decline button */}
                <CustomButton 
                navigateTo={'GuestHomePage'}
                navigation={navigation}
                color="white"
                textColor="#E60965"
                elevation={17}
                text="Decline"/>
            </View>
            
            </ScrollView>
           
        </SafeAreaView>
    )
}