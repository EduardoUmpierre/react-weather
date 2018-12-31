import React from 'react'
import classes from './WeeklyForecast.module.css'
import WeeklyForecastListItem from './WeeklyForecastListItem/WeeklyForecastListItem'
import Loader from '../Loader/Loader'

const weeklyForecast = ({ forecast }) => {
    let component = <Loader isLoading={!forecast} />

    if (forecast) {
        component = (
            <>
                {forecast.map(day => (
                    <WeeklyForecastListItem key={day.dt} day={day} />
                ))}
            </>
        )
    }

    return (
        <div className={`container ${classes.forecastList}`}>{component}</div>
    )
}

export default weeklyForecast
