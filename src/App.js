import React, { Component } from 'react'
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
      <LayoutProvider layouts={layouts}>
        <MainPage />
      </LayoutProvider>
    )
  }
}

export default App
