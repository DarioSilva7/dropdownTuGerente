const initialState={
    allInfo:[],
    showInfo:[],
    isOpen: false
}

function rootReducer(state= initialState, action){

    switch (action.type) {
        case 'GET_INFO':
            return {
                ...state,
                allInfo: action.payload,
                showInfo: action.payload,
            }
        case "SEARCH":
            let temp = state.showInfo;
            let response = temp.filter(el=>{
                if ( el.name.toLowerCase().includes( action.payload.toLowerCase() ) ){
                    return el
                }
            })
            return{
                ...state,
                showInfo: response
            }
        case "ADD_INFO":
            return{
                ...state,
                showInfo: [...state.allInfo, { name: action.payload }]
            }
        default:
            break;
    }
}
export default rootReducer;