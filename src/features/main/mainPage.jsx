import React, { Component } from 'react'
import { Page, Section } from 'react-page-layout'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getStories } from '../../store/stories/async-actions'
import SideNav from '../navigation/sideNav/sideNav'

class MainPage extends Component {
  componentDidMount() {
    this.props.getStories()
  }

  render() {
    return (
      <Page layout="main">
        <Section slot="navigation">
          <SideNav />
        </Section>
        <Section slot="content">This is the content area</Section>
      </Page>
    )
  }
}

const mapStateToProps = state => state

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getStories
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
