import {Express} from 'express'
import loginApi from '../Controllers/login'
import baseUrl from './URL'


export default function(router:Express){
    // login api @method POST
    router.post(baseUrl.login,loginApi)

    //testing route
    router.get(baseUrl.testing,(req,res)=>{
        // testing code
            res.send('PASS')
    })
}