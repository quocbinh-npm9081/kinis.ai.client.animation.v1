import React from 'react'
interface CardAnalystComponentProps{
  title: string;
  description: string;
}
const CardAnalystComponent = ({title, description}: CardAnalystComponentProps) => {
  return (
    <div className="flex flex-col w-full h-full items-start justify-start border-2 border-primary shadow-primary/15 rounded-lg shadow-lg px-6 py-7 bg-white gap-4">
      <div className='text-primary text-2xl 2xl:text-4xl font-bold'>{title}</div>
      <div className="border-l-4 border-l-primary p-2 font-medium text-xl 2xl:text-2xl h-full flex items-center">{description}</div>
    </div>
  )
}

export default CardAnalystComponent