import React, { Component } from 'react'
import SideNavLink from './components/sideNavLink'
import NavTitle from './components/title'

class SideNav extends Component {
  render() {
    return (
      <div className="side-nav">
        <div className="my-4">
          <NavTitle />
        </div>
        <div className="m-4">
          <SideNavLink />
          <SideNavLink />
          <SideNavLink />
          <SideNavLink />
          <SideNavLink />
        </div>
      </div>
    )
  }
}

export default SideNav
