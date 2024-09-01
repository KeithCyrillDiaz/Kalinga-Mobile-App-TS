import { View } from "react-native";
import { KalingaStatusBar } from "@/Components";
import { ApplyAsDonorProps } from "@/data/props";
import { PageIndicator } from "@/Components";

export default function ApplyAsDonorPage ({route}: ApplyAsDonorProps) {
    const {userType} = route.params
    return(
        <>
        <KalingaStatusBar title = {`Apply as ${userType}`} home = {false}/>
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