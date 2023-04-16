import React from 'react'
import { motion } from 'framer-motion'

const Box1 = () => {
  return (
    <div className='container'>
        <motion.div 
        className='box'
        animate={{
            x: 1000,
            opacity: 1,
            rotate: 270
        
        }}
        initial={{
            x: 0,
            opacity: 0.2
        }}
        transition={{
            duration: 2
        }}
        
        >
            
        </motion.div>
    </div>
  )
}

export default Box1