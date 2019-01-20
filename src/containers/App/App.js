import React, { Component } from 'react'
import './App.css'

import WeatherAPI from '../../utils/WeatherAPI'
import Layout from '../../hoc/Layout/Layout'
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather'
import WeeklyForecast from '../../components/WeeklyForecast/WeeklyForecast'

class App extends Component {
    state = {
        city: 'Porto Alegre',
        weather: null,
        weeklyForecast: null,
        isEditing: false
    }

    componentDidMount = () => {
        this.sendRequest()
    }

    sendRequest = () => {
        if (this.state.city.length > 0) {
            WeatherAPI.getCurrentWeather(this.state.city).then(response => {
                this.setState({
                    weather: this.getWeatherDataFromCurrentWeather(
                        response.data
                    )
                })
            })

            WeatherAPI.getForecast(this.state.city).then(response => {
                this.setState({ weeklyForecast: response.data.list })
            })
        }
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

    cityChangeHandler = event => {
        this.setState({ city: event.target.value })
        this.sendRequest()
    }

    toggleEditingHandler = event => {
        event.preventDefault()

        this.setState(prevState => ({ isEditing: !prevState.isEditing }))
    }

    render() {
        return (
            <div className='App'>
                <Layout
                    city={this.state.city}
                    cityChange={this.cityChangeHandler}
                    isEditing={this.state.isEditing}
                    toggleEditing={this.toggleEditingHandler}
                >
                    <CurrentWeather weather={this.state.weather} />
                    <WeeklyForecast forecast={this.state.weeklyForecast} />
                </Layout>
            </div>
        )
    }
}

export default App
