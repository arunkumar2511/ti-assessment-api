const axios = require("axios");

const url = 'http://localhost:3000/api/movies';

describe('Movies Search',()=>{
    test('get list of movies by search',async()=>{
        const res = await axios.get(`${url}/search?q=test&p=1`)
        expect(res).toBeTruthy()
        expect(res.status).toBe(200)
    })
})