import { kalingaColor } from "@/styles/styles";

import { View, Text, TextInput, Dimensions, TouchableOpacity } from "react-native";
import { AddressDropDowns, BirthdayAndAgeComponent, BirthWeightAndSex } from "../TextInputs";
import { useScreeningForm } from "@/hooks";
import { textStyles } from "@/styles/textInput";
import { Dropdown } from "react-native-element-dropdown";
import { babyOptions } from "@/data/devData";
import { ScreeningFormType } from "@/data/props";


interface ScreeningFormProps {
    userType: string
    data: ScreeningFormType
}
export const ScreeningForm: React.FC<ScreeningFormProps> = ({userType, data}) => {

    const {
            handleUpdatePersonalInformation, 
            handleUpdateInfantInformation,
            handleUpdateAddress,
            updateInfantBirthday,
            updateMotherBirthday,
            addChildren,
          } = useScreeningForm({userType: userType})

    return(
        <View
        style={{
            paddingHorizontal: "7%",
            paddingBottom: "7%",
            gap: 10
        }}
        >
            <Text
            style={{
                fontSize: 17,
                color: kalingaColor.text,
                fontWeight: "bold"

            }}
            >
                Personal Information
            </Text>
            <TextInput
            style={textStyles.LongTextInputStyle}
            placeholder="Full Name"
            placeholderTextColor={kalingaColor.text}
            onChangeText={(text) => handleUpdatePersonalInformation("fullName", text)}
            value={data.fullName}
            />

            <BirthdayAndAgeComponent
            formType="Personal"
            updateMotherBirthday={updateMotherBirthday}
            birthDayValue={data.birthDate}
            ageValue={data.Age}
            placeHolderLeftInput="Age"
            placeHolderRightInput="Birthday"
            placeHolderColor={kalingaColor.text}
            />

           {userType === "Requestor" && (
             <Dropdown
             style={{
                 backgroundColor: "white",
                 padding: 10,
                 borderRadius:22,
                 elevation: 7,
                 flex: 1,
                 height: 40
             }}
             placeholderStyle={{
                 color: kalingaColor.text,
                 fontSize: 14,
                 paddingLeft: 10
             }}
             selectedTextStyle={{  
                 color: kalingaColor.text,
                 fontSize: 14,
                 paddingLeft: 10
             }}
             data={babyOptions}
             labelField="label"
             valueField="value"
             placeholder="Number of Babies"
             onChange={item => {
                addChildren(parseInt(item.value))
                handleUpdatePersonalInformation("numberOfBabies", item.value)
             }}
             />
           )}

            <TextInput
            style={textStyles.LongTextInputStyle}
            placeholder="Email Address"
            placeholderTextColor={kalingaColor.text}
            onChangeText={(text) => handleUpdatePersonalInformation("email", text)}
            value={data.email}
            />
             <TextInput
            style={textStyles.LongTextInputStyle}
            placeholder="Contact Number"
            placeholderTextColor={kalingaColor.text}
            onChangeText={(text) => handleUpdatePersonalInformation("contactNumber", text)}
            value={data.contactNumber}
            />

            <AddressDropDowns
            handleUpdateAddress={handleUpdateAddress}
            />

             <TextInput
            style={textStyles.LongTextInputStyle}
            placeholder="Complete Home Address"
            placeholderTextColor={kalingaColor.text}
            multiline={true}
            onChangeText={(text) => handleUpdatePersonalInformation("homeAddress", text)}
            value={data.homeAddress}
            />

            {userType === "Requestor" && data.numberOfBabies !== ""  && (
                <>
                  <Text
                    style={{
                        fontSize: 17,
                        color: kalingaColor.text,
                        fontWeight: "bold",
                        marginTop: 20

                    }}
                    >
                        Infant Information
                    </Text>
                    {data.childrenInformation.map((item, id) => {
                        return(
                            <View
                            key={id}
                            style={{
                                gap: 7,
                                marginVertical: 10
                            }}
                            >
                            <TextInput
                            style={textStyles.LongTextInputStyle}
                            placeholder="Name of Child"
                            placeholderTextColor={kalingaColor.text}
                            onChangeText={(text) => handleUpdateInfantInformation(id, "name", text)}
                            value={data.childrenInformation[id].name}
                            />
                
                            <BirthWeightAndSex
                            handleUpdateInfantInformation={handleUpdateInfantInformation}
                            index={id}
                            data={{
                                birthWeight: data.childrenInformation[id].birthWeight,
                                sex: data.childrenInformation[id].sex,
                            }}
                            />
                            
                            <BirthdayAndAgeComponent
                            formType="Infant"
                            updateInfantBirthday={updateInfantBirthday}
                            data={{
                                birthday: item.birthday,
                                age: item.age
                            }}
                            placeHolderLeftInput="Age"
                            placeHolderRightInput="Birthday"
                            placeHolderColor={kalingaColor.text}
                            index={id}
                            />
                            </View>
                        )
                    })}
                </>
            )}
          
        </View>
    )
}