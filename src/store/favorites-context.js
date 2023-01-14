import { createContext, useState } from 'react';

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    // 자동완성 기능을 위함
    addFavorite: (favoriteMeetup)=>{},
    removeFavorite: (meetupId)=>{},
    itemIsFavorite: (meetupId)=>{},
})

export function FavoritesContextProvider(props){
    const [userFavorites, setUserFavorits] = useState([]);

    function addFavoriteHandler(favoriteMeetup){
        setUserFavorits((prev) =>{
            return prev.concat(favoriteMeetup)
        })
    }
    function removeFavoriteHandler(meetupId){
        setUserFavorits((prev) =>{
            return prev.filter(meetup => meetup.id !== meetupId)
        })
    }
    function itemIsFavoriteHandler(meetupId){
        return userFavorites.some(meetup => meetup.id === meetupId)

    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    }

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext