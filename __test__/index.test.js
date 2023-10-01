const axios = require("axios");
const {config} = require("../utils/config");  

describe('Movies Search',()=>{
    test('get list of movies by search',async()=>{
        const res = await axios.get(`${config.BASE_URL}/search?q=test&page=1`)
        expect(res).toBeTruthy()
        expect(res.status).toBe(200)
    })

    test('search movies with wrong param',async()=>{
        await axios.get(`${config.BASE_URL}/search?q=test&p=1`).catch(err =>{
            expect(err.response.status).toBe(400) 
        })
    })

    test('search movies without required params',async()=>{
        await axios.get(`${config.BASE_URL}/search`).catch(err =>{
            expect(err.response.status).toBe(400) 
        })
    }) 
})

describe('Add/Remove Movies To Favourite',()=>{
    test('add movies to favourite list',async()=>{
        const res = await axios.post(`${config.BASE_URL}/favourite`,{
            "action":"add",
            "imdbId":"12345"
        })
        expect(res).toBeTruthy()
        expect(res.status).toBe(200)
    })

    test('remove movies from favourite list',async()=>{
        const res = await axios.post(`${config.BASE_URL}/favourite`,{
            "action":"remove",
            "imdbId":"12345"
        })
        expect(res).toBeTruthy()
        expect(res.status).toBe(200)
    })

    test('add movies to favourite list without required param',async()=>{
        const res = await axios.post(`${config.BASE_URL}/favourite`,{
            "action":"add"
        }).catch(err =>{
            expect(err.response.status).toBe(400) 
        })
    })

    test('remove movies to favourite list without required param',async()=>{
        const res = await axios.post(`${config.BASE_URL}/favourite`,{
            "action":"remove"
        }).catch(err =>{
            expect(err.response.status).toBe(400) 
        })
    })
})