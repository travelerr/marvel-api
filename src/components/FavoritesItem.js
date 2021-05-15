import React from 'react';

const FavoritesItem = ({ favorite }) => {
    
    return(
         <div>
                <h1>{favorite.heroName}</h1> 
        </div>
     )
    
}

export default FavoritesItem;