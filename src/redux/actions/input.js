import * as actionTypes from '../../constants/actionTypes'

export function setNewInputValue(inputValue) {
  return {
    type: actionTypes.INPUT_CHANGED,
    inputValue, 
  } 
}

export function setTargetCity(targetCity) {
  return {
    type: actionTypes.FORM_SUBMITTED,
    targetCity
  }
}

export function setLastQueries(lastQuery) {
  return {
    type: actionTypes.UPDATE_LAST_QUERIES,
    lastQuery
  }
}