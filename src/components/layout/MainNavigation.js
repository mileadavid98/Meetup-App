//this component will not be load as a page like we used AllMeetingPage etc..
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import classes from './MainNavigation.module.css';
import FavoritesContext from '../../store/favorites-context';
 
function MainNavigation() {
    const favoritesContext = useContext(FavoritesContext);

    return (
    <header className={classes.header}>
        <div className={classes.logo}>Meetups</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All Meetups</Link>
                </li>
                <li>
                    <Link to='/new-meetup'>New Meetup</Link>
                </li>
                <li>
                    <Link to='/favorites'>
                        Favorites Meetups
                        <span className={classes.badge}>{favoritesContext.totalFavorites}</span>
                        {/* badge is used in the css file for this one */}
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
    );
}

export default MainNavigation;