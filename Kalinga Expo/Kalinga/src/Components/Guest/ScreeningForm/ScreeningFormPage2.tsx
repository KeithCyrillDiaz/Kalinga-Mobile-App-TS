import { MedicalAbstractButton } from "@/Components/Buttons/MedicalAbstractButtons";
import { questionTypes, ScreeningFormType, ScreeningFormTypePage2 } from "@/data/props";
import { kalingaColor } from "@/styles/styles";
import React, {useState, useEffect} from "react";
import { View, Text, TouchableOpacity, TextInput,} from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { BigTextInputQuestions, YesOrNoQuestions } from "@/data/devData";
import { useScreeningForm } from "@/hooks";
import { CustomButton } from "@/Components/Buttons/Buttons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "@@/App";
import { NoteComponent } from "@/Components/note";

interface ScreeningFormPage2Props {
    savedData: ScreeningFormType;
    userType: string;

}


export const ScreeningFormPage2: React.FC<ScreeningFormPage2Props> = ({
    savedData,
    userType,
}) =>{

    const {
        data, 
        updateYesOrNo, 
        handleUpdatePersonalInformation,
        validForm,
    } = useScreeningForm({userType: userType, savedData, pageNumber: 2})
    console.log("Data in Screening form page 2: ", JSON.stringify(savedData, null, 2))
    const navigation = useNavigation<StackNavigationProp<RootStackParams>>()

    return(
       <>
        <View style={{
            gap: 17,
            marginBottom: 20
        }}>
                {BigTextInputQuestions.map((item, id) => (
                    <BigTextInput 
                    key={id} 
                    question={item.question} 
                    questionId = {item.questionId} 
                    data={data}
                    handleUpdatePersonalInformation={handleUpdatePersonalInformation}
                    />
                ))}
        </View>
        <View>
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
                {YesOrNoQuestions.map((item, id) => (
                    <YesOrNoQuestionComponent key={id} data={data} questionsData={item} id={id} updateYesOrNo={updateYesOrNo}/>
                ))}
             </View>

             <CustomButton
                    disabled={validForm === false} 
                    text="Next"
                    navigation={navigation}
                    navigateTo={'ApplyAsDonorPage3'}
                    color={kalingaColor.text}
                    textColor='white'
                    elevation={7}
                    params={{userType: userType, data: data}}
                />
                
        </View>
       </>
    )
}

interface BigTextInputProps {
    question: string;
    data: ScreeningFormType;
    questionId: keyof ScreeningFormTypePage2;
    handleUpdatePersonalInformation: (name: keyof ScreeningFormType, value: string) => void
}

export const  BigTextInput: React.FC<BigTextInputProps> = ({
    question,
    data,
    questionId,
    handleUpdatePersonalInformation
}) => {

    return(
        <View style={{
            marginHorizontal: 20,
            backgroundColor: "white",
            padding: 20,
            borderRadius: 22,
            elevation: 7,
            gap: 7
        }}>
            <Text style={{
                color: kalingaColor.text,
                textAlign: "justify",
                fontWeight: "700"
            }}>
                {question}
            </Text>
            <TextInput
            onChangeText={(text) => handleUpdatePersonalInformation(questionId, text)}
            style={{
                maxHeight: 70,
            }}
            multiline
            value={data[questionId]}
            />
        </View>
    )
}

interface YesOrNoQuestionComponentProps {
    questionsData: questionTypes;
    data: ScreeningFormType;
    id: number;
    updateYesOrNo: (name: keyof ScreeningFormTypePage2, value: "Yes" | "No" | '') => void
    handleUpdatePersonalInformation?: (name: keyof ScreeningFormType, value: string) => void
}

type ReasonKeys = "MH2_Reason" | "MH8_Reason" | "MH14_Reason"
export const YesOrNoQuestionComponent: React.FC<YesOrNoQuestionComponentProps> = ({
    questionsData,
    data,
    id,
    updateYesOrNo,
    handleUpdatePersonalInformation = () => {}
}) => {
    const options = ["Yes", "No"]
   return (
        <>
             <View style={{
                alignItems: "center",
                flexDirection: "row",
                gap: 17,
            }}>
               {id === 0 && (
                <View style={{
                    flexDirection: "row",
                    gap: 17,
                }}>
                     
                    {options.map((option, id) => (
                        <Text 
                        key={id}
                        style={{
                            textAlign: "center",
                            color: kalingaColor.text
                            }}>{option}</Text>
                    ))}

                </View>
               )}             
            </View>
            <View style={{
                flexDirection: "row",
                gap: 17,
                marginLeft: "1%",
            }}>
                <View style={{
                    flexDirection: "row",
                    gap: 17,
                    marginTop: 17
                }}> 
                    {/* Yes */}
                    <TouchableOpacity
                    onPress = {() =>updateYesOrNo(questionsData.questionId, "Yes")}>
                       
                        <AntDesign 
                            name={ data[questionsData.questionId] === "" || data[questionsData.questionId] === "No" ?  "checkcircleo" 
                                    : "checkcircle"} 
                            size={17} 
                            color={kalingaColor.text} 
                        />
                    </TouchableOpacity>

                    {/* No */}
                    <TouchableOpacity
                       onPress = {() => updateYesOrNo(questionsData.questionId, "No")}
                    >
                    <AntDesign 
                        name={data[questionsData.questionId] === "" || data[questionsData.questionId] === "Yes" ? "checkcircleo" 
                                : "checkcircle" } 
                        size={17} 
                        color={kalingaColor.text} 
                    />
                    </TouchableOpacity>
                </View>
                
               <View style={{
                    width: "77%",
                    gap: 7
               }}>
                <Text style={{
                        
                        textAlign: "justify",
                        color:kalingaColor.text
                    }}>{questionsData.question}</Text>
                    
                    {questionsData.followUpQuestion && data[questionsData.questionId] === "Yes" && (
                        <TextInput
                            onChangeText={(text) => {
                                if(questionsData.questionId === "MH2" 
                                    || questionsData.questionId === "MH8" 
                                    || questionsData.questionId === "MH14"){
                                    handleUpdatePersonalInformation(`${questionsData.questionId}_Reason`, text)
                                }
                            }}

                            style={{
                                borderBottomColor: kalingaColor.text,
                                borderBottomWidth: 1,
                                paddingLeft: 17,
                                paddingBottom: 7,
                                textAlign: "justify",
                                maxHeight: 70
                            }}
                            multiline
                            value={
                                    (   
                                        questionsData.questionId === "MH2" || 
                                        questionsData.questionId === "MH8" ||
                                        questionsData.questionId === "MH14"

                                    ) ? data[`${questionsData.questionId}_Reason`]: ""
                                }
                        />
                    )}
               </View>
            </View>
           
        </>
    
   )
}