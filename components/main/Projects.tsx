import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20'>
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
            My Projects
        </h1>
        <div className='h-full w-full  flex flex-col md:flex-row gap-10 px-10'>
            <ProjectCard 
            src="/assets/NextWebsite.png"
            title="Gesture-Controlled Video Player Glove"
            description='•	Designed and implemented a gesture-controlled glove that allows users to play, pause, skip forward, and skip backward videos using simple hand gestures.'
            />
            <ProjectCard 
            src="/assets/NextWebsite.png"
            title="Gesture-Controlled Video Player Glove"
            description='Designed and implemented a gesture-controlled glove that allows users to play, pause, skip forward, and skip backward videos using simple hand gestures.'
            />
            <ProjectCard 
            src="/assets/SpaceWebsite.png"
            title="Space Themed Portfolio Website"
            description='Developed a fully responsive personal portfolio website to showcase projects, skills, and experience.'
            />
        </div>
    </div>
  )
}

export default Projects