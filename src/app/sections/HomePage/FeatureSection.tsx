'use client'
import Title from '@/app/components/Title/Title'
import React from 'react'

import styled from 'styled-components'
import ButtonPrimary from '@/app/components/Button/ButtonPrimary'
import FeatureItemComponent from '@/app/components/FeatureItemComponent'



const BorderLeft = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 7px;  
  border-left: 1px solid black;
  z-index: 49;
`


const FeatureSection = () => {
  return (
    <section className='bg-white'>
        <div className="container mx-auto py-20">
          <Title title="Smart Insoles, AI, and Expert Care:" subtitle="The Kinis Mobility Ecosystem" className='text-dark text-3xl 2xl:text-[40px]' />
          <div className="relative flex flex-col items-start mt-20 py-10 gap-10  mx-auto">
              <BorderLeft />
              <FeatureItemComponent 
                content="01" 
                title=" Wear your <br/> K1 Smart Insoles " 
                description="Slip K1 Smart Insoles into your everyday shoes. Comfortable, durable, and packed with sensors." 
                list={["Seamless integration with any footwear", "All-day comfort for continuous use", "Water-resistant and shock-absorbing design"]} 
                img="/images/K1_GIF.gif" 
                circlePosition={{top: '0', left: '90%'}}  
                zIndex={true}
                unoptimized={true}
              />

              <FeatureItemComponent 
                content="02" 
                title="Move <br/> your Body" 
                description="Our smart insoles, equipped with Innovative Quad Bio Sensors, capture 360-degree movement data as you go about your day.
Whether you're walking, climbing stairs, jogging, or performing daily chores, Kinis captures your movements in real-time.
" 
                list={["High-precision sensors record gait, balance, and pressure points", "Continuous data collection during various activities (walking, running, workouts)", "Water-resistant and shock-absorbing design"]} 
                img="/images/feature_item2.gif"
                circlePosition={{top: '38%', left: '27%'}}  
                zIndex={true}
                unoptimized={true}
              />

              <FeatureItemComponent 
                content="03" 
                title="Now, <br/> Check your phone!" 
                description="Kinis detects subtle risk factors in your gait, balance, and posture, providing actionable biomechanical analytics &  personalized insights to keep you safe and mobile." 
                list={["Advanced AI algorithms process raw data", "Comprehensive gait and balance metrics", "Easy-to-understand visualizations and reports", "Real-time risk assessments"]} 
                img="/images/Walk.gif"
                circlePosition={{top: '50%', left: '70%'}}  
                zIndex={true}
                unoptimized={true}
              />
             
              <FeatureItemComponent 
                content="04" 
                title="Personalized Insights <br/> and Expert Feedback" 
                description="Receive tailored advice and connect with professionals to optimize your mobility health." 
                list={["AI-generated personalized recommendations", "Direct connection to qualified physical therapists/coaches", "Tele-health consultations based on your data", "Customized exercise plans and progress tracking"]} 
                img="/images/Home.gif"
                circlePosition={{top: '10%', left: '0'}}  
                zIndex={true}
                unoptimized={true}
              />
            <div className="mx-auto flex flex-row rounded-lg items-center justify-center gap-6 w-auto p-8 shadow-shadow-footer bg-[#f0f0f0]">
              <p className="text-2xl font-bold ">Want to learn more about our Technology?</p>
              <ButtonPrimary text="Learn more" />
            </div>
          </div>
        </div>
    </section>
  )
}

export default FeatureSection