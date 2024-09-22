import CartExperienceComponent from '@/app/components/Card/CartExperienceComponent/CartExperienceComponent'
import Title from '@/app/components/Title/Title'
import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'
const ExperienceClinicSection = () => {

  return (
    <motion.section className='relative flex flex-col items-center justify-start py-24' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut" }}>
        <div className='flex flex-col items-center justify-start gap-10 pb-32'>
            <Title title='Experience clinic-quality  <br/> balance assessment' subtitle='from the comfort of your home!' className='text-black text-3xl 2xl:text-[40px]'/>
        </div>
        <div className="container w-full grid  grid-rows-2 md:grid-rows-none md:grid-cols-2 ">
          <div className="flex flex-col items-center justify-center">
            <div className='relative'>
              <Image src='/images/GIF_BAT_1.gif' alt='gif_BAT.gif' width={644} height={615} className='w-auto h-auto' unoptimized={true}/>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-5">
            <div className="grid grid-cols-2 gap-4">
              <CartExperienceComponent title='Free Access' description='Our premium balance tool is now available at no cost within the Kinis ecosystem' bgColor='bg-cardExperienceDark' colorTitle='text-white' colorDescription='text-white'/>     
              <CartExperienceComponent title='Clinic-Quality Results' description='Get professional-grade insights without leaving your home' bgColor='bg-cardExperienceLight' colorTitle='text-dark' colorDescription='text-[#0B0A0A]' borderColor='border-experience'/> 
              <CartExperienceComponent title='Actionable Insights' description='Receive personalized recommendations to improve your balance and mobility' bgColor='bg-cardExperienceLight' colorTitle='text-dark' colorDescription='text-[#0B0A0A]' borderColor='border-experience'/>     
              <CartExperienceComponent title='Immediate Access' description='Start your balance assessment right away' bgColor='bg-cardExperienceDark' colorTitle='text-white' colorDescription='text-white' />         
            </div>
            <div className="grid grid-cols-1 gap-4 w-full">
              <CartExperienceComponent title='User-Friendly Interface' description='Easy to use, even for those new to health tech' bgColor='bg-cardExperienceDark' colorTitle='text-white' colorDescription='text-white'/>         
            </div>
            <div className="grid grid-rows-2 w-full mt-7">
              <div className='text-dark text-start text-sm md:text-2xl py-2'>Take the first step towards better balance and mobility today!</div>
              <div className="flex justify-start items-center gap-4">
                <button className="bg-[#949494] hover:bg-[#949494]/95 text-white font-bold py-2 px-4 md:py-4 md:px-6 rounded-lg text-base md:text-xl gap-8">
                  Try Our Free Balance Tool Now
                </button>
                <p className='text-dark text-center text-sm md:text-base italic'> (Not Available)</p>
              </div>
            </div>
          </div>
        </div>
    </motion.section>
  )
}

export default ExperienceClinicSection