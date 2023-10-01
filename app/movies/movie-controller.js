const axios = require("axios")
const { writeFile } = require("fs").promises
const path = require('path')

const { getOMDBCall } = require("../../utils/common");
const database = require("../../utils/database.json");

exports.movieSearch = async(req,res,next)=>{
    try {
        const {page,q} = req.query;
        const url = getOMDBCall(page,q) 
        const {data} = await axios.get(url) 
        return res.status(200).json({data})
    } catch (err) {
        return res.status(err.status || 500).json({
            error:{
                message:err.message.toString()
            }
       })
    }
}

exports.addRemoveFav = async(req,res,next)=>{ 
    try {
        const data = database;
        const {action,imdbId} = req.body;
        const userIp = req.socket.remoteAddress
        const dataIndex = data.filter((el)=>{ if(el.imdbId == imdbId && el.userIp == userIp) return el});  
        if(action == "add"){
            if(dataIndex.length){
                throw new Error("favourite already added!!!")
            }else{
                data.push({
                    userIp,
                    createdAt:new Date(),
                    imdbId
                })
            }
        }else{
            if(!dataIndex.length){
                throw new Error("no favourite found!!!") 
            }else{
                data.splice(dataIndex,1)
            }
        }
        const dbPath = path.join(__dirname,'../../utils/database.json')
        await writeFile(dbPath,JSON.stringify(data)) 
        return res.status(200).json({data:`${action} favourite done!!!`})
    } catch (err) {
       return res.status(err.status || 500).json({
            error:{
                message:err.message.toString()
            }
       })
    }
}