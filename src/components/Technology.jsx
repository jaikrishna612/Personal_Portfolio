import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'
import { BiLogoSpringBoot } from 'react-icons/bi'
import { DiMysql } from 'react-icons/di'
import { SiPostman } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'
import { motion } from "motion/react"
const iconvariants=(duration) =>({
    initial:{y:-10},
    animate:{y: [10,-10], transition:{duration:duration, ease: "linear", repeat: Infinity, repeatType: "reverse"}},
})
const Technology = () => {
  return (
    <div className='border-b border-neutral-900 pb-24'>
        <motion.h1
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0, y:-100}}
            transition = {{duration:1.5}}
            className='my-20 text-center text-4xl'>Technologies</motion.h1>
        <motion.div
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:1.5}}
            className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div
                variants={iconvariants(2.5)}
                initial="initial"
                animate= "animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-6xl text-cyan-400'/>
            </motion.div>
            <motion.div
                variants={iconvariants(3)}
                initial="initial"
                animate= "animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                <BiLogoSpringBoot className='text-6xl text-green-600'/>
            </motion.div>
            <motion.div
                variants={iconvariants(5)}
                initial="initial"
                animate= "animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiPostman className='text-6xl text-orange-600'/>
            </motion.div>
            <motion.div
                variants={iconvariants(2.5)}
                initial="initial"
                animate= "animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMongodb className='text-6xl text-green-500'/>
            </motion.div>
            <motion.div
                variants={iconvariants(6)}
                initial="initial"
                animate= "animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiMysql className='text-6xl text-sky-700'/>
            </motion.div>
            <motion.div
                variants={iconvariants(4.5)}
                initial="initial"
                animate= "animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiJavascript className='text-6xl text-yellow-400'/>
            </motion.div>
            
        </motion.div>
    </div>
  )
}

export default Technology