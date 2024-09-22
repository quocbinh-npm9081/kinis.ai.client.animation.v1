import CardPartnershipInvestComponent from '@/app/components/Card/CardPartnershipInvestComponent/CardPartnershipInvestComponent'
import Image from 'next/image'
import React from 'react'

interface IProps{
  isShowCartPartnerShip? : boolean
}

const FooterSection : React.FC<IProps> = ({isShowCartPartnerShip = true}) => {
  return (
    <section className={`relative flex flex-col items-center justify-start bg-black  ${isShowCartPartnerShip ? 'h-[130vh]' : 'h-[100vh]'}`}>
      {isShowCartPartnerShip && <>
        <div className='absolute top-[-40%] 2xl:top-[-25%] flex flex-col items-center justify-center gap-12 border-b-2 border-white p-14 border-opacity-[30%]'>
        <div className='grid grid-rows-2 md:grid-cols-2 md:grid-rows-none gap-12 '>
          <CardPartnershipInvestComponent 
                title='PARTNERSHIP & COLLABORATION' 
                listContent={["Are you a healthcare professional, researcher, or industry expert interested in revolutionizing mobility health? We're looking for partners like you!","If you are passionate about improving people's lives through innovative technology, we want to hear from you."]} 
                contentButton='Partnership' 
          />
            <CardPartnershipInvestComponent 
                title='INVESTMENT OPPORTUNITIES' 
                listContent={["We're currently raising our seed round and seeking strategic partners to join us on our mission to transform mobility health."]} 
                contentButton='Investor' 
          />
        </div>
        <div className='flex flex-row items-center justify-center  px-10 py-8 2xl:w-[1312px] gap-8 rounded-lg bg-white' >
            <p className='text-black text-xl 2xl:text-2xl italic font-[400]'>Our team is committed to responding within 24 hours. We are thrilled about these potential collaborations and look forward to connecting with you.</p>
            <p className='text-white bg-primary px-4 py-2 2xl:px-6 2xl:py-4 rounded-lg text-xl 2xl:text-2xl font-[400] text-nowrap gap-2'>Email: vincent@kinis.com(Mr. Vincent Vu)</p>
        </div>
      </div>
      </>}
      
      <div className='flex flex-row items-center justify-center w-full h-full'>
      </div>

      <div className='container mx-auto flex flex-row items-center justify-between w-full h-full max-w-[1444px] pb-10 px-10' >
          {/* FOOTER LEFT */}
          <div className='flex flex-col items-start justify-start gap-4 w-[535px]'>
            <Image src="/images/footer/logo-footer.svg" alt="logo-footer" width={97} height={95} className='w-auto h-auto'/>
            <p className='text-white text-xl 2xl:text-2xl font-[500] opacity-[65%]'>Kinis is revolutionizing mobility health with
            smart insole technology and AI-powered insights.</p>
            <div className='flex flex-row items-center justify-start gap-3'>
              <Image src="/images/footer/phone-icon-footer.png" alt="phone-icon-footer" width={97} height={95} className='w-auto h-auto'/> 
              <span className='text-white text-xl 2xl:text-2xl font-[400] text-nowrap'>+1 (804) 315-9525</span> 
            </div>
            <div className='flex flex-row items-center justify-start gap-3'>
              <Image src="/images/footer/mail-icon-footer.png" alt="mail-icon-footer" width={97} height={95} className='w-auto h-auto'/>
              <span className='text-white text-xl 2xl:text-2xl font-[400] text-nowrap' >vincent@kinis.com</span>
            </div>
            <div className='flex flex-row items-center justify-start gap-3'>
              <Image src="/images/footer/position-icon-footer.png" alt="position-icon-footer" width={97} height={95} className='w-auto h-auto'/> 
              <span className='text-white text-xl 2xl:text-2xl font-[400] text -nowrap'>1717 East Cary Street, Richmond, VA 23223,USA</span>
            </div>
            <div className='flex flex-row items-center justify-start gap-3'>
              <Image src="/images/footer/in-icon.png" alt="in-icon-footer" width={107} height={105} className='w-auto h-auto'/> 
            </div>
          </div>
          {/* FOOTER RIGHT */}
          <div className='flex flex-col items-start justify-start gap-4 w-[535px] pt-10'>
            <p className='text-white text-xl 2xl:text-2xl font-[500] opacity-[65%]'>Sign up to receive news and updates.</p>
            <form className="w-[439px]">
              <div className="flex items-center bg-white py-2 w-full rounded-lg p-3">
                <input className="appearance-none bg-transparent border-none w-full  text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Enter your email" aria-label="Enter your email"/>
                <button className="flex items-center justify-center flex-shrink-0 bg-black  text-base font-[500] text-white py-4 px-6 rounded-lg gap-8 w-[115px] h-[42px] text-nowrap" type="button">
                  Subscribe
                </button>
                
              </div>
            </form>
            <div className="flex flex-col items-start justify-center gap-4 mt-10">
              <div className="text-white text-xl 2xl:text-2xl font-[500] opacity-[65%]">
                Get the app on
              </div>
              <div className="flex justify-start items-center gap-4">
                <Image src="/images/footer/app-store-icon.png" alt="app-store-icon" width={146} height={43} className='w-auto h-auto'/>
                <Image src="/images/footer/google-play-icon.png" alt="google-play-icon" width={146} height={43} className='w-auto h-auto'/>
              </div>
            </div>
          </div>
      </div>
      <div className='bg-white h-[2.64px] w-[1432px] opacity-[30%]'>
       
      </div>
      <div className='text-white text-base 2xl:text-lg font-[400] opacity-[70%] pt-6 pb-14'>
          Copyright © 2024 • KINIS AI INC.
       </div>
    </section>
  )
}


export default FooterSection