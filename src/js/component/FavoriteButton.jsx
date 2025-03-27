import React, { useContext } from 'react';
import { Context } from '../store/appContext';

const FavoriteButton = ({ item, type }) => {
    const { store, actions } = useContext(Context);

    const isFavorite = () => {
        return store.favorites.some(favItem => favItem.url === item.url);
    };

    const handleClick = () => {
        if (isFavorite()) {
            actions.removeFromFavorites(item.url);
        } else {
            actions.addToFavorites(item, type);
        }
    };

    return (
      
        <button
          onClick={handleClick}
          className={`btn ${isFavorite() ? 'btn btn-outline-danger' : 'btn btn-outline-warning'}`}
        >
          {isFavorite() ? (
            <>
              <i className="fa-solid fa-xmark"></i>
            </>
          ) : (
            <>
              <i className="fa-regular fa-heart "></i>
            </>
          )}
        </button>
        
      
    );
};

export default FavoriteButton;