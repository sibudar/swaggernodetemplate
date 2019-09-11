const swaggerJSDoc = require('swagger-jsdoc'); 

let swDef =  {
    info: {
      title: 'Node Swagger API Template',
      version: '1.0.0',
      description: 'Demonstrating how to describe a RESTful API with Swagger',
    },
    host: 'localhost:'  + 3000,
    basePath: '/v1',
  };


let options = {
    swaggerDefinition: swDef,
    // path to the API docs
    apis: ['../routes/v1.js'],// pass all in array 
};

module.exports = swaggerJSDoc(options);