const initialState = {
    favorites: [

        { id: 0, heroName: 'Superman', heroDescription: 'Married to Superwoman', heroImage: 'url' },
        { id: 1, heroName: 'Superman', heroDescription: 'Married to Superwoman', heroImage: 'url' },
        { id: 2, heroName: 'Superman', heroDescription: 'Married to Superwoman', heroImage: 'url' },
    
        ]
}

function nextFavoriteID (favorites) {
    const maxId = favorites.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1
}

export default function rootReducer(state = initialState, action) {

    switch(action.type) {
        case 'favorites/favoriteAdded': {
            return {
                ...state,

                favorites: [
                    ...state.favorites,

                    {
                        id:nextFavoriteID(state.favorites),
                        heroName: '',
                        heroDescription: '',
                        heroImage: ''
                    }
                ]
            }
        }
        default:
            return state
    }
}