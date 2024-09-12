import { StyleSheet } from "react-native";
import { kalingaColor } from "./styles";

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
    }
})



