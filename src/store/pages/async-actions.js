import { requestStories, requestStoriesComplete } from './actions'

export const getStories = () => {
  return dispatch => {
    requestStories(dispatch)

    const request = new Request('/api/stories')

    fetch(request)
      .then(response => {
        return response.json()
      })
      .then(response => {
        requestStoriesComplete(response.data)(dispatch)
      })
  }
}
