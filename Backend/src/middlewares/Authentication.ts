import express from 'express'
import jwt from 'jsonwebtoken'
import { createToken } from '../models/Authentication'
import moment from 'moment'
import { getFormsByParameter } from '../models/Requirements'
import 'colors'

export const tokenVerificationForNonRegistered = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {

        console.log("Event - ".magenta + "Token Verification")

        if(!req.headers.authorization || !req.headers.authorization.startsWith("Bearer ")){
            console.log("error - ".red + "Unauthorized User")
            return res.status(401)
        }

        const token = req.headers.authorization.split(" ")[1]
        console.log("token: ", token)

        if(token !== process.env.KALINGA_BACKEND_API_KEY){
            console.log("error - ".red + "Unauthorized User")
            return res.status(401)
        }

        next()

    } catch (error) {
        console.log("Error: ".red + error)
    }
}

export const tokenVerification = async (req: express.Request, res: express.Response, next: express.NextFunction) => {

    try {

        console.log("wait: Token verification...")
        if(!req.headers.authorization || !req.headers.authorization.startsWith("Bearer ")){
            console.log("Unauthorized User")
            return res.status(401)
        }

        const token = req.headers.authorization.replace("Bearer ", "")
        console.log("token: ", token)

        next()

    } catch (error) {
        console.log("Internal Server Error - tokenVerification")
        return res.status(500).json({
            code: 1,
            message: "Internal Server Error"
        })
    }
}


export const emailAvailability = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        console.log("Checking Email Availability...")
        const {email} = req.body

        if(!email){
            console.log("Bad Request - emailAvailability")
            return res.status(400)
        }

        const checkEmail = await getFormsByParameter({
            parameter: email
        })

        if(checkEmail){
            console.log("Email is already existing")
            return res.status(304).json({
                messages: {
                    code: 1,
                    message: "Email is already existing"
                }
            })
        }
        next()
    } catch (error) {
        console.log("Internal Server Error - emailAvailability")
        return res.status(500)
    }
}


export const generateToken = async (req: express.Request, res: express.Response) => {
    try {
        
        const {email, pass} = req.body

        if(!email || !pass) {
            console.log("Bad Request - generateToken")
            return res.status(400)
        }

        const key = process.env.SECRET_KEY
        if(!key){
            throw new Error("Secret key is not defined");
        }

        const result = await createToken({
            token: jwt.sign(
                {
                    user: email,
                    pass: pass
                },
                key,
                {expiresIn: '7d'}
            ),
        })
        if(!result){
            console.log("generate token failed");
            return res.status(304).json({
                messages: {
                    code: 1,
                    message: "generate token failed"
                }
            })
        }
        console.log("result: ", result)

        return res.status(201).json({
            messages: {
                code: 0,
                message: "Generate token successfully"
            }
        });

    } catch (error) {
        console.log("Ïnternal Server Error - generateToken", error)
        return res.status(500)
    }
}