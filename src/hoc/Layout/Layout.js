import React from 'react'
import classes from './Layout.module.css'

const layout = props => {
    return (
        <>
            <header className={classes.header}>
                <h2>{props.city}</h2>
            </header>

            <main>{props.children}</main>
        </>
    )
}

export default layout
