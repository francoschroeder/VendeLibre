import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Store from './Store'
import Album from './Album'

class App extends Component {
    render () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component = { Album }/>
            </Switch>
        </BrowserRouter>
    )
    }
}

var reactApp = document.getElementById('react-app')

if (reactApp != null)
	ReactDOM.render(<App />, reactApp)