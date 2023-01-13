import {Route, Switch} from 'react-router-dom'

import AllMeetupsPAge from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";


function App() {
    return (
        <Layout>
            <Switch>
                <Route path='/' exact>
                    <AllMeetupsPAge/>
                </Route>
                <Route path='/new-meetup'>
                    <NewMeetupPage/>
                </Route>
                <Route path='/favorites'>
                    <FavoritesPage/>
                </Route>
            </Switch>
        </Layout>
    );

}

export default App;
