import React from 'react'

import { ICONS_BASE_URL } from '../constants/apiConstants'

const daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const ForecastDay = ({ item }) => {
  const date = new Date(item.dt * 1000)

  return (
    <div className='forecast__day'>
      <div className='forecast__day-left'>
        <div className='forecast__day-date'>
          {date.getDate()} {daysInWeek[date.getDay()].slice(0, 3)}. &#9900; 
        </div>
        <div className='forecast__day-main'>
          {item.weather[0].main}
        </div>
      </div>
      <div className='forecast__day-right'>
        <img className='forecast__weather-icon' src={ICONS_BASE_URL + item.weather[0].icon + '.png'} alt='icon of weather'/>
        <div>{Math.ceil(item.temp.max)} / {Math.ceil(item.temp.night)} &#8451;</div>
      </div>
    </div>
  )
}

export default ForecastDay