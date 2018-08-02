const defaultState = {}

function reducer(state = defaultState, action){
    switch(action.type){
        case 'SET_CURRENT_USER':
            return {...state, current_user: action.payload}
        case  'ADD_FEE_PREVIEW':
            return {...state, fee_preview: action.payload}
        default: 
            return state
    }
}

export default reducer;