import React, { Component } from 'react'
import { connect } from 'react-redux'
import SideNavLink from './components/sideNavLink'
import NavTitle from './components/title'
import { Loader } from 'semantic-ui-react'

class SideNav extends Component {
  render() {
    return (
      <div className="side-nav">
        <div className="my-4">
          <NavTitle />
        </div>
        <div className="m-4">
          <Loader active={this.props.isLoading} inline="centered">
            Loading
          </Loader>
          {!this.props.isLoading &&
            this.props.stories.length > 0 && (
              <div>
                {this.props.stories.map(story => {
                  return <SideNavLink key={story.id} label={story.title} />
                })}
              </div>
            )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { isLoading: state.stories.isLoading, stories: state.stories.stories }
}

export default connect(mapStateToProps)(SideNav)
