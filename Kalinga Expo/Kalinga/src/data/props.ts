import { StackScreenProps } from "@react-navigation/stack"
import { RootStackParams } from "@@/App"

export type DataPrivacyProps = StackScreenProps<RootStackParams, 'DataPrivacyPage'>
export type ApplyAsRequestorProps = StackScreenProps<RootStackParams, 'ApplyAsRequestorPage'>
export type ApplyAsRequestorPage2Props = StackScreenProps<RootStackParams, 'ApplyAsRequestorPage2'>
export type ApplyAsDonorProps = StackScreenProps<RootStackParams, 'ApplyAsDonorPage'>

export interface ChildrenInfo {
    name: string,
    birthWeight: string,
    sex: string,
    birthday: string,
    age: string,
    ageOfGestation: string,
    medicalCondition: string,
}

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
    numberOfBabies: string;
    homeAddress: string;
    childrenInformation: Array<ChildrenInfo>,
    RFR: string;
    QA?: string;
    QB?: string;
    Q1?: string;
    Q2?: string;
    MH1?: string;
    MH2?: string;
    MH2_Reason?: string;
    MH3?: string;
    MH4?: string;
    MH5?: string;
    MH6?: string;
    MH7?: string;
    MH8?: string;
    MH8_Reason?: string;
    MH9?: string;
    MH10?: string;
    MH11?: string;
    MH12?: string;
    MH13?: string;        
    MH14?: string;
    MH14_Reason?: string;
    MH15?: string;
    SH1?: string;
    SH2?: string;
}


export interface ImageTypes {
    uri: string;
    name: string;
    type: string | undefined;
    fileName?: string;
    fileSize: number | undefined;
    owner: string;
    ownerID: string;
    userType: "Requestor" | "Donor";
}

export interface FileTypes {
    name: string;
    uri: string;
    type: string | undefined;
    userType: "Requestor" | "Donor";
    owner: string;
    fileSize: number | undefined;
    requirementType: string;
    ownerID: string;
}

export interface Requirements {
    Requestor: 
        | "Clinical History"
        | "Presenting Complaint"
        | "Clinical Findings"
        | "Diagnosis"
        | "Treatments and Interventions"
        | "Prescription"
        | "Government ID";
}

export type SelectedImages = {
    [key in Requirements["Requestor"]]?: ImageTypes;
};