import { StackScreenProps } from "@react-navigation/stack"
import { RootStackParams } from "@@/App"

export type DataPrivacyProps = StackScreenProps<RootStackParams, 'DataPrivacyPage'>
export type ApplyAsRequestorProps = StackScreenProps<RootStackParams, 'ApplyAsRequestorPage'>
export type ApplyAsDonorProps = StackScreenProps<RootStackParams, 'ApplyAsDonorPage'>


export interface ScreeningFormType {
    Applicant_ID: string;
    userType: string;
    fullName: string;
    Municipality: string;
    barangay: string;
    Age: string;
    birthDate: string;
    email: string;
    contactNumber: string;
    homeAddress: string;
    sex: string;
    childName: string;
    childAge: string;
    childBirthDate: string;
    birthWeight: string;
    RFR: string;
}