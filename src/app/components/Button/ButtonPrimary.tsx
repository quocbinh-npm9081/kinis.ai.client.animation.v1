import React from 'react'

const ButtonPrimary = ({text}: {text: string}) => {
  return (
    <button className="bg-primary hover:bg-primary/95 text-white font-bold py-4 px-8 rounded-lg text-nowrap">
        {text}
    </button>
  )
}

export default ButtonPrimary