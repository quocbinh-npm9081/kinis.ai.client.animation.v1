import Image from 'next/image'
import React from 'react'
interface ICardOurTechnologyProps  {
    img : string,
    typography : string,
    span : string,
    className? : string
}

export const CardOurTechnologyComponent: React.FC<ICardOurTechnologyProps> = ({
    img,
    typography,
    span,
    className = 'bg-white'
}) => {
  return (
    <div className={`flex flex-col items-center justify-between w-[400px] h-[510px] 2xl:w-[500px] 2xl:h-[610px]  shadow-xl p-10 rounded-2xl ${className}`}>
        <p className=''>
            <span className='font-semibold text-base md:text-lg 2xl:text-xl leading-4 md:leading-6 2xl:leading-7 bg-primary'>{typography} </span>
            <span className={`font-normal text-sm md:text-base 2xl:text-xl leading-4 md:leading-6 2xl:leading-7 ${className == 'bg-white' ? 'text-black' : 'text-white'}`}>{span}</span>
        </p>
        <Image
            src={img}
            width={520} 
            height={426}  
            alt={`our technology item ${img}`} 
        />
    </div>
)}
