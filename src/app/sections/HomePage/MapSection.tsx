import LegendComponent from '@/app/components/LegendComponent'
import Title from '@/app/components/Title/Title'
import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'

const MapSection = () => {
  return (
    <motion.section 
    className="flex flex-col w-full h-[180vh] items-center justify-center bg-white"
    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut" }}
    >
        <div className="container  mx-auto flex flex-col w-full h-[180vh] items-center justify-center">
            <Title paddingTop="12" paddingBottom="7" title="Fall Prevalence Among Older Adults and <br/> Distribution of Prevention Clinics" subtitle=" in the United States (2020)" className="text-black text-3xl 2xl:text-[40px]"/>
            <div className="flex w-full h-full items-center justify-start relative pt-8">
            <div className="relative w-5/6 h-full">
                    <Image className="object-fill w-auto h-auto" src="/images/US Map.png" alt="Map" width={1273} height={820} />
                    <Image src="/images/arrow_follow_map.png" alt="arrow follow" width={200} height={37} className='absolute w-auto h-auto md:top-[15%] md:left-[85%]'/>
                    <div className='absolute w-full h-full flex top-[-10%] md:left-[105%] 2xl:left-[100%] 2xl:top-[-5%] '>
                        <div className='flex flex-col items-center justify-start gap-6'>
                            <div className='flex flex-col items-center justify-center'>
                                <Image src="/images/icon_home.png" alt='icon home' height={30} width={47} className='w-auto h-auto'/>
                                <p className='font-medium text-black text-sm'>
                                Where we conduct <br />
                                feasibility study
                                </p>
                            </div>
                        <Image src="/images/Positive.png" alt="arrow follow" width={200} height={37} className=' w-auto h-auto'/>
                        </div>
                    </div>

            </div>
            <div className="w-1/6 h-full flex items-end justify-end">
                    <div className="flex flex-col gap-2 pb-36">
                        <div className="relative flex items-center justify-center gap-2">
                            <Image src="/images/Mappin.png" alt="Map" width={30} height={47} className='w-auto h-auto'/>
                            <span className="text-sm font-bold ">
                                Current fall prevention <br/> clinics
                            </span>
                        </div>
                        <LegendComponent backgroundColor="#FDE8DC" title="19.9 % - < 23.5%" /> 
                        <LegendComponent backgroundColor="#F9B996" title="23.5% - <  27.1%" /> 
                        <LegendComponent backgroundColor="#F7A273" title="27.1% - <  30.8%" />  
                        <LegendComponent backgroundColor="#F3742D" title="30.8% - < 34.4%" />  
                        <LegendComponent backgroundColor="#790000" title="34.4% - < 38.0%" /> 
                    </div>
                
            </div>
            </div>
            <div className="flex items-center justify-end w-full pb-20">
                <Image src="/images/logo-notext 2.png" alt="CDC logo" width={97} height={95} className='w-auto h-auto'/>
            </div>
        </div>
    </motion.section>
  )
}

export default MapSection