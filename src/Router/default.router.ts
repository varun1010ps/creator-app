import {Express,Request,Response} from 'express'
import Url from './URL'



export default function(defaultRouter:Express){
    defaultRouter.get("*",(req:Request,res:Response)=>{
        return res.send(`invalid URL : <mark><b>${req.hostname}${req.originalUrl}</b></mark>
        </br>
        this page is redirecting to login page in 5 sec.


        <script>
        setTimeout(()=>{
            console.log('redircting')
            location.href = '${Url.login}'
        },5000)
        </script>
        `)
    })
}