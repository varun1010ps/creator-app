import {Express} from 'express'
import configService from './config'



// server port listening fucntion 
// default port is 80
export default function(app:Express){
    app.listen(configService.port,()=>{
        console.log(`server is up on port : ${configService.port} \n
         visit http://${configService.hostname}:${configService.port}`)
    })
}