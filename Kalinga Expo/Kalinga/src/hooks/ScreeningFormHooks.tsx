import { ScreeningFormType } from "@/data/props"
import {useState} from "react"

export const useScreeningForm = () => {

    const [data, setData ] = useState<ScreeningFormType>({
        Applicant_ID: "",
        userType: "Requestor",
        fullName: '',
        Municipality: '',
        barangay: '',
        Age: '',
        birthDate: '',
        email:  '',
        contactNumber: '',
        homeAddress: '',
        sex: '',
        childName: '',
        childAge: '',
        childBirthDate: '',
        birthWeight: '',
        RFR: '',
    })
    const handleChangeText = (name: string, value: string, ) => {
        console.log("name: ", name)
        setData({
            ...data,
            [name]: value
        })
    }

    return {
        data,
        handleChangeText
    }
}