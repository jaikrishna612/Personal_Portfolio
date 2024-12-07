import React from 'react'
import { PROJECTS } from '../constants'
import { BiLinkExternal } from 'react-icons/bi'
import { CgLink } from 'react-icons/cg'
import { motion } from "motion/react"

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h1
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0, y:-100}}
            transition={{duration:0.5}}
            className='my-20 text-center text-4xl'>Projects</motion.h1>
        <div>{PROJECTS.map((project,index)=>(
            <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x:-100}}
                    transition={{duration:0.5}}
                    className='w-full lg:w-1/4'>
                    <img src={project.image} width={230} height={150} alt={project.title} className='mb-6 rounded'/>
                </motion.div>
                <motion.div
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x:100}}
                    transition={{duration:0.5}}
                    className='w-full max-w-xl lg:w-3/4'>
                    <div className='flex flex-wrap gap-1'>
                        <h6 className='mb-2 font-semibold'>{project.title}</h6>
                        <a href={project.link} target='blank'>
                            <BiLinkExternal />
                        </a>
                    </div>
                    
                    <p className='mb-4 text-neutral-400'>{project.description}</p>
                    {project.technologies.map((techs,index)=>(
                        <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-indigo-800'>{techs}</span>
                    ))}
                </motion.div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Projects