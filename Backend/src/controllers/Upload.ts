import express from 'express'
import { imageSchemaTypes, saveImage } from '../models/Upload'


export const uploadImagesMetaData = async (req: express.Request, res: express.Response) => {
    try {
        
        const {
            purpose,
            uri,
            ownerId,
            ownerName,
            requirementType,
        }= req.body as imageSchemaTypes

        console.log("Wait - " + "validating inputs...")
        if(!purpose || !uri || !ownerId || !ownerName || !requirementType){
            return res.status(400).json({messages: {
                code: 1,
                message: "Error: Missing required fields." 
            }})
        }

        console.log("Wait - " + "saving image...")
        const result = await saveImage(req.body)
        if(!result){
            console.log("Error: ".red + "Unable to save the image metadata.")
            return res.status(400).json({messages: {
                code: 1,
                message: "Unable to save the image metadata."
            }})
        }

        console.log("Event: ".magenta + "Saved image successfully")

        return res.status(200).json({
            messages: {
                code: 0,
                message: "Unable to save the image metadata."
            },
            result
        })

    } catch (error) {
        console.log("Error", error)
        return res.status(500).json({ error: "Internal Server Error" })
    }
}