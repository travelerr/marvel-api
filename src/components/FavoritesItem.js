import React from 'react';

const FavoritesItem = ({ favorite, favoriteHandlerProp }) => {

    return(
         <div>
                <button onClick={() => favoriteHandlerProp(favorite.heroName, favorite.heroDescriptio, favorite.heroImage)}>
                    {favorite.heroName}
                </button> 
        </div>
     )
    
}

export default FavoritesItem;