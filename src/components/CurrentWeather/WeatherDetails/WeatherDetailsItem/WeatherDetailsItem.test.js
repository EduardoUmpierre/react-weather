import React from 'react'
import { shallow } from 'enzyme'
import WeatherDetailsItems from './WeatherDetailsItem'

describe('<WeatherDetailsItems />', () => {
    it('renders correctly', () => {
        const component = shallow(
            <WeatherDetailsItems>10ºC</WeatherDetailsItems>
        )
        expect(component).toMatchSnapshot()
    })

    it('has bold text', () => {
        const component = shallow(
            <WeatherDetailsItems highlighted>10ºC</WeatherDetailsItems>
        )
        expect(component.prop('style')).toHaveProperty('fontWeight', 700)
    })

    it('does not have bold text', () => {
        const component = shallow(
            <WeatherDetailsItems>10ºC</WeatherDetailsItems>
        )
        expect(component.prop('style')).not.toHaveProperty('fontWeight', 700)
    })
})
