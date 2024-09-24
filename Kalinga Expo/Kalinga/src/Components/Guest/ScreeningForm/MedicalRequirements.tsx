import { View, Text, TouchableOpacity} from "react-native";
import React, {useState} from "react";
import { MedicalAbstractButton } from "@/Components/Buttons/MedicalAbstractButtons";
import { Requirements } from "@/data/props";
import { useImagePickerHook } from "@/hooks/ImageAndDocumentPickerHooks";
import { kalingaColor } from "@/styles/styles";
import { buttonStyles, textStyles } from "@/styles/styleSheet";

import { firebaseAuthentication } from "@/functions/fireBase";
import { LoadingBar } from "@/Components/loadingBar";


interface MedicalRequirementsProps {
    uploadImage: (value: "Gallery" | "Camera", requirementType: Requirements["Requestor" | "Donor"]) => void;
    uploadFile: (requirementType: Requirements["Requestor" | "Donor"]) => void;
    buttonData: Array<Requirements["Requestor" | "Donor"]>;
    userType: "Donor" | "Requestor";
}
export const MedicalRequirements: React.FC<MedicalRequirementsProps> = ({
    uploadImage,
    uploadFile,
    buttonData,
    userType
}) => {

    const [uploadingPercentage, setLoadingPercentage] = useState<number>(0)


    if(buttonData.length)
    return(
        <>
           <Text
           style={textStyles.formTitle}
           >{userType === "Requestor" ? "Medical Abstract of Infant" : "Medical Requirements"}</Text>
            <Text
           style={{
            textAlign: "center",
            color: kalingaColor.text,
            marginBottom: 7
           }}
           >Note: Please make sure that your images are clear</Text>
           {buttonData.map((item, id) => (
             <MedicalAbstractButton 
             key={id}
             title={item}
             uploadImage = {uploadImage}
             uploadFile={uploadFile} 
             />
           ))}

           <SubmitButton/>
           {/* <LoadingBar progressNum={50} fileType="files" visible={true}/> */}
        </>
    )
}


const SubmitButton: React.FC = () => {
    return(
        <TouchableOpacity
        onPress={() => firebaseAuthentication()}
        style={buttonStyles.default}
        >
            <Text 
            style={{color: "white"}}
            >Submit</Text>
        </TouchableOpacity>
    )
}