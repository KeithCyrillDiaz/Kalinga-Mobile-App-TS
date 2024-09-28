import { localHostURL } from "@/data/myConstants";
import axios from "axios";
import { getToken } from "./getToken";
import { Requirements } from "@/data/props";

interface uploadFilesOrImagesMetaDataToDatabaseParams {
    fileType: 'Images' | 'Files';
    purpose: string;
    uri: string;
    ownerId: string;
    ownerName: string;
    requirementType: Requirements['Requestor' | 'Donor'];
}


export const uploadFilesOrImagesMetaDataToDatabase = async ({

    fileType,
    purpose,
    uri,
    ownerId, 
    ownerName,
    requirementType,

}: uploadFilesOrImagesMetaDataToDatabaseParams) => {

    try {
        const token = await getToken({registration: purpose === "Registration" ? true: false})
        console.log("Wait - " + "Uploading meta data to database")
        const result = await axios.post(`${localHostURL}/kalinga/uploadImagesMetaData`, 
            {
                fileType,
                purpose,
                uri,
                ownerId, 
                ownerName,
                requirementType,
            },
            {headers: {Authorization: `Bearer ${token}`}}
        )

        if(result) console.log("Event - " + result.data.message)
        
        return

    } catch (error) {
        console.log("Error - "+ error)
        return
    }
}