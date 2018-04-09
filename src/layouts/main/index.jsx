import React, { Component } from 'react'
import { Slot } from 'react-page-layout'
import './main.css'

class MainLayout extends Component {
  render() {
    return (
      <div className="app">
        <Slot className="navigation" name="navigation" />
        <Slot className="content" name="content" />
      </div>
    )
  }
}

export default MainLayout
