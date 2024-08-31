import { KalingaStatusBar } from "@/Components";
import { ApplyAsDonorProps } from "@/data/props";

export default function ApplyAsDonorPage ({route}: ApplyAsDonorProps) {
    const {userType} = route.params
    return(
        <KalingaStatusBar title = {`Apply as ${userType}`} home = {false}/>
    )
}