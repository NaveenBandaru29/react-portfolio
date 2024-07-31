import React from 'react'
import Sidebar from './Sidebar'
import Icon from '../UI/Icon'
import '../Main.css'
import instagram from '../../images/instagram.png'
import linkedin from '../../images/linkedin.png'
import github from '../../images/github.png'
import facebook from '../../images/facebook.png'
const Left = () => {
  return (
    <>
      <div className='left'>
        <Sidebar />
        <div className='left-2'>
          <h1> Hi I am </h1>
          <div>
            <h1 className='name'> Naveen Bandaru </h1>
            <h4>STUDENT</h4>
          </div>
          <p>I am tech student who is interested in making front-end websites.
            I have built some amazing web applications. I build websites that are simply reactive and resposive.
          </p>

          <div className='icons'>
            <Icon path='https://www.facebook.com' image={facebook}  />
            <Icon path='https://www.instagram.com' image={instagram}  />
            <Icon path='https://www.linkedin.com' image={linkedin}  />
            <Icon path='https://www.github.com' image={github}  />
          </div>
        </div>

      </div>
    </>
  )
}

export default Left