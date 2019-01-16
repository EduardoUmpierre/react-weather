import React, { Component } from 'react'
import './App.css'

import WeatherAPI from '../../utils/WeatherAPI'
import Layout from '../../hoc/Layout/Layout'
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather'
import WeeklyForecast from '../../components/WeeklyForecast/WeeklyForecast'

class App extends Component {
    state = {
        city: 'Porto Alegre, BR',
        weather: null,
        weeklyForecast: null
    }

    componentDidMount = () => {
        WeatherAPI.getCurrentWeather(this.state.city).then(response => {
            this.setState({
                weather: this.getWeatherDataFromCurrentWeather(response.data)
            })
        })

        WeatherAPI.getForecast(this.state.city).then(response => {
            this.setState({ weeklyForecast: response.data.list })
        })
    }
    
    /**
     * @description Returns the useful data from the API response
     * @param  {object} data
     */
    getWeatherDataFromCurrentWeather(data) {
        const additionalData = [...data.weather]
            .map(weather => ({
                class: weather.main,
                description: weather.description
            }))
            .concat(
                [{ ...data.sys }].map(data => ({
                    sunrise: data.sunrise,
                    sunset: data.sunset
                }))
            )
            .reduce((data, el) => ({ ...data, ...el }), {})

        return {
            ...data.main,
            ...additionalData
        }
    }

    render() {
        return (
            <div className="App">
                <Layout city={this.state.city}>
                    <CurrentWeather weather={this.state.weather} />
                    <WeeklyForecast forecast={this.state.weeklyForecast} />
                </Layout>
            </div>
        )
    }
}

export default App
