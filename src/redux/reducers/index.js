import { combineReducers } from 'redux'

import { items, itemsHasErrored, itemsIsLoading } from './fetchData';
import input from './input'

export default combineReducers({
  input,
  items, 
  itemsHasErrored,
  itemsIsLoading
})
