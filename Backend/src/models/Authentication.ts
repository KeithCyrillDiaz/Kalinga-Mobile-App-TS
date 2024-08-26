import mongoose from "mongoose";


const tokenSchema = new mongoose.Schema({
    token: {type: String, required: true},
    expiresAt:{type: Date, required: true}
})

tokenSchema.index(
    {expiresAt: 1},
    {expireAfterSeconds: 10}
)

export const tokenModel = mongoose.model("token", tokenSchema)
export const createToken = (values: Record<string, any>) => new tokenModel(values).save().then((result) => result.toObject())
export const getToken = (token: string) => tokenModel.findOne({token})
export const deleteToken =(token: string)=> tokenModel.findOneAndDelete({token})
