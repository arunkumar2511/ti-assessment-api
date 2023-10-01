const express = require("express");
const bodyParser = require("body-parser"),
swaggerJsdoc = require("swagger-jsdoc"),
swaggerUi = require("swagger-ui-express");  

const router = require("./app/movies/movie-router.js");
const { swaggerDefinitions } = require("./utils/common.js")

const app = express();
const port = 3000; 
const options = {
    definition : swaggerDefinitions,
    apis: ["./app/movies/movie-router.js"],
};
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())  
const specs = swaggerJsdoc(options);
app.use(
"/api-docs",
swaggerUi.serve,
swaggerUi.setup(specs,{explorer:true})
);
  
app.use('/api/movies',router);
app.listen(port,()=>{
    console.log(`app started listening at ${port}`)
});