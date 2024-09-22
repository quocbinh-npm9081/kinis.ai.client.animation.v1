import React from 'react'
interface ICardTextBasicProps {
    title : string,
    description : string
}

const CardTextBasicComponent : React.FC<ICardTextBasicProps>= ({title, description }) => {
  return (
    <div className='flex flex-col px-10 py-12 max-w-[440px] max-h-[394px] text-[#23242A] bg-white gap-6 rounded-xl'>
        <div className='font-medium text-3xl md:text-4xl 2xl:text-[44px] leading-7 md:leading-[38.4px] 2xl:leading-[48.4px]'>
            {title}
        </div>
        <p className="font-normal text-2xl leading-[31.2px]">
            {description}
        </p>
    </div>
  )
}

export default CardTextBasicComponent