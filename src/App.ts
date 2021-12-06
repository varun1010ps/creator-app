import express from 'express'
import dotenv from 'dotenv'
import portListning from '../config/portListning'
import Router from './Router/app.router'
import defaultRouter from './Router/default.router'

// init dotnev
dotenv.config()

// init express to app
const app = express()

//********* bodyParses ***********

// if data in json format
app.use(express.json())
// if data in plain text format
app.use(express.text())

// Router 
Router(app)
// default router
defaultRouter(app)

// server start
portListning(app)
