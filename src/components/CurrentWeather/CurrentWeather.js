import React, { Component } from 'react';
import WeatherAPI from '../../utils/Weather';
import classes from './CurrentWeather.module.css';
import moment from 'moment-timezone';

class currentWeather extends Component {
    state = {
        weather: null
    };

    componentDidMount = () => {
        WeatherAPI.getCurrentWeather(this.props.city).then(response => {
            const data = response.data;
            const description = [...data.weather]
                .map(data => ({
                    class: data.main,
                    description: data.description
                }))
                .concat(
                    [{ ...data.sys }].map(data => ({
                        sunrise: data.sunrise,
                        sunset: data.sunset
                    }))
                )
                .reduce((data, el) => ({ ...data, ...el }), {});

            const weather = {
                ...data.main,
                ...description
            };

            this.setState({ weather: weather }, () => {
                console.log(this.state);
            });
        });
    };

    getTimeFromTimestamp(timestamp) {
        return moment
            .unix(timestamp)
            .tz('America/Sao_Paulo')
            .format('HH:mm');
    }

    render() {
        const weather = this.state.weather;
        let component = <p>No weather fetched</p>;

        if (weather) {
            component = (
                <div className={classes.currentWeather}>
                    <div className={classes.temperature}>
                        {weather.temp.toFixed()}
                        <span>ºC</span>
                    </div>
                    <div className={classes.description}>
                        {weather.description}
                    </div>

                    <div className={classes.temperatureVariation}>
                        <div className={classes.temperatureVariationMin}>
                            <div className={classes.temperatureVariationTitle}>
                                Min.
                            </div>
                            {weather.temp_min}ºC
                        </div>

                        <div className={classes.temperatureVariationMax}>
                            <div className={classes.temperatureVariationTitle}>
                                Máx.
                            </div>
                            {weather.temp_max}ºC
                        </div>

                        <div>
                            <div className={classes.temperatureVariationTitle}>
                                Nascer do sol
                            </div>
                            {this.getTimeFromTimestamp(weather.sunrise)}
                        </div>

                        <div>
                            <div className={classes.temperatureVariationTitle}>
                                Pôr do sol
                            </div>
                            {this.getTimeFromTimestamp(weather.sunset)}
                        </div>
                    </div>
                </div>
            );
        }

        return component;
    }
}

export default currentWeather;
