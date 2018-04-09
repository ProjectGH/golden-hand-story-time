import React from 'react'
import ReactDOM from 'react-dom'
import SideNavLink from '../sideNav/components/sideNavLink'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SideNavLink />, div)
  ReactDOM.unmountComponentAtNode(div)
})
