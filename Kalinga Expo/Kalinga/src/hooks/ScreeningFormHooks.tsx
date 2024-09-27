import { barangay } from "@/data";
import { DonorScreeningFormPage1keysTocheck, DonorScreeningFormPage2keysTocheck, DonorScreeningFormPage3keysTocheck, DonorScreeningFormPage4keysTocheck, RequestorScreeningFormPage1keysTocheck } from "@/data/devData";
import { ChildrenInfo, DonorPersonalInformationFormKeys, DonorScreeningPage2FormKeys, DonorScreeningPage3FormKeys, DonorScreeningPage4FormKeys, PersonalInformationKeysToCheck, RequestorPersonalInformationFormKeys, ScreeningFormType, ScreeningFormTypePage2 } from "@/data/props"
import { calculateAge } from "@/functions/age";
import { formatDate } from "@/functions/date"
import { DateTimePickerEvent } from "@react-native-community/datetimepicker"
import {useEffect, useState} from "react"
import { Alert } from "react-native";
import randomatic from 'randomatic';

interface ScreeningFormProps {
    userType?: string;
    savedData?: ScreeningFormType | undefined
    pageNumber?: 1 | 2 | 3 | 4
}

export const useScreeningForm = ({
    userType = "",
    savedData,
    pageNumber
}: ScreeningFormProps) => {
    
    //validations
    const [validMotherAge, setValidMotherAge] = useState<boolean>(true)
    const [validChildAge, setChildAge] = useState<boolean>(true)
    const [validForm, setValidForm] = useState<boolean>(true)

    const [data, setData ] = useState<ScreeningFormType>( savedData ?? {
        Applicant_ID: randomatic('Aa0', 7) + String(Date.now()).slice(-7),
        userType: userType,
        fullName: '',
        Municipality: '',
        barangay: '',
        Age: '',
        birthDate: '',
        email:  '',
        contactNumber: '',
        homeAddress: '',
        numberOfBabies: '',
        childrenInformation: [],
        RFR: '',
        QA: '',
        QB: '',
        Q1: '',
        Q2: '',
        MH1: '',
        MH2: '',
        MH2_Reason: '',
        MH3: '',
        MH4: '',
        MH5: '',
        MH6: '',
        MH7: '',
        MH8: '',
        MH8_Reason: '',
        MH9: '',
        MH10: '',
        MH11: '',
        MH12: '',
        MH13: '',      
        MH14: '',
        MH14_Reason: '',
        MH15: '',
        SH1: '',
        SH2: '',
    })

    
    const addChildren = (length: number) => {

        const newChild =  {
            name: "",
            birthWeight: "",
            sex: "",
            birthday: "",
            age: "",
            ageOfGestation: "",
            medicalCondition: ""
        }
        const newChildren = Array.from({ length }, () => ({ ...newChild }));
        setData({
            ...data,
            childrenInformation: [
                ...newChildren 
            ]
        });
    }

    const handleUpdatePersonalInformation = (name: keyof ScreeningFormType, value: string) => {
        // Validate contactNumber and fullName
        if (name === "contactNumber" && /[^0-9]/.test(value)) return;
        if (name === "fullName" && /[^A-Za-z. ]/.test(value)) return;
    
        setData({
            ...data,
            [name]: value
        });
    };

    const uncapitalizedString = (city: string) => {
        const trimmedString = city.trim();
        const formattedString = trimmedString.toLowerCase().replace(/(^|\s)\S/g, (letter) => letter.toUpperCase());
        return formattedString
      }

    const formatCity = (city: string) => {
        const cityArray = city.toLowerCase().split("of")
       const result = city.toLowerCase().includes("of") ? cityArray[1] + " " + cityArray[0] : city
       const formattedCity = uncapitalizedString(result)
       return formattedCity
    }

    const handleUpdateAddress = (name: keyof ScreeningFormType, value: {name: string}) => {
        if(name === "Municipality"){
           const city = formatCity(value.name)
            setData({
                ...data,
                [name]:  city,
                barangay: "" // reset barangay
            })
            return 
        }
        const barangay = formatCity(value.name)
        setData({
            ...data,
            [name]: barangay
        })
    }

    const handleUpdateInfantInformation = (index: number, name: keyof ChildrenInfo, value: string) => {
        
        if(name === "birthWeight" && /[^0-9]/.test(value))return
        if(name === "name" && /[^A-Za-z. ]/.test(value))return
        const newChildInfo = data.childrenInformation.map((item, id) => {
            if(id === index){
                return{
                    ...item,
                    [name]: value
                }
            }
            return item
        })
        setData({
            ...data,
            childrenInformation: newChildInfo
        })
    }

    const updateMotherBirthday = (
        event: DateTimePickerEvent, 
        value: Date | undefined, 
        formType: string,
        ageCalculation?: boolean
    ) => {
        const {formattedDate} = formatDate({selectedDate: value})
        const age = calculateAge({selectedDate: value, formType})
        if(formattedDate)
            setData({
                ...data,
                birthDate: formattedDate,
                ...(ageCalculation && {
                    Age: age?.toString() ?? ""
                })
            })
    }

    const updateInfantBirthday = (
        index: number,
        event: DateTimePickerEvent, 
        value: Date | undefined, 
        formType: string,
        ageCalculation?: boolean
    ) => {
        const {formattedDate} = formatDate({selectedDate: value})
        const age = calculateAge({selectedDate: value, formType})
        if(formattedDate){
            const newChildInfo = data.childrenInformation.map((item, id) => {
                if(index === id){
                    return{
                        ...item,
                        birthday: formattedDate,
                        ...(ageCalculation && {
                            age: age?.toString() ?? ""
                        })
                    }
                }
                return item
            })
            setData({
                ...data,
                childrenInformation: newChildInfo
            })
        }
           
    }
 

    const checkAgeValidity = () => {
        const {Age} = data
        if(Age === "") return
        const motherAge = parseInt(data.Age)
        if(motherAge < 13 || ["New Born", "months", "days"].includes(Age)) 
            {
                setValidMotherAge(false)
                setData({
                    ...data,
                    Age:"",
                    birthDate: ""
                })
            }
            else setValidMotherAge(true)
    }

    const updateYesOrNo = (name: keyof ScreeningFormTypePage2, value: "Yes" | "No" | '') => {

        const updatedData: Partial<ScreeningFormType> = {
            [name]: value
        }
        if ((name === "MH2" || name === "MH8" || name === "MH14") && value === "No") {
            updatedData[`${name}_Reason`] = "";
        }

        setData({
            ...data,
            ...updatedData
        })

    }


    const formChecker = (
        screeningFormData: ScreeningFormType 
    ): boolean => {
        // Check if each key in keysToCheck exists in screeningFormData and is a string
        const keysToCheck = 
        userType === "Donor" && pageNumber === 1 ? DonorScreeningFormPage1keysTocheck 
        : userType === "Requestor" && pageNumber === 1 ? RequestorScreeningFormPage1keysTocheck
        : userType === "Donor" && pageNumber === 2 ? DonorScreeningFormPage2keysTocheck
        : userType === "Donor" && pageNumber === 3 ? DonorScreeningFormPage3keysTocheck
        : userType === "Donor" && pageNumber === 4 ? DonorScreeningFormPage4keysTocheck
        : undefined
        
        if(!keysToCheck) return false
        const isFormDataValid = keysToCheck.every(key => {
            const value = screeningFormData[key];
            if(key === "MH2_Reason" || key === "MH8_Reason" || key === "MH14_Reason") {
                const newKey = key.split('_')[0] as 'MH2' | 'MH8' | 'MH14';
                const value1 = screeningFormData[newKey]
                const value2 = screeningFormData[key]
                if(value1 === "Yes" && value2 === "") return false
                else return true
            }
            return typeof value === 'string' && value.trim() !== '';
        });
    
        return isFormDataValid
    };
    

    useEffect(() => {
        console.log("updated data: ", JSON.stringify(data, null, 2))
        setValidForm(formChecker(data))
    },[data])

    useEffect(() => {
        const {numberOfBabies} = data
        if(numberOfBabies === "") return
        addChildren(parseInt(data.numberOfBabies))
    },[data.numberOfBabies])


    useEffect(() => {
        checkAgeValidity()
        if(!validMotherAge)
            Alert.alert("Invalid Mother's Age", "Please enter a valid age for the mother.")
        if(!validChildAge)
            Alert.alert("Invalid Child's Age", "Please enter a valid age for the child.")
    },[ data.Age, validMotherAge, data.childrenInformation])

    useEffect(() => {

        const { barangay, Municipality} = data
        if(barangay === "" && Municipality === "") return
        if(barangay !== "" && Municipality !== ""){
            setData({
                ...data,
                homeAddress: barangay + " " + Municipality
            })
        } else {
            setData({
                ...data,
                homeAddress: "" // reset
            })
        }
    },[
        data.barangay,
        data.Municipality
    ])

    return {
        data,
        handleUpdatePersonalInformation,
        handleUpdateInfantInformation,
        handleUpdateAddress,
        updateMotherBirthday,
        updateInfantBirthday,
        validForm,
        validMotherAge,
        validChildAge,
        addChildren,
        updateYesOrNo,
    }
}
