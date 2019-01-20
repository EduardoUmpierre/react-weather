import React from 'react'
import classes from './Layout.module.css'
import { DebounceInput } from 'react-debounce-input'

const layout = props => {
    let headerClasses = [classes.header]

    if (props.isEditing) {
        headerClasses.push(classes.isEditing)
    }

    return (
        <>
            <header className={headerClasses.join(' ')}>
                <form onSubmit={props.toggleEditing}>
                    <DebounceInput
                        debounceTimeout={500}
                        value={props.city}
                        onChange={event => props.cityChange(event)}
                        readOnly={!props.isEditing}
                        onClick={
                            !props.isEditing ? props.toggleEditing : undefined
                        }
                    />

                    <button type='submit'>OK</button>
                </form>
            </header>

            <main>{props.children}</main>
        </>
    )
}

export default layout
