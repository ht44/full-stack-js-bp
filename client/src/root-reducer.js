import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { Reducer as errors } from './errors'
import { Reducer as feature } from './feature'


export default combineReducers({
  routing: routerReducer,
  errors,
  feature
})