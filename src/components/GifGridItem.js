import React from 'react'

export const GifGridItem = ({ title, url }) => {
    return (
        <div className='card animate__animated animate__heartBeat'>
            <img src={url} alt={title} />
            <p className='p'><b>{title}</b></p>
        </div>
    )
}
