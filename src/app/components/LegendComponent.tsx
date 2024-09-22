import React from 'react'

interface LegendComponentProps {
    backgroundColor: string;
    title: string;
}

const LegendComponent = ({backgroundColor, title}: LegendComponentProps) => {
  return (
    <div className="flex items-center justify-start gap-2">
        <div className={`w-8 h-8 rounded-sm`} style={{ backgroundColor: backgroundColor }}>
        </div>
        <div className="text-sm font-bold">{title}</div>
    </div>

  )
}

export default LegendComponent