import React from 'react'
import { projects } from '../Data/projectsData'
import Card from '../UI/Card'
const Projects = () => {

    const myProjects = projects.map((project) => {
        return (
            <Card key={project.id} id={project.id} year={project.year} projectName={project.name} role={project.role}
                description={project.description} tags={project.techStack} />
        )
    })

    return (
        <section id='projects'>
            <h2>PROJECTS</h2>
            {myProjects}


        </section>
    )
}

export default Projects