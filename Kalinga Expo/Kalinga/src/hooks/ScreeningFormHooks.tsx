import { ScreeningFormType } from "@/data/props"
import { calculateAge } from "@/functions/age";
import { formatDate } from "@/functions/date"
import { DateTimePickerEvent } from "@react-native-community/datetimepicker"
import {useEffect, useState} from "react"
import { Alert } from "react-native";

interface ScreeningFormProps {
    userType: string;
}

export const useScreeningForm = ({userType = "", }: ScreeningFormProps) => {
    
    //validations
    const [validMotherAge, setValidMotherAge] = useState<boolean>(true)
    const [validChildAge, setChildAge] = useState<boolean>(true)

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
        childrenInformation: [{
            name: "",
            birthWeight: "",
            sex: "",
            birthDay: "",
            age: "",
            ageOfGestation: "",
            medicalCondition: "",
        }],
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
        const age = calculateAge({selectedDate: value, formType})
            setData({
                ...data,
                [formType === "Personal" ? 'birthDate' : 'childBirthDate']: formattedDate,
                ...(ageCalculation && {
                    [formType === "Personal" ? 'Age' : 'childAge']: age?.toString() ?? ''
                })
            })
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
        
            const childrenData = [
                {
                    name: "Emma Johnson",
                    birthWeight: "3.2 kg",
                    sex: "Female",
                    birthday: "2023-09-01",
                    age: "1",
                    ageOfGestation: "38 weeks",
                    medicalCondition: "None"
                },
                {
                    name: "Liam Smith",
                    birthWeight: "3.5 kg",
                    sex: "Male",
                    birhtday: "2023-07-15",
                    age: "3",
                    ageOfGestation: "40 weeks",
                    medicalCondition: "Mild jaundice"
                }
            ]
            childrenData.map((item) => {
                if(item.name === "Emma Johnson"){item.age = "7"
                    console.log(item)
                }
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

    useEffect(() => {
        checkAgeValidity()
        if(!validMotherAge)
            Alert.alert("Invalid Mother's Age", "Please enter a valid age for the mother.")
        if(!validChildAge)
            Alert.alert("Invalid Child's Age", "Please enter a valid age for the child.")
    },[ data.Age, validMotherAge, data.childrenInformation])
    return {
        data,
        handleUpdateForm,
        handleChangeDate,
        keysOfForm,
        validMotherAge,
        validChildAge
    }
}
