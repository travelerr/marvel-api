import React from 'react';
import { useSelector } from 'react-redux';
import FavoritesItem from './FavoritesItem';


const Favorites = ({state, favoriteHandlerProp}) => {

    const favorites = useSelector(state => state)
    
    const renderFavoritesList = favorites.map(favorite => {
        return <FavoritesItem favorite={favorite} state={state} favoriteHandlerProp={favoriteHandlerProp}/>
    })
    
    return(
         <div>
           <ul>{renderFavoritesList}</ul>     
        </div>
     )
    
}

export default Favorites;