import React from 'react'
import { motion } from "framer-motion";

const defaultAnimation = {
    hidden:{
        opacity:0,
    },
    visible:{
        opacity:1,
    },
};

function AnimatedText({text,...props}) {

    return (
        <motion.span {...props} initial="hidden" animate="visible" transition={{
            staggerChildren: 0.0025,
        }}>
            {
                text.split("").map((char,i)=>(
                    <motion.span key={i} variants={defaultAnimation}>
                        {char}
                    </motion.span>
                ))
            }
        </motion.span>
    )
}

export default AnimatedText