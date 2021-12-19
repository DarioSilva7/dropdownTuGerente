export function addInfo(payload){
    return function(dispatch){
        return dispatch({
            action: "ADD_INFO",
            payload
        })
    }
}