import React from 'react'
import { ClipLoader } from 'react-spinners'
import classes from './Loader.module.css'

const Loader = ({ isLoading, color }) => {
    return (
        <div className={classes.loaderContainer}>
            <ClipLoader
                sizeUnit={'rem'}
                size={2}
                color={color ? color : '#FFF'}
                loading={isLoading}
            />
        </div>
    )
}

export default Loader
