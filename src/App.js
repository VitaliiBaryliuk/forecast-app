import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Forecast from './components/Forecast/index'
import ForecastWeek from './components/ForecastWeek/index'


const App = () => (
  <React.Fragment>
    <Switch>
      <Route exact path='/' component={Forecast} />
      <Route path='/week' component={ForecastWeek} />
    </Switch>
  </React.Fragment>
)

export default App