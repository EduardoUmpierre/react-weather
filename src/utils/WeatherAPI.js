import axios from 'axios'

const KEY = '94cd6c40f0df1baa9b7db667ba255def'
const WEATHER_API = 'https://api.openweathermap.org/data/2.5'
const SETTINGS = `&units=metric&lang=pt&APPID=${KEY}`

function getURL(endpoint) {
    return `${WEATHER_API + endpoint + SETTINGS}`
}

function getCurrentWeather(city) {
    return axios.get(getURL(`/weather?q=${city}`))
}

export default { getCurrentWeather }
