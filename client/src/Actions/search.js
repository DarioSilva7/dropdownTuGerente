import axios from 'axios'

export function search(payload){
    return function (dispatch){
        return dispatch({
            action: "SEARCH",
            payload
        })
    }
}