import React from 'react'
import classes from './CurrentWeather.module.css'
import WeatherDetails from './WeatherDetails/WeatherDetails'

const currentWeather = props => {
    const weather = props.weather
    let component = <p>No weather fetched</p>

    if (weather) {
        component = (
            <div className={classes.currentWeather}>
                <div className={classes.temperature}>
                    {weather.temp.toFixed()}
                    <span>ºC</span>
                </div>
                <div className={classes.description}>{weather.description}</div>

                <WeatherDetails weather={weather} />
            </div>
        )
    }

    return component
}

export default currentWeather
