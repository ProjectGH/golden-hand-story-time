import * as types from './types'

const initialState = {
  stories: [],
  isLoading: true
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_STORIES_REQUEST:
      return { ...state, isLoading: true }

    case types.GET_STORIES_COMPLETE:
      return { ...state, stories: action.payload, isLoading: false }

    default:
      return state
  }
}
