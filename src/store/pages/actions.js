import * as types from './types'

export const requestStories = () => {
  return dispatch => {
    dispatch({
      type: types.GET_STORIES_REQUEST
    })
  }
}

export const requestStoriesComplete = stories => {
  return dispatch => {
    dispatch({
      type: types.GET_STORIES_COMPLETE,
      payload: stories
    })
  }
}
