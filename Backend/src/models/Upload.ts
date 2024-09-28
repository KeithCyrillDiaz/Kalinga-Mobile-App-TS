import mongoose from "mongoose";

export interface imageSchemaTypes extends Document {
    purpose: string;
    uri: string;
    ownerId: string;
    ownerName: string;
    requirementType: string;
}


const imageSchema: mongoose.Schema<imageSchemaTypes> = new mongoose.Schema({
    purpose: {type: String, required: true},
    uri: {type: String, required: true},
    ownerId: {type: String, required: true},
    ownerName: {type: String, required: true},
    requirementType: {type: String, required: true},
})

export const imageModel = mongoose.model("Images", imageSchema)
export const saveImage = (values: imageSchemaTypes) => new imageModel(values).save().then((result) => result.toObject())
export const getImage = (field: keyof imageSchemaTypes, param: string) => imageModel.findOne({[field]: param})


