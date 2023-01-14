import {useContext, yseContext} from 'react'

import Card from '../ui/Card'
import classes from './MeetupItem.module.css'
import FavoritesContext from "../../store/favorites-context";

function MeetupItem(props) {
    const favoriteCtx = useContext(FavoritesContext)

    const itemIsFavortie = favoriteCtx.itemIsFavorite(props.id)

    function togggleFavoritestatus(){
        if (itemIsFavortie){
            favoriteCtx.removeFavorite(props.id)
        } else{
            favoriteCtx.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address

            })
        }
    }


    return <li className={classes.item}>
        <Card>
            <div className={classes.image}>
                <img src={props.image} alt={props.title}/>
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                <button onClick={togggleFavoritestatus}>{itemIsFavortie ? "remove" : "favorites"}s</button>
            </div>
        </Card>
    </li>
}

export default MeetupItem