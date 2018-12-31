import React from 'react'
import moment from 'moment-timezone'
import classes from './WeeklyForecastListItem.module.css'

const weeklyForecastListItem = ({ day }) => (
    <div key={day.dt} className={`row ${classes.listItem}`}>
        <div className="col-6 col-md-2">
            {moment
                .unix(day.dt)
                .tz('America/Sao_Paulo')
                .format('DD/MM/YYYY')}
        </div>
        <div className="col-6 col-md-4">{day.weather[0].description}</div>
        <div className="col-4 col-md-2">{day.temp.min.toFixed()}ºC</div>
        <div className="col-4 col-md-2">{day.temp.max.toFixed()}ºC</div>
        <div className="col-4 col-md-2">{day.rain ? day.rain : 0}mm</div>
    </div>
)

export default weeklyForecastListItem
