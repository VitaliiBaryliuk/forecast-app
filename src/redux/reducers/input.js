import * as actionTypes from '../../constants/actionTypes'

export default function(state = [], action) {
  switch(action.type) {
    case actionTypes.INPUT_CHANGED:
      return {
        ...state,
        inputValue: action.inputValue
      }
    case actionTypes.FORM_SUBMITTED:
      return {
        ...state,
        targetCity: action.targetCity
      }    
    case actionTypes.UPDATE_LAST_QUERIES:
    const lastQueries = !!state.lastQueries 
      ? [action.lastQuery, ...state.lastQueries].slice(0, 5)
      : [action.lastQuery]
      return {
        ...state,
        lastQueries
      }      
    default: 
      return state  
  }
}