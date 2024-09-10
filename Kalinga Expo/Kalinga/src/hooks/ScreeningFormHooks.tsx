import { barangay } from "@/data";
import { ChildrenInfo, ScreeningFormType } from "@/data/props"
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
        numberOfBabies: '',
        childrenInformation: [],
        RFR: '',
    })

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
            birthday: "2023-07-15",
            age: "3",
            ageOfGestation: "40 weeks",
            medicalCondition: "Mild jaundice"
        },
        {
            name: "",
            birthWeight: "",
            sex: "",
            birthday: "",
            age: "",
            ageOfGestation: "",
            medicalCondition: ""
        },
    ]

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
  
        if(name === "contactNumber" && /[^0-9]/.test(value))return
        if(name === "fullName" && /[^A-Za-z. ]/.test(value))return
        setData({
            ...data,
            [name]: value
        })
    }

    const uncapitalizedString = (city: string) => {
        const trimmedString = city.trim();
        const formattedString = trimmedString.toLowerCase().replace(/(^|\s)\S/g, (letter) => letter.toUpperCase());
        return formattedString
      }

    const formatCity = (city: string) => {
        console.log("city: ", city)
        const cityArray = city.toLowerCase().split("of")
        console.log("array: ", cityArray)
       const result = city.toLowerCase().includes("of") ? cityArray[1] + " " + cityArray[0] : city
       console.log("result: ", uncapitalizedString(result))
       return uncapitalizedString(result)
    }

    const handleUpdateAddress = (name: keyof ScreeningFormType, value: {name: string}) => {
        if(name === "Municipality"){
            formatCity(value.name)
            setData({
                ...data,
                [name]: value.name,
                barangay: "" // reset barangay
            })
            return
        }
        setData({
            ...data,
            [name]: value.name
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
    //     console.log("updated data: ", JSON.stringify(data, null, 2))
    // },[data])

    useEffect(() => {
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
        keysOfForm,
        validMotherAge,
        validChildAge,
        addChildren
    }
}
