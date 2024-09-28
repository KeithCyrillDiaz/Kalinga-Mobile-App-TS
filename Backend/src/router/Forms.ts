import express from 'express'
import { saveForm } from '../controllers/Forms'
import { emailAvailability, tokenVerificationForNonRegistered } from '../middlewares/Authentication'


export default(router: express.Router) => {
    router.post("/saveForm", tokenVerificationForNonRegistered, emailAvailability, saveForm)
}