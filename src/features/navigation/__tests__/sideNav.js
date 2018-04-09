import React from 'react'
import ReactDOM from 'react-dom'
import SideNav from '../sideNav/sideNav'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SideNav />, div)
  ReactDOM.unmountComponentAtNode(div)
})
