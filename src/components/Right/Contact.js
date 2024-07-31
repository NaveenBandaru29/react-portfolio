import React from 'react'
import Icon from '../UI/Icon'
import instagram from '../../images/instagram.png'
import linkedin from '../../images/linkedin.png'
import github from '../../images/github.png'
import facebook from '../../images/facebook.png'

import { BsTelephoneFill } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import { FaAddressCard } from 'react-icons/fa'


const Contact = () => {

  const styles = { fontSize: '30px', padding: '10px' }
  return (
    <section id='contact'>
      <h2>CONTACT</h2>
      <div className='contact'>
        <div class='links'>
          <Icon path='https://www.facebook.com' image={facebook} text={"Facebook"} />
          <Icon path='https://www.instagram.com' image={instagram} text={"Instagram"} />
          <Icon path='https://www.linkedin.com' image={linkedin} text={"Linkedin"} />
          <Icon path='https://www.github.com' image={github} text={"Github"} />
        </div>
        <div className='others'>
          <p  class="icon">
            <BsTelephoneFill style={styles} /> <small>+91 9390808403</small>
          </p>
          <p class="icon">
            <GrMail style={styles} /> <small>bandarun784@gmail.com</small>
          </p>
          <p class="icon">
            <FaAddressCard style={styles} /> <small>Chirala, India - 523155</small>
          </p>

        </div>

      </div>
    </section>
  )
}

export default Contact