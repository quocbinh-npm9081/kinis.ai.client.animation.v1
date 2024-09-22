import Title from '@/app/components/Title/Title'
import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'


export const KinisToolSection = () => {
  return (
    <motion.section 
      className='relative flex flex-col min-h-screen items-center justify-start w-full bg-white'
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut" }}
    >
        <div className="flex flex-col items-center justify-start gap-10 py-16">
            <Title title="Introducing the" subtitle='Kinis Balance Assessment Tool' content='BAT' className="text-black text-3xl 2xl:text-[40px]"/>
        </div>
        <div className='relative w-full h-[808px] mt-20'>
          <Image 
              className='object-cover' 
              src="/images/kinis_tool_section.gif" 
              alt='Kinis Tool' 
              fill 
              unoptimized
              priority={true}
          />
        </div>
    </motion.section>
  )
}
