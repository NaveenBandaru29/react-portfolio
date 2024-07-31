import React from 'react'
import './Tag.css'

const Tags = (props) => {
    return (
            <span className='tag'>
                {props.tag }
            </span>
    )
}

export default Tags