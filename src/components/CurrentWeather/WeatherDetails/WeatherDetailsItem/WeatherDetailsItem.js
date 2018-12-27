import React from 'react'
import classes from './WeatherDetailsItem.module.css'

const weatherDetailsItem = props => (
    <div
        className={classes.weatherDetailsItem}
        style={{ fontWeight: props.highlighted ? 700 : null }}
    >
        <div className={classes.weatherDetailsItemTitle}>{props.title}</div>
        {props.children}
    </div>
)

export default weatherDetailsItem
