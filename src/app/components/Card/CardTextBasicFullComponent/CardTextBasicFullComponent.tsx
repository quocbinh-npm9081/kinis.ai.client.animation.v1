import Image from 'next/image'
import React from 'react'

interface IInfoImage {
  name: string,
  institution: string,
  position : string,
  height: number,
  width: number
}

interface ICardTextBasicProps {
    title : string,
    description : string,
    img : string,
    infoImg? : IInfoImage
}

const CardTextBasicFullComponent : React.FC<ICardTextBasicProps>= ({title, description, img , infoImg}) => {
  return (
    <div className='flex flex-row px-10 py-12 max-w-[1404px] max-h-[430px] text-[#23242A] bg-white gap-6 rounded-[10px]'>
        <div className='flex flex-col gap-6 justify-between'>
          <div className='flex flex-col gap-6 '>
            <div className='font-medium text-2xl md:text-3xl 2xl:text-[44px] leading-7 md:leading-[38.4px] 2xl:leading-[48.4px]'>
                {title}
            </div>
            <p className="font-normal text-lg md:text-xl 2xl:text-2xl leading-[31.2px]">
                {description}
            </p>

          </div>
          {
            infoImg &&    
            <div className='flex flex-col items-end justify-center'>
                <div className='font-medium text-base md:text-lg 2xl:text-xl leading-4 md:leading-5 2xl:leading-[26px]'>{infoImg.name}</div>
                <div className='font-medium text-base md:text-lg 2xl:text-xl leading-4 md:leading-5 2xl:leading-[26px]'>{infoImg.institution}</div>
                <div className='font-normal text-sm md:text-base 2xl:text-xl leading-4 md:leading-5 2xl:leading-[26px] text-right'>{infoImg.position}</div>
            </div>
          }
       
        </div>
        <Image 
          src={img} 
          alt={infoImg ? infoImg?.name : 'title'} 
          width={infoImg?.width} 
          height={infoImg?.height}>
        </Image>
    </div>
  )
}

export default CardTextBasicFullComponent