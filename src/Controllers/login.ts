import {Request,Response,NextFunction} from 'express'

export default function loginApi(req: Request,res: Response,next:NextFunction){
    res.send(200)
}