import axios from "axios";
import { localHostURL } from "@/data/myConstants";
import { ScreeningFormType } from "@/data/props";

interface submitScreeningFormProps {
    data: ScreeningFormType
}

const token = process.env.KALINGA_BACKEND_API_KEY

export const submitScreeningForm = async ({data}: submitScreeningFormProps) => {
    console.log("uploading ScreeningForm")
    if(!token){
        console.log("token is undefined")
        return
    }
    const result = await axios.post(`${localHostURL}/kalinga/saveForm`,
        {form: data},
        {headers: {Authorization: ` Bearer ${token}`}}
    )
    console.log("result", result)
}