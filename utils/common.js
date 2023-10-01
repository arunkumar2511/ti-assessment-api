const { config } = require('./config');

exports.getOMDBCall = (page,query)=>{  
  return `${config.OMDB.OMDB_URI}?s=${query}&apikey=${config.OMDB.OMDB_API_KEY}&page=${page}`
}

exports.swaggerDefinitions =  {
    openapi: "3.1.0",
    info: {
      title: "Movies Api Doc",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      contact: {
        name: "ORDM Movies"
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
}