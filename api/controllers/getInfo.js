const axios = require ('axios');
// require('dotenv').config();
// const {API_KEY, URL}=process.env;

exports.getInfo= async (req,res)=>{
    try{
        // let info = await axios.get(`https://back.implementaconbubo.com/v1/sales/customer/?simple=true/?APIKEY=AeFztwPWm26R7PVOW5EEjGbz1Dx7ZwTe6Oobtht8`)
        
        let info = await axios.get("https://rickandmortyapi.com/api/character")
        res.json(info.data.results)
    }
    catch(error){  
        console.log(error)
    }
}