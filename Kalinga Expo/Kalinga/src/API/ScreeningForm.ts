import axios from "axios";
import { localHostURL } from "@/data/myConstants";
import { ScreeningFormType } from "@/data/props";

interface submitScreeningFormProps {
    data: ScreeningFormType
}
export const submitScreeningForm = async ({data}: submitScreeningFormProps) => {
    console.log("uploading ScreeningForm")

    const result = await axios.post(`${localHostURL}/kalinga/saveForm`,
        {form: data},
        // {headers: {Authorization: ` Bearer${token}`}}
    )
    console.log("result", result)
}