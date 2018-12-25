import React, { Component } from 'react';
import './App.css';

import Layout from '../../hoc/Layout/Layout';
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather';
import WeeklyForecast from '../../components/WeeklyForecast/WeeklyForecast';

class App extends Component {
    state = {
        city: 'Porto Alegre',
        weeklyForecast: []
    };

    render() {
        return (
            <div className="App">
                <Layout city={this.state.city}>
                    <CurrentWeather city={this.state.city} />
                    <WeeklyForecast forecast={this.state.weeklyForecast} />
                </Layout>
            </div>
        );
    }
}

export default App;
