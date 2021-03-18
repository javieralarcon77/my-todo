import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { 
    BrowserRouter as Router,
    Route,
    Switch 
} from 'react-router-dom'

import Home from './pages/Home'
import NewTodo from './pages/NewTodo'
import Login from './pages/Login';
import Register from './pages/Register';

import { firebase } from './firebase/firebase-config';
import { login } from './redux/actions/auth';
import { startLoadingNotes } from './redux/actions/notes';
import TodoList from './pages/TodoList';

const AppRouter = () => {

    const dispatch = useDispatch();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(()=>{
        firebase.auth().onAuthStateChanged( (user) =>{
            //console.log(user);
            if( user?.uid ){
                dispatch( login(user.uid, user.displayName) );
                setIsLoggedIn(true);
                dispatch( startLoadingNotes( user.uid ) );
            }else{
                setIsLoggedIn(false);
            }
        });
    },[ dispatch , setIsLoggedIn ]);

    //const isLogin = firebase.authState();

    const RouterUser = () => (
        <Switch>
            <Route path="/todo/list/">
                <TodoList />
            </Route>
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
            {   isLoggedIn ?  <RouterUser /> : <RouterPublic /> }
        </Router>
    )
}

export default AppRouter
