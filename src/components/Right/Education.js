import React from 'react'
import { degrees } from '../Data/educationData'
import Card from '../UI/Card'

const Education = () => {
  const education = degrees.map((degree) => {
    return (

      <Card key={degree.id} id={degree.id} year={degree.year} qualification={degree.qualification} institute={degree.institute} branch={degree.branch} />
    )
  })

  return (
    <section id='education'>
      <h2>EDUCATION</h2>
      {education}

    </section>
  )
}

export default Education