import { MedicalAbstractButton } from "@/Components/Buttons/MedicalAbstractButtons";
import { ScreeningFormType } from "@/data/props";
import { View, Text, TouchableOpacity } from "react-native";

interface ScreeningFormPage2Props {
    data: ScreeningFormType
}
export const ScreeningFormPage2: React.FC<ScreeningFormPage2Props> = (
    data   
) =>{
    return(
        <View>
            <Text> Screening Form Page 2</Text>
        </View>
    )
}