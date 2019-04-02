import React from 'react'
import { NavLink } from 'react-router-dom'

import ForecastDay from '../ForecastDay';

const Forecast = ({inputValue, items, onFormSubmit, lastQueries}) => (
    <div className='forecast'>
      <form 
        className='forecast__form'
        name='forecast'
        onSubmit={e => {
          e.preventDefault()
          const input = forecast.input
          onFormSubmit(input.value)
          input.value = ''
        }} 
      >
        <input 
          type='text'
          name='input' 
          value={inputValue} 
          placeholder='City!'
        />
        <button type='submit'>Forecast</button>   
      </form>
      {!!Object.entries(items).length && 
        <div className='forecast__main-info'>
          <div className='forecast__last-queries'>
          <span>Last sities:</span>
          <ul className='forecast__last-queries-list'>
            {
              !!lastQueries
              ? lastQueries.map(query => 
                <li key={query}>{query}</li>
              )
              : ''
            }
          </ul>
        </div>
        <h2>{items.city.name}</h2>
        <ForecastDay item={items.list[(new Date).getDay()-1]} />
          <div className='link-wrapper'>
            <NavLink className='forecast__link' to='/week'>Forecast for week</NavLink>
          </div>
        </div>
      }
    </div>
  )



export default Forecast