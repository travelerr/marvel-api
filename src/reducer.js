const initialState = []


export default function rootReducer(state = initialState, action) {

    switch(action.type) {
        case 'favorites/favoriteAdded': {
            return [
                ...state,
                
                action.payload
            
            ]
        }
        default:
            return state
    }
}

