import React from 'react'
export interface IPropsEventList {
    children: React.ReactNode
}
function EventList({children}:IPropsEventList) {
  return (
      <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-4 lg:gap-5'>
          {children}
    </div>
  )
}

export default EventList