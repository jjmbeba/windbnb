import Image from 'next/image'
import React from 'react'
import Search from './Search'

const Header = () => {
  return (
    <div className='w-full flex md:flex-row flex-col md:items-center justify-between font-poppins'>
        <div className='flex items-center gap-[5px]'>
        <Image src="/triangleLogo.png" width={21} height={18} alt="logo"/>
        <h1 className='font-bold text-[14px] leading-[21px] text-[#EB5757]'>
            windbnb
        </h1>
    </div>
    <Search/>
    </div>
  )
}

export default Header