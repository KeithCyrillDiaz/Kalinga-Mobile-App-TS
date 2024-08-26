import express from 'express'

export const tokenVerification = async (req: express.Request, res: express.Response, next: express.NextFunction) => {

    try {
        if(!req.headers.authorization || !req.headers.authorization.startsWith("Bearer ")){
            console.log("Unauthorized User")
            return res.status(401)
        }

        const token = req.headers.authorization.replace("Bearer ", "")
        console.log("token: ", token)

    } catch (error) {
        console.log("Internal Server Error - tokenVerification")
        return res.status(500).json({
            code: 1,
            message: "Internal Server Error"
        })
    }
}


export const generateToken = (req: express.Request, res: express.Response) => {
    try {
        
    } catch (error) {
        console.log("Ïnternal Server Error - generateToken")
        return res.status(500)
    }
}