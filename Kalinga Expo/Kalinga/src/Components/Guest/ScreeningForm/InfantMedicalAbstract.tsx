import { MedicalAbstractButton } from "@/Components/Buttons/MedicalAbstractButtons";
import { Requirements } from "@/data/props";
import { useImagePickerHook } from "@/hooks/ImageAndDocumentPickerHooks";
import { kalingaColor } from "@/styles/styles";
import { textStyles } from "@/styles/styleSheet";
import React from "react";
import { View, Text} from "react-native";

interface MedicalAbstractInfantProps {
    uploadImage: (value: "Gallery" | "Camera", requirementType: Requirements["Requestor"]) => void
}
export const MedicalAbstractInfant: React.FC<MedicalAbstractInfantProps> = ({
    uploadImage
}) => {
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
                <MedicalAbstractButton title="Clinical History" uploadImage = {uploadImage}/>
                <MedicalAbstractButton title="Presenting Complaint" uploadImage = {uploadImage}/>
                <MedicalAbstractButton title="Clinical Findings" uploadImage = {uploadImage}/>
                <MedicalAbstractButton title="Diagnosis" uploadImage = {uploadImage}/>
                <MedicalAbstractButton title="Treatments and Interventions" uploadImage = {uploadImage}/>
                <MedicalAbstractButton title="Prescription" uploadImage = {uploadImage}/>
                <MedicalAbstractButton title="Government ID" uploadImage = {uploadImage}/>
        </>
    )
}