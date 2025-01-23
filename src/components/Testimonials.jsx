import React from 'react'
import Title from './Title'
import Clients from './Clients'

const Testimonials = () => {
  return (
    <div id='testimonials' className='flex flex-col items-center gap-[5rem] py-24'>
      <Title/>
      <Clients/>
    </div>
  )
}

export default Testimonials