import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Store from './Store'

class App extends Component {
    render () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component = { Store }/>
            </Switch>
        </BrowserRouter>
    )
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'))