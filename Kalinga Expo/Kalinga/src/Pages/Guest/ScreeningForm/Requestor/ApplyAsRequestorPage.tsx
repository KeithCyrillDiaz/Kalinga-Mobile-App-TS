import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { KalingaStatusBar, PageIndicator, PersonalInformation, InfantInformation, CustomButton } from "@/Components";
import { ApplyAsRequestorProps } from "@/data/props";
import { StackNavigationProp } from "@react-navigation/stack/lib/typescript/src/types";
import { RootStackParams } from "@@/App";
import { useNavigation } from "@react-navigation/native";
import { kalingaColor } from '@/styles/styles';
import { ScreeningForm } from '@/Components/Guest';
import { useScreeningForm } from '@/hooks';


export default function ApplyAsRequestorPage ({route}: ApplyAsRequestorProps) {

    const navigation = useNavigation<StackNavigationProp<RootStackParams>>()
    const {userType} = route.params
    const {data } = useScreeningForm({userType: userType})
 
    return(
        <>
            <KalingaStatusBar 
            title = {`Apply as ${userType}`} 
            navigation={navigation}
            back="DataPrivacyPage"
            home = {false} 
            backButton={true}
            params={{userType: "Requestor"}}
            />
            <ScrollView 
            style={{
                paddingTop: "20%",
            }}
            showsVerticalScrollIndicator={false}
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
                <ScreeningForm userType='Requestor' data = {data} />
                <CustomButton
                text="Next"
                navigation={navigation}
                navigateTo='ApplyAsRequestorPage2'
                color={kalingaColor.text}
                textColor='white'
                elevation={7}
                params={{userType: userType, data: data}}
                />
                <View
                style={{
                    marginVertical: 50
                }}
                />

            </ScrollView >
         
        </>
        
    )
}