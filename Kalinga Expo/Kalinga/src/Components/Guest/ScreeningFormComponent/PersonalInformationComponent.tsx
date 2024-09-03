
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import { kalingaColor } from "@/styles/styles";
import { BaseRouter } from "@react-navigation/native";
import React, {useState, useEffect} from "react";
import { ScreeningFormType } from "@/data/props";


interface LongTextInputProps {
    placeHolder?: string;
    placeHolderColor?: string;
    multiline?: boolean;
    handleChangeText?: (name: string, value: string) => void;
    fieldName?: string;
    value?: string
}

export const LongTextInput: React.FC<LongTextInputProps> = ({
    placeHolder,
    placeHolderColor,
    multiline,
    handleChangeText  = () => {},
    fieldName = "",
    value = ""
}) => {
    return(
        <TextInput
        style={{
            padding: 10,
            backgroundColor: "white",
            color: kalingaColor.text,
            borderRadius: 22,
            elevation: 7,
            paddingHorizontal: 20
        }}
        placeholder={placeHolder}
        placeholderTextColor={placeHolderColor}
        multiline={multiline}
        onChangeText={(text) => handleChangeText(fieldName, text)}
        value={value}
        />
    )
}

interface DoubleTextInputProps {
    placeHolderLeftInput?: string;
    placeHolderRightInput?: string;
    placeHolderColor?: string;
    sameLength?: boolean;
    leftFieldName?: string;
    rightFieldName?: string;
    handleChangeText?: (name: string, value: string) => void;
    leftInputValue?: string
    rightInputValue?: string
}
export const DoubleTextInput: React.FC<DoubleTextInputProps> = ({
    placeHolderLeftInput,
    placeHolderRightInput,
    placeHolderColor,
    sameLength,
    handleChangeText = () => {},
    leftFieldName = "",
    rightFieldName = "",
    leftInputValue = "",
    rightInputValue = ""

}) => {
    return(
        <View
        style={{
            flexDirection: "row",
            gap: 7
        }}
        >
        {/* Left Side Input Box */}
        <TextInput
            style={{
                padding: 10,
                backgroundColor: "white",
                color: kalingaColor.text,
                borderRadius: 22,
                elevation: 7,
                ...(sameLength ? { flex: 1 } : { width: '35%' }),
                paddingHorizontal: 20
            }}
        placeholder={placeHolderLeftInput}
        placeholderTextColor={placeHolderColor}
        onChangeText={(value)=> handleChangeText(leftFieldName, value)}
        value = {leftInputValue}
        />
        {/* Right Side Input Box */}
        <TextInput
            style={{
                padding: 10,
                backgroundColor: "white",
                color: kalingaColor.text,
                borderRadius: 22,
                elevation: 7,
                flex: 1
            }}
        placeholder={placeHolderRightInput}
        placeholderTextColor={placeHolderColor}
        onChangeText={(value)=> handleChangeText(rightFieldName, value)}
        value = {rightInputValue}
        />
        </View>
       
    )
}

interface PersonalInformationProps {
    handleChangeText: (name: string, value: string) => void
    form?: ScreeningFormType
}

export const PersonalInformation: React.FC<PersonalInformationProps> = ({
    handleChangeText = () => {},
    form
}) => {

    return(
            <View
            style={{
                paddingHorizontal: 20,
                gap: 10
            }}
            >
                <Text
            style={{
                marginLeft: "2%",
                color: kalingaColor.text,
                fontWeight: "bold",
                fontSize: 17, 
               
            }}
            >Personal Information</Text>

          <LongTextInput 
          placeHolder="Full Name"
          placeHolderColor={kalingaColor.text}
          handleChangeText={handleChangeText}
          fieldName="fullName"
          value={form?.fullName}
          
          />
          <DoubleTextInput
          placeHolderLeftInput="Age"
          leftFieldName="Age"
          leftInputValue={form?.Age}
   
          placeHolderRightInput="Birthday"
          rightFieldName="birthDate"
          rightInputValue={form?.birthDate}
          placeHolderColor={kalingaColor.text}

          handleChangeText={handleChangeText}
          
          />
          <LongTextInput 
          placeHolder="Email Address"
          placeHolderColor={kalingaColor.text}
          handleChangeText={handleChangeText}
          fieldName="email"
          value={form?.email}
          />
          <LongTextInput 
          placeHolder="Phone Number"
          placeHolderColor={kalingaColor.text}
          fieldName="contactNumber"
          handleChangeText={handleChangeText}
          value={form?.contactNumber}
          />
          <LongTextInput 
          placeHolder="Complete Address"
          placeHolderColor={kalingaColor.text}
          multiline={true}
          handleChangeText={handleChangeText}
          fieldName="homeAddress"
          value={form?.homeAddress}
          />
        </View>
    )
}
interface InfantInformationProps {
    handleChangeText: (name: string, value: string) => void
    form: ScreeningFormType
}

export const InfantInformation: React.FC<InfantInformationProps> = ({
    handleChangeText = () => {},
    form
}) => {
    return(
            <View
            style={{
                paddingHorizontal: 20,
                gap: 10,
                marginVertical: "5%"
            }}
            >
                <Text
            style={{
                marginLeft: "2%",
                color: kalingaColor.text,
                fontWeight: "bold",
                fontSize: 17, 
               
            }}
            >Infant Information</Text>

          <LongTextInput 
          placeHolder="Name of Child"
          placeHolderColor={kalingaColor.text}
          handleChangeText={handleChangeText}
          fieldName="childName"
          value={form?.childName}
          />
          <DoubleTextInput
          placeHolderLeftInput="Birth Weight"
          placeHolderRightInput="Sex"
          sameLength={true}
          placeHolderColor={kalingaColor.text}
          />
          <DoubleTextInput
          placeHolderLeftInput="Age"
          placeHolderRightInput="Birthday"
          placeHolderColor={kalingaColor.text}
          />
        
        </View>
    )
}
