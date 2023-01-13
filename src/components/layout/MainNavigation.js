import { Link} from 'react-router-dom'

import classe from './MainNavigation.module.css'

function MainNavigation(){
    return <header className={classe.header}>
        <div className={classe.logo}>React Meet</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All Meetups</Link>
                </li>
                <li>
                    <Link to='/new-meetup'>Add New meetup</Link>
                </li>
                <li>
                    <Link to='/favorites'>my favorites</Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;