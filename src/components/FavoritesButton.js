import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const FavoritesButton = ({hero}) => {

        const dispatch = useDispatch()

        const sendDispatch = () => {
            dispatch({type: 'favorites/favoriteAdded', payload: hero})
        }

        return(
            <div>
               <button onClick={sendDispatch}>Add Current Hero to Favorites</button>
            </div>
        )
}

export default FavoritesButton;