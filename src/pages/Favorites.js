import { useContext} from 'react'

import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritePage(){
    const favoriteCtx = useContext(FavoritesContext)

    let content;

    if(favoriteCtx.totalFavorites === 0){
        content = <p>no Favorite</p>
    }
    else{
        content =  <MeetupList meetups={favoriteCtx.favorites} />
    }

    return <section>
        <h1>My favorites</h1>
        {content}
    </section>
}

export default FavoritePage