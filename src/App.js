import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import { LayoutProvider } from 'react-page-layout'
import MainLayout from './layouts/main'
import MainPage from './features/main/mainPage'
import './App.css'

const layouts = {
  main: MainLayout
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <LayoutProvider layouts={layouts}>
            <Route exact path="/" component={MainPage} />
          </LayoutProvider>
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default App
