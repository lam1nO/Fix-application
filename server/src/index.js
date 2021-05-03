const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
import config from '@config/config'
import dotenv from 'dotenv'
import v1Router from '@routes'
mongoose.Promise = global.Promise

dotenv.config()

// MONGODB
mongoose.connect(config.dbURL, config.dbOptions)
mongoose.connection
  .once('open', () => {
    console.log(`Mongoose - successful connection ...`)
    app.listen(process.env.PORT || config.port,
      () => console.log(`Server start on port ${config.port} ...`))
  })
  .on('error', error => console.warn(error))

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// ROUTES
app.use(v1Router)


// app.listen(process.env.PORT || config.port,
//     () => console.log(`Server start on port ${config.port} ...`))
