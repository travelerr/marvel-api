import React from 'react';

const FavoritesItem = ({ favorite, favoriteHandlerProp}) => {

    return(
         <div>
                <button className="favorites-item" onClick={() => favoriteHandlerProp(favorite.heroName, favorite.heroDescription, favorite.heroImage)}>
                    {favorite.heroName}
                </button> 
        </div>
     )
    
}

export default FavoritesItem;