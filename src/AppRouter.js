import React from 'react'
import { 
    BrowserRouter as Router,
    Route,
    Switch 
} from 'react-router-dom'

import Home from './pages/Home'
import NewTodo from './pages/NewTodo'

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/todo/new/">
                    <NewTodo />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
                
            </Switch>
        </Router>
    )
}

export default AppRouter
