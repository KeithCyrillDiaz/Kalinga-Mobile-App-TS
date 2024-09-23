import { KalingaStatusBar, PageIndicator } from "@/Components";
import { ScreeningFormPage3 } from "@/Components/Guest";
import { ApplyAsDonorPage3Props } from "@/data/props";
import { RootStackParams } from "@@/App";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, {useEffect, useState} from "react";
import { ScrollView, Text, View } from "react-native";


export default function ApplyAsDonorPage3 ({route}: ApplyAsDonorPage3Props) {
    const { userType, data } = route.params
    const navigation = useNavigation<StackNavigationProp<RootStackParams>>()
    return(
        <>
            <KalingaStatusBar
        title={`Apply as ${userType}`}
        navigation={navigation}
        back="ApplyAsDonorPage2"
        home = {false} 
        backButton={true}
        params={{userType: "Donor"}}
        />
        
        <ScrollView
            style={{
                paddingTop: "20%",
            }}
            showsVerticalScrollIndicator={false}
            >
                <PageIndicator pageNumber={5} currentPageNumber={3}/>
                <Text
                style={{
                    textAlign: "center",
                    marginVertical: 20,
                    fontSize: 20,
                    color: "#E60965",
                    fontWeight: "bold"
                }}
                >Medical History</Text>
                <ScreeningFormPage3
                savedData={data} 
                userType={userType}
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

