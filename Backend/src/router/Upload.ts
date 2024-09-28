import { uploadImagesMetaData } from '../controllers/Upload'
import express from 'express'
import { tokenVerification, tokenVerificationForNonRegistered } from '../middlewares/Authentication'


export default (router: express.Router) => {
    router.post("/uploadImagesMetaData", tokenVerificationForNonRegistered, uploadImagesMetaData)
}