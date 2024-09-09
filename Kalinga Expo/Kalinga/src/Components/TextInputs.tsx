import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Dimensions } from "react-native";
import { kalingaColor } from "@/styles/styles";
import { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import DateTimePicker from '@react-native-community/datetimepicker';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { calculateAge } from "@/functions/age";
import { Dropdown } from "react-native-element-dropdown";
import { sexData } from "@/data/devData";

interface LongTextInputProps {
    placeHolder?: string;
    placeHolderColor?: string;
    multiline?: boolean;
    handleChangeText?: (name: string, value: string) => void;
    fieldName?: string;
    value?: string
}

const {height, width} = Dimensions.get("screen")

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


interface BirthdayAndAgeComponentProps {
    birthDayValue?: string
    ageValue?: string
    sameLength?: boolean
    placeHolderLeftInput?: string;
    placeHolderRightInput?: string;
    placeHolderColor?: string; 
    formType: string
    handleChangeDate: (event: 
        DateTimePickerEvent, 
        value: Date | undefined, 
        formType: string, 
        ageCalculation?: boolean) => void
}

export const BirthdayAndAgeComponent: React.FC<BirthdayAndAgeComponentProps> = ({
    placeHolderLeftInput,
    placeHolderRightInput,
    placeHolderColor,
    sameLength,
    birthDayValue = "",
    ageValue = "",
    handleChangeDate = () => {},
    formType = ""
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
                paddingHorizontal: 20
                }}
            placeholder={placeHolderLeftInput}
            placeholderTextColor={placeHolderColor}
            value = {ageValue}
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
            }}
            >
                <TextInput
                    style={{
                        padding: 10,
                        color: kalingaColor.text
                    }}
                    placeholder={placeHolderRightInput}
                    placeholderTextColor={placeHolderColor}
                    value = {birthDayValue}
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
                handleChangeDate(event, value, formType, true)
                setDateSelected(value ?? new Date())
            }}

           />}
        </View>
    )
}


export const BirthWeightAndSex: React.FC = () => {

    const [focus, setIsFocus] = useState<boolean>(false)
    const [value, setValue] = useState<string>()

    return(
        <View style={{
            flexDirection: "row",
            gap: 7,
            height: 50
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
            width: width/2
        }}
        />
        <Dropdown
        style={{
            backgroundColor: "white",
            padding: 10,
            borderRadius:22,
            elevation: 7,
            flex: 1
        }}
        placeholderStyle={{color: kalingaColor.text}}
        selectedTextStyle={{color: kalingaColor.text}}
        data={sexData}
        labelField={"label"}
        valueField={"value"}
        search
        maxHeight={300}
        searchPlaceholder="Search..."
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        value={value}
        onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}

        />
        </View>
    )
}