// Include all packages
const express = require('express');
const responseTime = require('response-time')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const path = require('path');
const bodyParser = require('body-parser')
const helmet = require("helmet");
const port = process.env.PORT || 3000;

// Use all packages
const app = express();
app.use(helmet());
app.use(responseTime())
app.use(morgan('dev'))
dotenv.config({path: __dirname + '/.env'})
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Include All routes
const DNS = require('./routes/DNS');

// Use All Routes
app.use('/api/dns', DNS);

// App is running on port 3000
app.listen(port, () => {
    console.log('Running on Port: 3000')
})


