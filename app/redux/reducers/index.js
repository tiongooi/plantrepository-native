import { combineReducers } from 'redux'
import searchReducer from './search'
import plantReducer from './plant'

const rootReducer = combineReducers({
  search: searchReducer,
  plant: plantReducer,
})

export default rootReducer
