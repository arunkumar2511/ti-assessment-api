const envFile = require(`../environments/environment.${process.env.NODE_ENV}.json`)

exports.config = {
    OMDB:{
        OMDB_URI:envFile.OMDBURI,
        OMDB_API_KEY: envFile.OMDBAPIKEY,
    },
    BASE_URL : envFile.APPURL
}