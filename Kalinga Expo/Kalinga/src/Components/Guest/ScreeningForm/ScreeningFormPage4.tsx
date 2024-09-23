import { MedicalAbstractButton } from "@/Components/Buttons/MedicalAbstractButtons";
import { questionTypes, ScreeningFormType, ScreeningFormTypePage2 } from "@/data/props";
import { kalingaColor } from "@/styles/styles";
import React, {useState, useEffect} from "react";
import { View, Text, TouchableOpacity, TextInput,} from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { BigTextInputQuestions, MedicalHistoryQuestionsForDonor, SexualHistoryQuestion, YesOrNoQuestions } from "@/data/devData";
import { useScreeningForm } from "@/hooks";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "@@/App";
import { YesOrNoQuestionComponent } from "./ScreeningFormPage2";
import { CustomButton } from "@/Components/Buttons/Buttons";
import { NoteComponent } from "@/Components/note";

interface ScreeningFormPage2Props {
    savedData: ScreeningFormType;
    userType: string;
}


export const ScreeningFormPage4: React.FC<ScreeningFormPage2Props> = ({
    savedData,
    userType,
}) =>{

    const {
        data, 
        updateYesOrNo, 
        handleUpdatePersonalInformation,
        validForm
    } = useScreeningForm({userType: userType, savedData, pageNumber: 4})
    console.log("Data in Screening form page 4: ", JSON.stringify(savedData, null, 2))
    const navigation = useNavigation<StackNavigationProp<RootStackParams>>()
    return(
        <>
            <NoteComponent
            message="Select your answer by ticking the circle"
            marginLeft={40}
            />   
            <View style={{
            backgroundColor: "white",
            padding: 20,
            marginHorizontal: 20,
            elevation: 7,
            gap: 7,
            borderRadius: 22
            }}>
                {MedicalHistoryQuestionsForDonor.map((item, id) => {
                    if(id > 11){
                        return (
                            <YesOrNoQuestionComponent
                            key={id}
                            questionsData={item}
                            data={data}
                            id={id}
                            updateYesOrNo={updateYesOrNo}
                            handleUpdatePersonalInformation={handleUpdatePersonalInformation}
                            />
                        )
                    }
                })}

            </View>
            <View>
                <Text
                    style={{
                        textAlign: "center",
                        marginVertical: 10,
                        fontSize: 20,
                        color: "#E60965",
                        fontWeight: "bold",
                        marginTop: 30
                    }}
                    >Sexual History</Text>

                <NoteComponent
                message="Select your answer by ticking the circle"
                marginLeft={40}
                />   
                
                <View style={{
                backgroundColor: "white",
                padding: 20,
                marginHorizontal: 20,
                elevation: 7,
                gap: 7,
                borderRadius: 22
                }}>
                    {SexualHistoryQuestion.map((item, id)=>(
                        <YesOrNoQuestionComponent
                        key={id}
                        questionsData={item}
                        id={id}
                        data={data}
                        updateYesOrNo={updateYesOrNo}
                        />
                    ))}

                </View>
                    <CustomButton
                        disabled={validForm === false} 
                        text="Next"
                        navigation={navigation}
                        navigateTo={'ApplyAsDonorPage5'}
                        color={kalingaColor.text}
                        textColor='white'
                        elevation={7}
                        params={{userType: userType, data: data}}
                    />
                    
            </View>
        </>
       
    )
}
