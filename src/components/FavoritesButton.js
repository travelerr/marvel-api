import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const FavoritesButton = () => {

    const dispatch = useDispatch()

    const favoritesHandler = () => {
        const favoriteHero = {
           test: "id"
            
        }
        dispatch({ type: 'favorites/favoriteAdded', payload: {
            heroName: this.props.heroName, 
            heroDescription: this.props.heroDescription,
            heroImage: this.prop.heroImage
            } 
        })
    }

        return(
            <div>
               <button onClick>Add Current Hero to Favorites</button>
            </div>
        )
}

export default FavoritesButton;