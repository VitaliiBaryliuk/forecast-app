import React from 'react'
import { NavLink } from 'react-router-dom'

import ForecastDay from '../ForecastDay';

const ForecastWeek = ({ items }) => (
    <div className='forecast'> 
      {
        !!Object.entries(items.list).length &&
        <React.Fragment>
          <h2>{items.city.name}</h2>
          {items.list.map(item => 
            <ForecastDay key={item.dt} item={item} />
          )}
          <NavLink className='forecast__link' to='/'>Back to search</NavLink>
        </React.Fragment>
      }
    </div>   
  )

export default ForecastWeek