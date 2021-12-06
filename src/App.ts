import express from 'express'
import portListning from '../config/portListning'

// init express to app
const app = express()

// server start
portListning(app)
