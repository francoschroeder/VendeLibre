import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Store from './Store'

class App extends Component {
    render () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/store/:id" component = { () => <Store edit = {false}/> }/>
                <Route path="/store/:id/edit" component = { () => <Store edit = {true}/> }/>
            </Switch>
        </BrowserRouter>
    )
    }
}

var reactApp = document.getElementById('react-app')

if (reactApp != null)
	ReactDOM.render(<App />, reactApp)