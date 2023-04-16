import React from 'react'
import { motion } from 'framer-motion'

const Box4 = () => {
    const boxVariant= {
        hidden:{
            x: "-100vw"
        },
        visible:{
            x:0,
            transition:{
                delay: 0.5,
                when: "beforeChildren"
            }
        }
    }

    const liVariant = {
        hidden:{
            x:-10,
            opacity:0
        },
        visible:{
            x:0,
            opacity:1, 
            staggerChildren: 0.2             
        }
    }
  return (
    <div className='container'>
        <motion.div 
        className='box'
        variants={boxVariant}
        animate="visible"
        initial="hidden"
        
        >
            {[1,2,3].map(box=>{
                return (
                    <motion.li 
                    className='boxItem'
                    variants={liVariant}
                    ></motion.li>
                )
            })}
        </motion.div>
    </div>
  )
}

export default Box4 