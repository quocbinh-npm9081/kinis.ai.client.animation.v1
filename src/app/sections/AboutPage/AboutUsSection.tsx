import Image from 'next/image'
import React from 'react'
import Link from 'next/link'


const AboutUsSection = () => {
    return (
        <section className='relative flex min-h-screen w-screen overflow-hidden'> 
           {/* TOP NAVIGATION */}
           <div className="fixed top-0 left-0 w-full " style={{zIndex: 100}}>
              <div className="flex items-center justify-between container mx-auto mt-2 py-2 px-11 bg-[#ffffff1f] backdrop-blur	rounded-lg">
                <Image src="/images/logo.svg" alt="logo" width={100} height={100} priority={true} className='w-auto h-auto'/>
                <div className="flex items-center ">
                  <ul className="flex items-center gap-9 font-bold">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/about">About Kinis</Link>
                    </li>
                    <li>
                      <Link href="/about">Our Technology</Link>
                    </li>
                  </ul>
                </div>
                <div className="menu">
    
                </div>
              </div>
           </div>
          {/* TOP NAVIGATION */}
    
          {/* HERO SECTION */}
          <div className="flex flex-col w-full h-screen items-center justify-end bg-cover bg-center bg-no-repeat pb-14" style={{backgroundImage: `url(/images/AboutUs.png)`}}>
            <div className="flex flex-col items-center justify-center w-full gap-6">
                <p className='w-[980px] md:w-[1388px] font-medium text-xl 2xl:text-3xl text-[#FFFFFF] text-center'>At Kinis AI, we are dedicated to transforming healthcare through our innovative AI-powered technologies. We offer a unique opportunity for clinics, hospitals, research institutions, and companies to enhance patient care by integrating our cutting-edge solutions</p>
                <Image src="/images/Union.svg" alt='union icon' height={36} width={44}></Image>
            </div>
          </div>
        </section>
       
      )
}

export default AboutUsSection