import React, { Component } from 'react'
import { Page, Section } from 'react-page-layout'
import SideNav from '../navigation/sideNav/sideNav'

class MainPage extends Component {
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

export default MainPage
