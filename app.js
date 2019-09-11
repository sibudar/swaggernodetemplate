const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const v1 = require('./routes/v1');
const spec = require('./swagger/swagger');
const swaggerUi = require('swagger-ui-express');
const dotenv = require('dotenv').config();


app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false}));

app.use(bodyParser.json());


// public 

app.use('/pub', express.static(path.join(__dirname, 'public')));


// routes 

app.use('/v1' , v1 );


// swagger 

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(spec));





module.exports = app ;