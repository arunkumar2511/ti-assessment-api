const axios = require("axios")
const { getOMDBCall } = require("../../utils/common");
const database = require("../../utils/database.json");

exports.movieSearch = async(req,res)=>{
    const {page,q} = req.query;
    const url = getOMDBCall(page,q) 
    const {data} = await axios.get(url).catch(err =>{
        return res.status(500).json({data:err.toString()})
    })
    return res.status(200).json({data})
}

exports.addRemoveFav = async(req,res)=>{
    console.log(database)
}