const initialState = []

function nextFavoriteID (favorites) {
    const maxId = favorites.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1
}

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

