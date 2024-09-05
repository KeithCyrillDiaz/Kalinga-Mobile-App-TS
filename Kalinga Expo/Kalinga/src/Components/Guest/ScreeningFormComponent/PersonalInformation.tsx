
import { View, Text } from "react-native";
import { kalingaColor } from "@/styles/styles";
import React from "react";
import { ScreeningFormType } from "@/data/props";
import { Dropdown } from "react-native-element-dropdown";
import { useScreeningForm } from "@/hooks";
import { LongTextInput, BirthdayAndAgeComponent  } from "@/Components/TextInputs";
interface PersonalInformationProps {
    userType: string;
}

export const PersonalInformation: React.FC<PersonalInformationProps> = ({
    userType = "",
}) => {

    const {data, handleChangeDate, handleUpdateForm } = useScreeningForm({userType: userType})
 
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
                color:  kalingaColor.text,
                fontWeight: "bold",
                fontSize: 17, 
               
            }}
            >Personal Information</Text>

          <LongTextInput 
          placeHolder="Full Name"
          placeHolderColor={kalingaColor.text}
          handleChangeText={handleUpdateForm}
          fieldName="fullName"
          value={data.fullName}
          
          />
          <BirthdayAndAgeComponent
            ageValue={data.Age} 
            birthDayValue={data.birthDate}
            placeHolderLeftInput="Age"
            placeHolderRightInput="Birthday"
            placeHolderColor={kalingaColor.text}
            handleChangeDate={handleChangeDate}
            formType="Personal"
          />
          
          <LongTextInput 
          placeHolder="Email Address"
          placeHolderColor={kalingaColor.text}
          handleChangeText={handleUpdateForm}
          fieldName="email"
          value={data.email}
          />
          <LongTextInput 
          placeHolder="Phone Number"
          placeHolderColor={kalingaColor.text}
          fieldName="contactNumber"
          handleChangeText={handleUpdateForm}
          value={data.contactNumber}
          />
          <LongTextInput 
          placeHolder="Complete Address"
          placeHolderColor={kalingaColor.text}
          multiline={true}
          handleChangeText={handleUpdateForm}
          fieldName="homeAddress"
          value={data.homeAddress}
          />
        </View>
    )
}
