import React, {useState, useEffect} from "react";
import { View, Text, ScrollView } from "react-native";
import { KalingaStatusBar, CustomButton } from "@/Components";
import { ApplyAsDonorProps, ScreeningFormType } from "@/data/props";
import { PageIndicator } from "@/Components";
import { StackNavigationProp } from "@react-navigation/stack/lib/typescript/src/types";
import { RootStackParams } from "@@/App";
import { useNavigation } from "@react-navigation/native";
import { ScreeningForm } from '@/Components/Guest';
import { useScreeningForm } from "@/hooks";
import { kalingaColor } from "@/styles/styles";
import { DonorScreeningFormPage1keysTocheck } from "@/data/devData";

export default function ApplyAsDonorPage ({route}: ApplyAsDonorProps) {
    const navigation = useNavigation<StackNavigationProp<RootStackParams>>()
    const {userType} = route.params
    return(
        <>
        <KalingaStatusBar 
        title = {`Apply as ${userType}`}
        navigation={navigation}
        back="GuestHomePage" 
        backButton={true}
        home = {false}/>
         <ScrollView
            style={{
                paddingTop: "20%",
            }}
            showsVerticalScrollIndicator={false}
            >
                <PageIndicator pageNumber={5} currentPageNumber={1}/>
                <Text
                style={{
                    textAlign: "center",
                    marginVertical: 20,
                    fontSize: 20,
                    color: "#E60965",
                    fontWeight: "bold"
                }}
                >Initial Screening Form</Text>
                <ScreeningForm userType='Donor'/>
                <View
                style={{
                    marginVertical: 50
                }}
                />

            </ScrollView >
        </>
    
    )
}