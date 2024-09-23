import { kalingaColor } from "@/styles/styles";

import { View, Text, TextInput, Dimensions, TouchableOpacity } from "react-native";
import { AddressDropDowns, BirthdayAndAgeComponent, BirthWeightAndSex } from "../../TextInputs";
import { useScreeningForm } from "@/hooks";
import { textStyles } from "@/styles/styleSheet";
import { Dropdown } from "react-native-element-dropdown";
import { babyOptions, DonorScreeningFormPage1keysTocheck, RequestorScreeningFormPage1keysTocheck } from "@/data/devData";
import { ChildrenInfo, DonorPersonalInformationFormKeys, RequestorPersonalInformationFormKeys, ScreeningFormType } from "@/data/props";
import { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { CustomButton } from "@/Components/Buttons/Buttons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "@@/App";


interface ScreeningFormProps {
    userType: string
    data?: ScreeningFormType;
}
export const ScreeningForm: React.FC<ScreeningFormProps> = ({
    userType, 
}) => {
    const navigation = useNavigation<StackNavigationProp<RootStackParams>>()
    const {
        data,
        handleUpdatePersonalInformation, 
        handleUpdateInfantInformation,
        handleUpdateAddress,
        updateInfantBirthday,
        updateMotherBirthday,
        addChildren, 
        validForm,
    } = useScreeningForm({userType: userType, pageNumber: 1})

    return(
        <View
        style={{
            paddingHorizontal: "7%",
            paddingBottom: "7%",
            gap: 10,
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
            maxLength={37}
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
            keyboardType="numeric"
            maxLength={11}
            />

            <AddressDropDowns
            handleUpdateAddress={handleUpdateAddress}
            data={{Municipality: data.Municipality, barangay: data.barangay}}
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

                <CustomButton
                    disabled={validForm === false} 
                    text="Next"
                    navigation={navigation}
                    navigateTo={userType === "Requestor" ? 'ApplyAsRequestorPage2' : 'ApplyAsDonorPage2'}
                    color={kalingaColor.text}
                    textColor='white'
                    elevation={7}
                    params={{userType: userType, data: data}}  
                />
          
        </View>
    )
}