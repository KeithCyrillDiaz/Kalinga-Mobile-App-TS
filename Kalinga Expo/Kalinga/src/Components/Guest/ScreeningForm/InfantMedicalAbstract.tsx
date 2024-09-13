import { MedicalAbstractButton } from "@/Components/Buttons/MedicalAbstractButtons";
import { Requirements } from "@/data/props";
import { useImagePickerHook } from "@/hooks/ImageAndDocumentPickerHooks";
import { kalingaColor } from "@/styles/styles";
import { textStyles } from "@/styles/styleSheet";
import React from "react";
import { View, Text} from "react-native";

interface MedicalAbstractInfantProps {
    uploadImage: (value: "Gallery" | "Camera", requirementType: Requirements["Requestor"]) => void;
    uploadFile: (requirementType: Requirements["Requestor" | "Donor"]) => void;
}
export const MedicalAbstractInfant: React.FC<MedicalAbstractInfantProps> = ({
    uploadImage,
    uploadFile,
}) => {

    const buttonData: Array<Requirements["Requestor"]> = [
        "Clinical History",
        "Presenting Complaint",
        "Clinical Findings",
        "Diagnosis",
        "Treatments and Interventions",
        "Prescription",
        "Government ID",
    ];
    return(
        <>
           <Text
           style={textStyles.formTitle}
           >Medical Abstract of Infant</Text>
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
        </>
    )
}