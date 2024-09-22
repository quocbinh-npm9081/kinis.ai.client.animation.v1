import CardAnalystComponent from '@/app/components/Card/CardAnalystComponent/CardAnalystComponent'
import Title from '@/app/components/Title/Title'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'

const DarkOverlayGradient = styled.div`
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    top:0;
    left:0;
background: rgb(0,0,0);
background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9528186274509804) 50%, rgba(0,0,0,0.3701855742296919) 100%);
`

const PartnerSection = () => {
  return (
    <motion.section 
        className="relative flex flex-col w-screen h-screen items-center justify-center"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut" }}
    >
        {/* SECTION PARTNER  */}
        <DarkOverlayGradient />
        {/* LIST PARTNER */}
        <div className="flex flex-col w-full h-1/2 items-center justify-evenly relative py-8 gap-10">
            <Title title="Organizations that" subtitle="trust us" className="text-white text-3xl 2xl:text-[40px]"/>
            <div className="flex flex-col justify-center items-center z-20  w-full gap-10">
                <div className="grid grid-cols-4 gap-10">
                    <div className="flex items-center justify-center">
                        <Image src="/images/image_partner_1.png" alt="partner" width={170} height={170} className='w-auto h-auto'/>
                    </div>
                    <div className="flex items-center justify-center">
                        <Image src="/images/image_partner_2.png" alt="partner" width={170} height={170} className='w-auto h-auto'/>
                    </div>
                    <div className="flex items-center justify-center">
                        <Image src="/images/image_partner_3.png" alt="partner" width={170} height={170} className='w-auto h-auto'/>
                    </div>
                    <div className="flex items-center justify-center">
                        <Image src="/images/image_partner_4.png" alt="partner" width={170} height={170} className='w-auto h-auto'/>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-10">
                    <div className="flex items-center justify-center">
                        <Image src="/images/image_partner_5.png" alt="partner" width={170} height={170} className='w-auto h-auto'/>
                    </div>
                    <div className="flex items-center justify-center">
                        <Image src="/images/image_partner_6.png" alt="partner" width={170} height={170} className='w-auto h-auto'/>
                    </div>
                    <div className="flex items-center justify-center">
                        <Image src="/images/image_partner_7.png" alt="partner" width={170} height={170} className='w-auto h-auto'/>
                    </div>
                </div>
            </div>
            <Image className="object-cover" src="/images/partner.png" alt="partner" fill={true} />
        </div>
        {/* QUOTE */}
        <div className="flex w-full h-1/2 items-center justify-center relative py-8">
        <div className="flex flex-col items-center justify-center z-20  mx-auto container gap-8">
            <div className="flex justify-center gap-3">
                <div className="flex items-start justify-center"> 
                    <Image className="object-cover w-auto h-auto" alt="text_open" src="/images/text_open.png" width={55} height={33}  />
                </div>
                <h3 className="text-center text-white text-wrap text-2xl md:text-3xl 2xl:text-4xl font-bold px-5" >Falls are 
                    <span className="color-signature"> leading cause of injury and injury death</span> among adults ages 65 and over
                <br/> More than 1 in 4 older adults fall each year leading to</h3>
                <div className="flex items-end justify-center">
                    <Image className="object-cover w-auto h-auto" alt="text_close" src="/images/text_close.png" width={55} height={33}  />
                </div>
            </div>
            <div className="flex items-center justify-center pb-20">
                <Image src="/images/logo-notext 2.png" alt="CDC logo" width={64} height={42} className='w-full h-auto'/>
            </div>
        </div>
        <Image className="object-cover"  src="/images/care.png" alt="partner" fill={true}  />
        </div>
       
        {/* CART ANALYST */}
        <div className="absolute top-[90%] w-4/5 flex items-center justify-center z-20">
            <div className="grid grid-cols-5 gap-6">
                <CardAnalystComponent title="41,000" description="Deaths" />
                <CardAnalystComponent title="3,6 millions" description="Emergency department visits" />
                <CardAnalystComponent title="1,2 millions" description="Hospital stays" />
                <CardAnalystComponent title="$80 billions" description="Older adult falls medical costs/year" />
                <CardAnalystComponent title="2/3 of costs" description="Are shouldered by Medicare" />
            </div>
        </div>
       
    </motion.section>
  )
}

export default PartnerSection