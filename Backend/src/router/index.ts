import express from 'express'
import Authentication from './Authentication'
import Form from './Forms'
import Upload from './Upload'
const router = express.Router()

export default(): express.Router => {
     Authentication(router)
     Form(router)
     Upload(router)
     return router
}