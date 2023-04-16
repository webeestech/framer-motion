import React from 'react'
import { motion, useAnimation } from 'framer-motion'

const Box5 = () => {
   const control = useAnimation();
  return (
    <div className='container'>
       <button onClick={() => {control.start({
        x:100,
        transition: { duration: 2}
       })}} >Right</button>
       <button onClick={() => {control.start({
        x:-100,
        transition: { duration: 2}
       })}}>Left</button>
       <button onClick={() => {control.start({
        borderRadius: "20%",
        transition: { duration: 2}
       })}}>Circle</button>
       <button onClick={() => {control.start({
        borderRadius: "0%",
        transition: { duration: 2}
       })}}>Square</button>
       <motion.div
        className='box'
        animate={control}
       >

       </motion.div>
    </div>
  )
}

export default Box5 