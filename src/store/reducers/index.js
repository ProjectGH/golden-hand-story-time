import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import stories from '../stories/reducer'

export default combineReducers({
  routing: routerReducer,
  stories
})
