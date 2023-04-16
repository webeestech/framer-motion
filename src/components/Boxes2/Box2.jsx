import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Box2 = () => {
    const [isClicked, setIsClicked] = useState(false);
  return (
    <div className='container'>
        <motion.div 
        className='box'
        animate={{
            x: isClicked ? 1000 : 0,
            opacity: isClicked ? 1 : 0.5,
            rotate: isClicked ? 270 : 0
        
        }}
        initial={{
            x: 0,
            opacity: 0.2
        }}
        transition={{
            duration: 2
        }}    
        onClick={() => setIsClicked(!isClicked)}
        >
            
        </motion.div>
    </div>
  )
}

export default Box2