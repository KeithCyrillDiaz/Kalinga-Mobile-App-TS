import { TouchableOpacity, View, Text } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';

interface CloseButtonProps {
    onClose: () => void;
    color: string;
    size?: number;
}

export const CloseButton: React.FC<CloseButtonProps> = ({
    onClose,
    color,
    size = 30
}) => {
    return(
        <TouchableOpacity
    onPress={onClose}
    style={{
        position: "absolute",
        zIndex:10,
        right: 10,
        top: 10
    }}
    >
        <Entypo name="circle-with-cross" size={size} color={color}/>
    </TouchableOpacity>
    )
}