import React from 'react';
import { useSelector } from 'react-redux';
import FavoritesItem from '/Users/justinsacco/assesment/marvel/src/components/FavoritesItem.js';


const Favorites = ({state, favoriteHandlerProp}) => {

    const favorites = useSelector(state => state)
    
    const renderFavoritesList = favorites.map(favorite => {
        return <FavoritesItem key={favorite.id} favorite={favorite} state={state} favoriteHandlerProp={favoriteHandlerProp}/>
    })
    console.log(renderFavoritesList)
    return(
         <div>
           <ul>{renderFavoritesList}</ul>     
        </div>
     )
    
}

export default Favorites;