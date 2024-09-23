import { KalingaStatusBar, PageIndicator } from "@/Components";
import { ScreeningFormPage2 } from "@/Components/Guest";
import { ApplyAsDonorPage2Props } from "@/data/props";
import { useScreeningForm } from "@/hooks";
import { RootStackParams } from "@@/App";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { TouchableOpacity, View, Text, ScrollView } from "react-native";

export default function ApplyAsDonorPage2 ({route}: ApplyAsDonorPage2Props) {
    const { userType, data } = route.params
    const navigation = useNavigation<StackNavigationProp<RootStackParams>>()
    
    console.log("Requestor Page 2: ", JSON.stringify(data, null, 2))
    return(
        <>
            <KalingaStatusBar 
            title={`Apply as ${userType}`}
            back="ApplyAsDonorPage"
            navigation={navigation}
            params={{userType: userType}}
            />
             <ScrollView
            style={{
                paddingTop: "20%",
            }}
            showsVerticalScrollIndicator={false}
            >
                <PageIndicator pageNumber={5} currentPageNumber={2}/>
                <Text
                style={{
                    textAlign: "center",
                    marginVertical: 20,
                    fontSize: 20,
                    color: "#E60965",
                    fontWeight: "bold"
                }}
                >Initial Screening Form</Text>
                <ScreeningFormPage2
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