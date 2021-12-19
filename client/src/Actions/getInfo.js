import axios from 'axios'

export function getInfo(){

    console.log("entrando en las actions")

    return async function (dispatch){
        const json= await axios.get('http://localhost:3001/info', {
        });
    
        console.log(json.data,"EN las action")

        return dispatch({
            type: "GET_INFO",
            payload: json.data
        })
    }
}