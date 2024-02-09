import ProjectCard from '@/components/ProjectCard'
import { Projects } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <div>
      <video
        autoPlay
        loop
        muted
        style={{ width: "100%", height: "100%", objectFit: "cover", position: "fixed", zIndex: "-1" }}
      >
        <source src="/project2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='w-screen h-screen flex items-center justify-center bg-center bg-cover'>
        <div className='flex flex-wrap justify-center gap-5 max-w-[70%] max-h-[70%] hover:overflow-y-scroll'>
          {Projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              text={project.text}
              image={project.src}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page
