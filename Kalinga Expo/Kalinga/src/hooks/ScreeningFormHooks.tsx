import { ScreeningFormType } from "@/data/props"
import { calculateAge } from "@/functions/age";
import { formatDate } from "@/functions/date"
import { DateTimePickerEvent } from "@react-native-community/datetimepicker"
import {useEffect, useState} from "react"

interface ScreeningFormProps {
    userType: string;

}

export const useScreeningForm = ({userType = "", }: ScreeningFormProps) => {

    const [data, setData ] = useState<ScreeningFormType>({
        Applicant_ID: "",
        userType: userType,
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
    const handleUpdateForm = (name: string, value: string, ) => {
        console.log("value: ", value)
        console.log("name: ", name)
        setData({
            ...data,
            [name]: value
        })
    }

    const handleChangeDate = (
        event: DateTimePickerEvent, 
        value: Date | undefined, 
        formType: string,
        ageCalculation?: boolean
    ) => {

        const {formattedDate} = formatDate({selectedDate: value})
        const age = calculateAge({selectedDate: value})
            setData({
                ...data,
                [formType === "Personal" ? 'birthDate' : 'childBirthDate']: formattedDate,
                ...(ageCalculation && {
                    [formType === "Personal" ? 'Age' : 'childAge']: age?.toString() ?? ''
                })
            })
    }

    const keysOfForm = [
        'Applicant_ID',
        'userType',
        'fullName',
        'Municipality',
        'barangay',
        'Age',
        'birthDate',
        'email',
        'contactNumber',
        'homeAddress',
        'sex',
        'childName',
        'childAge',
        'childBirthDate',
        'birthWeight',
        'RFR',
    ]

    // useEffect(() => {
    //     console.log("data: ", data)
    // },[data])

    return {
        data,
        handleUpdateForm,
        handleChangeDate,
        keysOfForm
    }
}
