import { KalingaStatusBar } from "@/Components";
import { ApplyAsRequestorProps } from "@/data/props";

export default function ApplyAsRequestorPage ({route}: ApplyAsRequestorProps) {
    const {userType} = route.params
    return(
        <KalingaStatusBar title = {`Apply as ${userType}`} home = {false}/>
    )
}