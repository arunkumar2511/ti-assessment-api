exports.getOMDBCall = (page,query)=>{
    return `https://www.omdbapi.com/?s=${query}&apikey=44ebd823&page=${page}`
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