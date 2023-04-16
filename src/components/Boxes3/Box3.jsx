import React from 'react'
import { motion } from 'framer-motion'

const Box3 = () => {
  return (
    <div className='container'>
        <motion.div 
        className='box'
        animate={{
            scale: [1, 1.2, 0.2, 0.7, 1],
            borderRadius: ['20%','70%','40%','90%','20%'],
            rotate: [0, 180, 90, 270, 0]
        
        }}
        transition={{
            duration: 2
        }}
        
        >
            
        </motion.div>
    </div>
  )
}

export default Box3