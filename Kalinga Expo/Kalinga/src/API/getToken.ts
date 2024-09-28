import AsyncStorage from "@react-native-async-storage/async-storage";

interface getTokentParams {
    registration?: boolean
}

export const getToken = async ({registration = false}: getTokentParams) => {
    try {

        if(registration){
            const token  = process.env.KALINGA_BACKEND_API_KEY
            console.log("token: ", token)
            if(!token){
                console.log("Error: " + "env is not initialized")
                return null
            }
            return token
        }

        const token = await AsyncStorage.getItem("token")
        if(!token) {
            console.log("Error: "+ "token is undefined")
            return null
        }
        return token

    } catch (error) {
        console.log("Error: "+ error)
    }
}