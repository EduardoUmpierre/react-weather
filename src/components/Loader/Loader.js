import React from 'react'
import { ClipLoader } from 'react-spinners'

const Loader = ({ isLoading, color }) => {
    return (
        <ClipLoader
            sizeUnit={'rem'}
            size={2}
            color={color ? color : '#FFF'}
            loading={isLoading}
        />
    )
}

export default Loader
