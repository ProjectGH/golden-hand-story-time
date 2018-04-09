import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '../../../../components/button/button'
import Icon from '../../../../components/icon/icon'

class SideNavLink extends Component {
  render() {
    return (
      <div className="my-4">
        <Button className="w-full" icon labelPosition="right">
          <Icon name="book" />
          {this.props.label}
        </Button>
      </div>
    )
  }
}

SideNavLink.propTypes = {
  label: PropTypes.string
}

export default SideNavLink
