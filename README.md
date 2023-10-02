# ti-assessment-api
# After cloning the code on your machine, go to terminal and please navigate to project folder and run "npm install" to install all the dependencies
# Once dependency installatin done please proceed to run "npm start" on terminal and this command will start the server with development environment
# By accessing http://localhost:3000/ap-docs you can find the swagger document
# http://localhost:3000/api/movies/search?q=movie-name&page=1 this is the get api to search movie with sample payload and q in query param refers to query string and page in query params refers to page no of response
#   Method - GET
#   Parameter Type Query string
#   q = query string
#   page = page number

#   http://localhost:3000/api/movies/favourite this is a post api used to add or remove movies to/from favourite list and the data will be stored on local json file within app 
#   Method - POST
#   Parameter Type - Body JSON
#   Sample Payload - { "action":"add/remove", "imdbId":"test232"}

# Todo unit testing run "node run test" on terminal and make sure server is running on local