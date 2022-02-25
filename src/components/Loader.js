import React from 'react'
import loadingGif from './assets/loader.gif'

function Loader() {
    return (
        <div className='w-90vw h-[90vh] px-14 relative z-50'>
            <img className='w-[100%] h-[100%]' src={loadingGif} alt="loading" />
        </div>
    )
}

export default Loader