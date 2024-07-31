import React from 'react'
import './Icon.css'

const Icon = (props) => {
  return (
    <a href={props.path} className='icon'>
      <img src={props.image} alt={props.image} />
      {props.text && <span>{ props.text }</span>}
    </a>
  )
}

export default Icon