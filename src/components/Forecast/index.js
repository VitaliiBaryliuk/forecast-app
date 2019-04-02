import { connect } from 'react-redux'
import * as actions from '../../redux/actions'

import { BASE_API_URL, API_KEY } from'../../constants/apiConstants'
import Forecast from './presenter'

function mapStateToProps(state) {
  const {inputValue, targetCity, lastQueries} = state.input
  const { items } = state
  
  return {
    inputValue,
    targetCity,
    items,
    lastQueries
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onInputChange: inputValue => {
      dispatch(actions.input.setNewInputValue(inputValue))
    },
    onFormSubmit: targetCity => {
      dispatch(actions.input.setTargetCity(targetCity))
      dispatch(actions.input.setLastQueries(targetCity))
      dispatch(actions.fetchData.itemsFetchData(BASE_API_URL + targetCity + '&type=like&units=metric&cnt=7' + API_KEY))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Forecast)