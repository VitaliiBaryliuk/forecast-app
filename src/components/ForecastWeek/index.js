import { connect } from 'react-redux'

import ForecastWeek from './presenter'



function mapStateToProps(state) {
  const { items } = state
  return {
    items
  }
}


export default connect(
  mapStateToProps
)(ForecastWeek)