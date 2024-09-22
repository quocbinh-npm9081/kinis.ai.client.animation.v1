import Image from 'next/image'
import React from 'react'

const InterestedPartnerSection = () => {
  return (
    <section className='flex flex-row items-center justify-center h-screen w-screen'>
      <div className='relative h-full w-full'>
        <Image src="/images/interestPartner.png" width={1106} height={1165} alt='interestPartner'/>
      </div>
      <div className='bg-black flex flex-col items-center justify-center h-full'>
        <div>
          <div className='text-white  leading-[60px]'>
            <span className='font-semibold text-xl md:text-4xl 2xl:text-5xl'>Interested in Partnering {' '}</span> <br></br>
            <span className='font-normal text-xl md:text-4xl 2xl:text-5xl'>with Kinis AI?</span>
          </div>
          <p>
            If your clinic, hospital, research institution, or company is interested in exploring partnership opportunities with Kinis AI, please fill out the form below. Our team will reach out to discuss how we can work together to revolutionize healthcare and improve patient outcomes.
          </p>
        </div>

      </div>
    </section>
  )
}

export default InterestedPartnerSection