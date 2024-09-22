import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'

const RoadMapSection = () => {
  return (
    <motion.section 
      className='flex flex-col items-center justify-start h-[120vh] py-28 bg-white'
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut" }}
    >
        <Image src='/images/Frame.png' alt='roadmap' width={1680} height={636} className='w-auto h-auto'/>
       
    </motion.section>
  )
}
export default RoadMapSection