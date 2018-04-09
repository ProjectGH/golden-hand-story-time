import React, { Component } from 'react'
import Button from '../../../../components/button/button'
import Icon from '../../../../components/icon/icon'

class SideNavLink extends Component {
  render() {
    return (
      <Button icon labelPosition="right">
        <Icon name="book" />Navigation Label
      </Button>
    )
  }
}

export default SideNavLink
