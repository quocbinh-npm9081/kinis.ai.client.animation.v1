import Title from '@/app/components/Title/Title'
import React from 'react'
import {motion} from 'framer-motion'

const ScienceBaseSection = () => {
  return (
    <motion.section 
      className="flex flex-col w-full h-[130vh] items-center justify-start relative"
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut" }}
    >
        <div className="container mx-auto z-50">
            <div className="flex w-full flex-col items-center justify-center h-full gap-6 pt-20">
                <Title title="Science-Based Biomechanics" subtitle="at Your Fingertips" className="text-white text-3xl 2xl:text-[40px]" />
                <div className="text-white text-center text-2xl">Kinis Ai Delivers Personalized, Lab-Quality Gait Analysis for Precision in Every Step.</div>
            </div>
        </div>
        <video className='absolute top-0 left-0 w-full h-full object-cover' autoPlay muted loop>
          <source src="/images/system.mov" type="video/mp4" />
        </video>
    </motion.section>
  )
}

export default ScienceBaseSection