import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col lg:flex-row  items-center gap-2 justify-center bg-textcolor text-background px-[5%] py-8 lg:py-2 w-full'>
      <p className='text-center'>@2024 Triply. All Rights Reserved Privacy Policy Terms of Service</p>
      <hr className='w-full  lg:h-[2.5vh] lg:w-[0.75px] bg-white' />
     <p className='text-center'>Manage Cookies</p>
    </div>
  )
}

export default Footer
