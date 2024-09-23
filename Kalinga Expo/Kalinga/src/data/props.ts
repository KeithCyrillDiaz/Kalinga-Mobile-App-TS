import { StackScreenProps } from "@react-navigation/stack"
import { RootStackParams } from "@@/App"

type PageProps<T extends keyof RootStackParams> = StackScreenProps<RootStackParams, T>;

// Define specific page props using the utility type
export type DataPrivacyProps = PageProps<'DataPrivacyPage'>;
export type ApplyAsRequestorProps = PageProps<'ApplyAsRequestorPage'>;
export type ApplyAsRequestorPage2Props = PageProps<'ApplyAsRequestorPage2'>;
export type ApplyAsDonorProps = PageProps<'ApplyAsDonorPage'>;
export type ApplyAsDonorPage2Props = PageProps<'ApplyAsDonorPage2'>;
export type ApplyAsDonorPage3Props = PageProps<'ApplyAsDonorPage3'>
export type ApplyAsDonorPage4Props = PageProps<'ApplyAsDonorPage4'>
export type ApplyAsDonorPage5Props = PageProps<'ApplyAsDonorPage5'>

type ScreeningFormTypePage2Keys = keyof ScreeningFormTypePage2;

//forchecking Forms before submitting
export type DonorPersonalInformationFormKeys = keyof Omit<ScreeningFormType, 
'RFR' | 'childrenInformation' | 'numberOfBabies' | ScreeningFormTypePage2Keys
>;

export type DonorScreeningPage2FormKeys = keyof Pick<ScreeningFormTypePage2,
    'QA' | 'QB' | 'Q1' | 'Q2'
>;

// Omit 'QA', 'QB', 'Q1', 'Q2', 'MH13', 'MH14', 'MH14_Reason', and 'MH15' from ScreeningFormTypePage2
export type DonorScreeningPage3FormKeys = keyof Omit<ScreeningFormTypePage2, 
    DonorScreeningPage2FormKeys | 'MH13' | 'MH14' | 'MH14_Reason' | 'MH15' | 'SH1' | 'SH2'
>;

// Omit the keys from both DonorScreeningPage2FormKeys and DonorScreeningPage3FormKeys
export type DonorScreeningPage4FormKeys = keyof Omit<ScreeningFormTypePage2,
   DonorScreeningPage2FormKeys | DonorScreeningPage3FormKeys
>;

export type RequestorPersonalInformationFormKeys = keyof Omit<ScreeningFormType, 
'RFR' | ScreeningFormTypePage2Keys>;

export interface ChildrenInfo {
    name: string,
    birthWeight: string,
    sex: string,
    birthday: string,
    age: string,
    ageOfGestation: string,
    medicalCondition: string,
}


export interface ScreeningFormType extends ScreeningFormTypePage2 {
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
}





export interface ScreeningFormTypePage2 {
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

export interface questionTypes {
    questionId: keyof ScreeningFormTypePage2;
    question: string;
    followUpQuestion: boolean;
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
    
    Donor: 
        | "Hepa B"
        | "HIV"
        | "Syphillis"
        | "Pregnancy Booklet"
        | "Government ID";
}

export type SelectedImages = {
    [key in Requirements["Requestor" | "Donor"]]?: ImageTypes;
};

export type SelectedFiles = {
    [key in Requirements["Requestor" | "Donor"]]?: FileTypes;
}

export interface PersonalInformationKeysToCheck {
    Requestor: RequestorPersonalInformationFormKeys,
    Donor: DonorPersonalInformationFormKeys
}