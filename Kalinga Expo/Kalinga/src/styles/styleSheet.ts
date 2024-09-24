import { StyleSheet, Dimensions } from "react-native";
import { kalingaColor } from "./styles";

const {width, height} = Dimensions.get("screen")

export const textStyles = StyleSheet.create({
    LongTextInputStyle: {
        padding: 10,
        paddingHorizontal: 20,
        color: kalingaColor.text,
        elevation: 7,
        backgroundColor: "white",
        borderRadius: 22,
        height: 40
    },

    formTitle: {
        textAlign: "center",
        marginVertical: 20,
        fontSize: 20,
        color: kalingaColor.text,
        fontWeight: "bold"
    },

})

export const buttonStyles = StyleSheet.create({
    default: {
        alignSelf: "center",
        padding: 10,
        backgroundColor: kalingaColor.text,
        alignItems:"center",
        justifyContent: "center",
        width: width * .25,
        borderRadius: 7,
        elevation: 7,
        marginTop: "10%",
    }
})



