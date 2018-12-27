import React, { Component } from 'react'
import moment from 'moment-timezone'
import classes from './WeatherDetails.module.css'
import WeatherDetailsItem from './WeatherDetailsItem/WeatherDetailsItem'

class weatherDetails extends Component {
    getTimeFromTimestamp(timestamp) {
        return moment
            .unix(timestamp)
            .tz('America/Sao_Paulo')
            .format('HH:mm')
    }

    render() {
        return (
            <div className={classes.weatherDetails}>
                <WeatherDetailsItem title="Nascer do sol">
                    {this.getTimeFromTimestamp(this.props.weather.sunrise)}
                </WeatherDetailsItem>

                <WeatherDetailsItem title="Pôr do sol">
                    {this.getTimeFromTimestamp(this.props.weather.sunset)}
                </WeatherDetailsItem>

                <WeatherDetailsItem title="Min.">
                    {this.props.weather.temp_min}ºC
                </WeatherDetailsItem>

                <WeatherDetailsItem title="Máx." highlighted>
                    {this.props.weather.temp_max}ºC
                </WeatherDetailsItem>
            </div>
        )
    }
}

export default weatherDetails
