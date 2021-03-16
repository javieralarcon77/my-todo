import React from 'react'
import { 
    BrowserRouter as Router,
    Route,
    Switch 
} from 'react-router-dom'

import Home from './pages/Home'
import NewTodo from './pages/NewTodo'
import Login from './pages/Login';
import { FirebaseAuthConsumer } from '@react-firebase/auth';
import Register from './pages/Register';

const AppRouter = () => {

    //const isLogin = firebase.authState();

    const RouterUser = () => (
        <Switch>
            <Route path="/todo/new/">
                <NewTodo />
            </Route>
            <Route path="/">
                <Home />
            </Route>            
        </Switch>
    )

    const RouterPublic = () => (
        <Switch>
            <Route path="/register">
                <Register />
            </Route>
            <Route path="/">
                <Login />
            </Route>

        </Switch>
    )

    return (
        <Router>
            <FirebaseAuthConsumer>
                {
                    ({ isSignedIn }) => {
                        return ( 
                            isSignedIn ? 
                            <RouterUser /> :
                            <RouterPublic />
                        )
                    }
                }
            </FirebaseAuthConsumer>
            
        </Router>
    )
}

export default AppRouter
