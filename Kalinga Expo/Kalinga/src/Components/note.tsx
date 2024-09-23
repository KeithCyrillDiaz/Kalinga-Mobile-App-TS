import { kalingaColor } from "@/styles/styles";
import { View, Text } from "react-native";

interface NoteComponentProps {
    message: string;
    marginLeft?: number
}
export const NoteComponent: React.FC<NoteComponentProps> = ({
    message,
    marginLeft
}) => {
    return(
        <View style={{
            flexDirection: "row",
            gap: 2,
            marginLeft: marginLeft ?? 20,
            marginBottom: "1%"
        }}>
            <Text style={{
                color: kalingaColor.text,
            }}>Note :</Text>
            <Text style={{
                  fontWeight: "300",
                  color: kalingaColor.text,
                fontFamily: "Open-Sans-Light"
            }}>{message}</Text>
        </View>
    )
}