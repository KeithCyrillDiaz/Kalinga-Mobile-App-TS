import { TouchableOpacity, Text, StyleSheet, View, Dimensions } from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "@@/App";
import { navigatePage } from "@/functions";
import { uploadImageOrFilesToFirebaseStorage } from "@/functions/fireBase";
import { buttonStyles } from "@/styles/styleSheet";

const {width, height } = Dimensions.get("screen")
interface MenuButtonCardProp {
    buttonName: string;
    title: string;
    subTitle: string;
    iconSize: number;
    color: string
    iconFamily: 'FontAwesome5' | 'FontAwesome' | 'MaterialIcons';
    navigateTo: keyof RootStackParams
    navigation: StackNavigationProp<RootStackParams>
    params?: RootStackParams[keyof RootStackParams]

}

export const MenuButtonCard: React.FC<MenuButtonCardProp> = ({
    buttonName, 
    title,
    subTitle,
    iconSize,
    color,
    iconFamily,
    navigateTo,
    navigation,
    params
}) => {
    
    const IconComponent = {
        FontAwesome5,
        FontAwesome,
        MaterialIcons,
    }[iconFamily];

    return(
        <TouchableOpacity
        onPress={() => navigatePage(navigation, navigateTo, params)}
        style = {{
            backgroundColor:"white",
            alignItems: "center",
            justifyContent: "center",
            width: width*.4,
            padding: "3%",
            borderRadius: 17,
            elevation: 17,
            minHeight: 140
        }}
        >
            <IconComponent
                name={buttonName as keyof typeof IconComponent.glyphMap}
                size={iconSize}
                color={color}
            />
            <Text style={{
                textAlign: "center",
                fontFamily: "Open-Sans-Condensed-Bold",
                fontSize: 14,
                color:"#E60965",
            }}>
                {title}
            </Text>
            <Text style={{
                   width:100,
                   textAlign: "center",
                   fontSize: 12,
                   color:"#E60965",
                   fontFamily: "Open-Sans-Regular"
            }}>
                {subTitle}
            </Text>
        </TouchableOpacity>
    )
}

interface CustomButtonProps {
    text: string
    disabled?: boolean 
    navigation: StackNavigationProp<RootStackParams> 
    navigateTo: keyof RootStackParams
    params?: any
    color: string
    textColor: string
    elevation?: number
}

export const CustomButton: React.FC<CustomButtonProps> = ({
    text, 
    textColor, 
    disabled = false, 
    navigation, 
    navigateTo, 
    params, 
    color,
    elevation
}) => {
    return(
        <TouchableOpacity
        disabled={disabled}
        onPress={() => navigatePage(navigation, navigateTo, params)}
        style={{
            alignSelf: "center",
            padding: 10,
            backgroundColor: color,
            alignItems:"center",
            justifyContent: "center",
            width: width * .25,
            borderRadius: 7,
            elevation: elevation,
            marginTop: "10%",
            opacity: disabled ? 0.5 : 1
        }}
        >
            <Text
            style={{
                color: textColor
            }}
            
            >{text}</Text>
        </TouchableOpacity>
    )
}

export const SubmitFormButton: React.FC = () => {
    return(
        <TouchableOpacity
        onPress={() => 
            uploadImageOrFilesToFirebaseStorage({
            uri: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
            userType: "Donor",
            purpose: "Registration",
            fileType: "Images"
        })}
        style={buttonStyles.default}
        >
            <Text 
            style={{color: "white"}}
            >Submit</Text>
        </TouchableOpacity>
    )
}
