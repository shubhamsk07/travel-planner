import { Response ,Request,NextFunction} from "express";
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "..";

export const authMiddleware=async(req:Request,res:Response,next:NextFunction)=>{

    const token = req.headers.authorization?.split(" ")[1]
    if(!token){
        res.status(404).json({
            message:"token not found!"
        })
        return
    }
    const decoded = jwt.verify(token,JWT_SECRET)
    if(!decoded){
        res.status(403).json({message:"User not authorized!"})
        return
    }
    req.userId=decoded.userId;
    next();
}
