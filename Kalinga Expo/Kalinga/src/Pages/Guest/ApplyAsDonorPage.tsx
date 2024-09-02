import { View } from "react-native";
import { KalingaStatusBar } from "@/Components";
import { ApplyAsDonorProps } from "@/data/props";
import { PageIndicator } from "@/Components";
import { StackNavigationProp } from "@react-navigation/stack/lib/typescript/src/types";
import { RootStackParams } from "@@/App";
import { useNavigation } from "@react-navigation/native";

export default function ApplyAsDonorPage ({route}: ApplyAsDonorProps) {
    const navigation = useNavigation<StackNavigationProp<RootStackParams>>()
    const {userType} = route.params
    return(
        <>
        <KalingaStatusBar 
        title = {`Apply as ${userType}`}
        navigation={navigation}
        back="GuestHomePage" 
        home = {false}/>
         <View 
            style={{
                marginTop: "30%",
            }}
            >
                <PageIndicator pageNumber={4} currentPageNumber={1}/>
            </View>
        </>
    
    )
}