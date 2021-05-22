import React from 'react'

export const GifGridItem = ({ id, url, title }) => {
    
   // console.log( id, url, title );
    
    return (
        <div className='card animate__animated animate__bounce '>
            
            <img src={url} alt={title} />
            <p>{title}</p>

        </div>
    )
}
