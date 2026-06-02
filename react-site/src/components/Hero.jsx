import React from 'react'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section className="hero container">
      <motion.div initial={{opacity:0, y:12}} animate={{opacity:1,y:0}} transition={{duration:0.6}}>
        <h1>Fun Games & Creative Projects</h1>
        <p className="lead">Fast, mobile-friendly experiences and playful interactions built with care.</p>
        <div className="actions">
          <motion.button whileTap={{scale:0.96}} className="btn primary">Play Now</motion.button>
          <motion.button whileTap={{scale:0.96}} className="btn ghost">View Gallery</motion.button>
        </div>
      </motion.div>
      <motion.div className="hero-graphic" initial={{scale:0.98, opacity:0}} animate={{scale:1, opacity:1}} transition={{delay:0.15}}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="g" x1="0" x2="1">
              <stop offset="0%" stopColor="#0b63f6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="80" fill="url(#g)" opacity="0.12" />
          <g transform="translate(40 40)">
            <rect x="0" y="0" width="120" height="80" rx="12" fill="#fff" opacity="0.06" />
          </g>
        </svg>
      </motion.div>
    </section>
  )
}
