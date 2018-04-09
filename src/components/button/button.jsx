import React, { Component } from 'react'
import { Button as SemanticButton } from 'semantic-ui-react'

class Button extends Component {
  render() {
    return <SemanticButton basic {...this.props} />
  }
}

export default Button
