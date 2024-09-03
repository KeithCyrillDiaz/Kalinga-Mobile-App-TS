import React, {useState, useEffect} from "react";
import { View, Text } from "react-native";
import { KalingaStatusBar, PersonalInformation } from "@/Components";
import { ApplyAsDonorProps, ScreeningFormType } from "@/data/props";
import { PageIndicator } from "@/Components";
import { StackNavigationProp } from "@react-navigation/stack/lib/typescript/src/types";
import { RootStackParams } from "@@/App";
import { useNavigation } from "@react-navigation/native";
import { InfantInformation } from "@/Components/Guest/ScreeningFormComponent/PersonalInformationComponent";
import { useScreeningForm } from "@/hooks";

export default function ApplyAsDonorPage ({route}: ApplyAsDonorProps) {
    const navigation = useNavigation<StackNavigationProp<RootStackParams>>()
    const {userType} = route.params
    const { data, handleChangeText } = useScreeningForm()
    
    return(
        <>
        <KalingaStatusBar 
        title = {`Apply as ${userType}`}
        navigation={navigation}
        back="GuestHomePage" 
        backButton={true}
        home = {false}/>
         <View 
            style={{
                marginTop: "30%",
            }}
            >
                <PageIndicator pageNumber={3} currentPageNumber={1}/>
                <Text
                style={{
                    textAlign: "center",
                    marginVertical: 20,
                    fontSize: 20,
                    color: "#E60965",
                    fontWeight: "bold"
                }}
                >Initial Screening Form</Text>
                <PersonalInformation handleChangeText={handleChangeText} form={data}/>
                <InfantInformation handleChangeText={handleChangeText} form={data}/>
            </View>
        </>
    
    )
}