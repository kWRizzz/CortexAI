import{
    getAuth
} from "firebase-admin/auth"
import{
    app
} from "../config/firbase.js"
import userModel from "../model/user.model.js"

export const registerUser= async (
    req,
    res
) => {
    try {
        const {token} =req.body
        const  decode= await getAuth(app).verifyIdToken(token);
        let user= await userModel.findOne({
            fireBaseId:decode.uid
        })

        if(!user){
             user= await userModel.create({
                fireBaseId:decode.uid
             })
        }
    } catch (error) {
        console.log(`error in registering`);
        return res.status(500).json({
            message:`error ${error}`
        })
    }
}