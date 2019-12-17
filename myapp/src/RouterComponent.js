import React from 'react'
import { Switch, Route} from "react-router-dom"
import App from './App'
import PlayList from './PlayList'

const RouterComponent = () => {
    return (
        <Switch>
            <Route exact path="/">
                <App />
            </Route>
            <Route exact path="/playlist">
                <PlayList />
            </Route>
        </Switch>
    )
}

export default RouterComponent