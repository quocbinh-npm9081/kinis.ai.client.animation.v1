import React from 'react'
import Title from '@/app/components/Title/Title'
import CardColleagueComponent from '@/app/components/Card/CardColleagueComponent/CardColleagueComponent'
import {motion} from 'framer-motion'
const ColleagueSection = () => {
  return (
    <motion.section 
      className='relative flex flex-col h-screen items-center justify-start bg-black'
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut" }}
    >
        <div className="flex flex-col items-center justify-start gap-10 py-16">
            <Title title="Our Science team:" subtitle='Backed by 100+ years of combined experience' content='' className="text-white text-3xl 2xl:text-[40px]"/>
        </div>
        <div className='flex flex-row items-start justify-center gap-10 2xl:gap-20 h-full w-full 2xl:pt-16'>
            <CardColleagueComponent title='Dr. John Doe' imgMain='/images/our-team 1.png' imgHovering='/images/Property 1=Group 69.png' />
            <CardColleagueComponent title='Bethany Russell PT,DPT' imgMain='/images/Property 1=Rectangle 74.png' imgHovering='/images/Property 1=Group 69 (1).png'/>
            <CardColleagueComponent title='Dr. Joe Abretski Co-Founder & CSO' imgMain='/images/Property 1=Rectangle 74 (3).png' imgHovering='/images/Property 1=Group 69 (4).png'/>
            <CardColleagueComponent title='Tracey Gendron,Ph.D' imgMain='/images/Property 1=Rectangle 74 (1).png' imgHovering='/images/Property 1=Group 69 (2).png'/>
            <CardColleagueComponent title='Dr. Nicole Pandak PY,DPT' imgMain='/images/Property 1=Rectangle 74 (2).png' imgHovering='/images/Property 1=Group 69 (3).png'/>
        </div>

    </motion.section>
  )
}

export default ColleagueSection