import { SetStateAction, useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Dimensions } from "react-native";
import { kalingaColor } from "@/styles/styles";
import { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import DateTimePicker from '@react-native-community/datetimepicker';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { calculateAge } from "@/functions/age";
import { Dropdown } from "react-native-element-dropdown";
import { sexData } from "@/data/devData";
import { ChildrenInfo, ScreeningFormType } from "@/data/props";
import { useAddressDropDownHook } from "@/hooks/AddressDropDownHook";
import { allRegions } from "@/functions/philippines";
import { useScreeningForm } from "@/hooks";


interface LongTextInputProps {
    placeHolder?: string;
    placeHolderColor?: string;
    multiline?: boolean;
    handleChangeText?: (name: string, value: string, formType: string, index: number) => string;
    fieldName?: string;
    value?: string;
    formType: "Infant" | "Personal";
    index?: number
}

const {height, width} = Dimensions.get("screen")

export const LongTextInput: React.FC<LongTextInputProps> = ({
    placeHolder,
    placeHolderColor,
    multiline,
    handleChangeText  = () => {},
    fieldName = "",
    value = "",
    formType,
    index = 0
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
        onChangeText={(text) => handleChangeText(fieldName, text, formType, index)}
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


interface BirthdayAndAgeComponentProps {
    data?: {
        birthday: string,
        age: string
    },
    birthDayValue?: string
    ageValue?: string
    sameLength?: boolean
    placeHolderLeftInput?: string;
    placeHolderRightInput?: string;
    placeHolderColor?: string; 
    formType: string
    updateInfantBirthday?: (
        index: number,
        event: DateTimePickerEvent, 
        value: Date | undefined, 
        formType: string, 
        ageCalculation?: boolean) => void
    updateMotherBirthday?: (
            event: DateTimePickerEvent, 
            value: Date | undefined, 
            formType: string, 
            ageCalculation?: boolean) => void
    index?: number
}

export const BirthdayAndAgeComponent: React.FC<BirthdayAndAgeComponentProps> = ({
    placeHolderLeftInput,
    placeHolderRightInput,
    placeHolderColor,
    sameLength,
    birthDayValue = "",
    ageValue = "",
    updateMotherBirthday = () => {},
    updateInfantBirthday = () => {},
    formType = "",
    data,
    index = 0
}) => {

    const [dateSelected, setDateSelected] = useState<Date>(new Date())
    const [showDateTimePicker, setShowDateTimePicker] = useState<boolean>(false)
    return(
        <View
        style={{ 
            flexDirection: "row",
            gap: 7
        }}
        >
            <TextInput
            style={{
                padding: 10,
                backgroundColor: "white",
                color: kalingaColor.text,
                borderRadius: 22,
                elevation: 7,
                ...(sameLength ? { flex: 1 } : { width: '35%' }),
                paddingHorizontal: 20,
                height: 40
                }}
            placeholder={placeHolderLeftInput}
            placeholderTextColor={placeHolderColor}
            value = {formType === "Infant" ? data?.age : ageValue}
            editable={false}
            />
            {/* Right Side Input Box */}
            <TouchableOpacity
            onPress={() => setShowDateTimePicker(!showDateTimePicker)}
            style={{
                    position: "relative",
                    flex: 1,
                    backgroundColor: "white",
                    borderRadius: 22,
                    elevation: 7,
                    height: 40,
                    paddingLeft: 5
            }}
            >
                <TextInput
                    style={{
                        padding: 10,
                        color: kalingaColor.text,
                 
                    }}
                    placeholder={placeHolderRightInput}
                    placeholderTextColor={placeHolderColor}
                    value = {formType === "Infant" ? data?.birthday : birthDayValue}
                    editable={false}
                />
                <TouchableOpacity
                onPress={() => setShowDateTimePicker(!showDateTimePicker)}
                style={{
                    position: "absolute",
                    right: 20,
                    top: 10
                }}
                >
                <FontAwesome name="calendar" size={24} color={kalingaColor.text} />
                </TouchableOpacity>
            </TouchableOpacity>


            {showDateTimePicker && 
            <DateTimePicker
            testID="dateTimePicker"
            value={dateSelected === new Date() ? new Date() : dateSelected}
            mode="date"
            display="spinner"
            onChange={(event, value) => {
                setShowDateTimePicker(false)
                if(formType !== "Personal") updateInfantBirthday(index, event, value, formType, true)
                    else updateMotherBirthday(event, value, formType, true)
                setDateSelected(value ?? new Date())
            }}

           />}
        </View>
    )
}

interface BirthWeightAndSexProps {
    handleUpdateInfantInformation: (index: number, name: keyof ChildrenInfo, value: string) => void
    index: number
    data: {
        birthWeight: string,
        sex: string
    }
}

export const BirthWeightAndSex: React.FC<BirthWeightAndSexProps> = ({
    handleUpdateInfantInformation = () => {},
    index = 0,
    data
}) => {

    return(
        <View style={{
            flexDirection: "row",
            gap: 7,
        }}>
        <TextInput
        placeholder="BirthWeight"
        placeholderTextColor={kalingaColor.text}
        style={{
            elevation: 7,
            backgroundColor: "white",
            color: kalingaColor.text,
            padding: 10,
            borderRadius: 22,
            width: width/2,
            height: 40,
            paddingHorizontal: 20
        }}
        keyboardType="numeric"
        onChangeText={(text) => handleUpdateInfantInformation(index, "birthWeight", text)}
        value={data.birthWeight}
       />
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
        placeholder="Sex"
        data={sexData}
        labelField={"label"}
        valueField={"value"}
        maxHeight={300}
        searchPlaceholder="Search..."
        onChange={item => handleUpdateInfantInformation(index, "sex", item.value)}

        />
        </View>
    )
}

interface AddressDropDownsProps {
    handleUpdateAddress: (name: keyof ScreeningFormType, value: {name: string}) => void
    data: {
        Municipality: string,
        barangay: string
    }
}
export const AddressDropDowns: React.FC<AddressDropDownsProps> = ({
    handleUpdateAddress,
    data,
}) => {
    console.log("data: ", data)
   
    const {
        provinces, 
        cities, 
        barangays,
        updateBarangayList,
        updateCitiesList,
        updateProvinceList,
   
    } = useAddressDropDownHook()

    return(

        <>
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
            data={allRegions}
            search
            labelField="name"
            valueField="reg_code"
            placeholder="Select Region"
            maxHeight={270}
            onChange={item => {
                updateProvinceList(item)
            }}
            />


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
            data={provinces}
            search
            labelField="name"
            valueField="prov_code"
            placeholder="Select Province"
            maxHeight={270}
            onChange={item => {
                handleUpdateAddress("Municipality", {name: ""})
                updateCitiesList(item)
            }}
            />
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
            data={cities}
            search
            labelField="name"
            valueField="name"
            placeholder="Select City"
            maxHeight={270}
            onChange={item => {
                handleUpdateAddress("Municipality", item)
                updateBarangayList(item)
            }}
          
            />
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
            data={barangays}
            search
            labelField="name"
            valueField="name"
            placeholder="Select Barangay"
            maxHeight={270}
            onChange={item => {
                handleUpdateAddress("barangay", item)
            }}
            />
        </>
       
    )
}