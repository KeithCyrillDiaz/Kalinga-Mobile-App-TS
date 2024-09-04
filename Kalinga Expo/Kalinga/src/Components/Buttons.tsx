import { TouchableOpacity, Text, StyleSheet, View, Dimensions } from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "@@/App";
import { navigatePage } from "@/functions";

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
            elevation: 17
        }}
        >
            <IconComponent
                name={buttonName as keyof typeof IconComponent.glyphMap}
                size={iconSize}
                color={color}
            />
            <Text style={{
                textAlign: "center",
                fontFamily: "Open-Sans-Bold",
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
    disabled, 
    navigation, 
    navigateTo, 
    params, 
    color,
    elevation
}) => {
    return(
        <TouchableOpacity
        disabled={disabled ?? false}
        onPress={() => navigatePage(navigation, navigateTo, params)}
        style={{
            alignSelf: "center",
            padding: 10,
            backgroundColor: color,
            alignItems:"center",
            justifyContent: "center",
            width: width * .25,
            borderRadius: 7,
            elevation: elevation
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

export const SubmitButton: React.FC = () => {
    return(
        <TouchableOpacity>
            <Text>Submit</Text>
        </TouchableOpacity>
    )
}