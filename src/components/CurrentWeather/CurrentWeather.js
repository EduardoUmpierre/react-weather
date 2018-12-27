import React from 'react'
import classes from './CurrentWeather.module.css'
import WeatherDetails from './WeatherDetails/WeatherDetails'
import Loader from '../Loader/Loader'

const currentWeather = props => {
    const weather = props.weather
    let component = <Loader isLoading={!weather} />

    if (weather) {
        component = (
            <>
                <div className={classes.temperature}>
                    {weather.temp.toFixed()}
                    <span>ºC</span>
                </div>
                <div className={classes.description}>{weather.description}</div>

                <WeatherDetails weather={weather} />
            </>
        )
    }

    return <div className={classes.currentWeather}>{component}</div>
}

export default currentWeather
