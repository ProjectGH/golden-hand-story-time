import React from 'react'
import ReactDOM from 'react-dom'
import Icon from '../icon/icon'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Icon />, div)
  ReactDOM.unmountComponentAtNode(div)
})
