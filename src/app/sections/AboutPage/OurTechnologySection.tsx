import { CardOurTechnologyComponent } from '@/app/components/Card/CardOurTechnologyComponent/CardOurTechnologyComponent'
import React from 'react'

const OurTechnologySection = () => {
  return (
    <section className="relative w-full h-screen bg-white py-36">
        <div className="container mx-auto flex flex-col md:flex-row w-full h-full gap-8 md:gap-10 2xl:gap-12">
        <CardOurTechnologyComponent 
            img='/images/our_technology_item1.png' 
            typography='Patent-Pending Proprietary Biosensor Technology: '
            span='Revolutionizing how we monitor and assess patient mobility.'
        />
          <CardOurTechnologyComponent 
            img='/images/our_technology_item2.png' 
            typography='Large Movement Model (LMM): '
            span='A groundbreaking AI system capable of predicting fall risk and assessing balance in accordance with APTA guidelines.'
            className='bg-black'
        />
          <CardOurTechnologyComponent 
            img='/images/our_technology_item3.png' 
            typography='Expert Team: '
            span='Our team of researchers, AI scientists, and world-renowned physicians brings together over 100 years of combined experience in advanced biosensor engineering and healthcare innovation.'
        />
        </div>
    </section>
  )
}

export default OurTechnologySection