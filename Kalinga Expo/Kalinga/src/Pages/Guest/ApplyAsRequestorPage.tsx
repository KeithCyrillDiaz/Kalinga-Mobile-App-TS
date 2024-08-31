import { View } from "react-native";
import { KalingaStatusBar, PageIndicator } from "@/Components";
import { ApplyAsRequestorProps } from "@/data/props";

export default function ApplyAsRequestorPage ({route}: ApplyAsRequestorProps) {
    const {userType} = route.params
    return(
        <>
            {/* <KalingaStatusBar title = {`Apply as ${userType}`} home = {false}/> */}
            <View 
            style={{
                marginTop: "20%",
            }}
            >
                <PageIndicator pageNumber={4} currentPageNumber={1}/>
            </View>
         
        </>
        
    )
}