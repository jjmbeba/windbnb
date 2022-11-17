import React from 'react'
import { useSelector } from 'react-redux'
import Header from './Header'
import SearchMenu from './SearchMenu'
import Stays from './Stays'


const Layout = () => {
  const menuState = useSelector((state) => state.open);
  return (
    <div className='w-full relative h-full py-[13px] md:py-[49px] px-[22px] md:px-[94px] overflow-x-hidden'>
      <Header/>
      <Stays/>
      {menuState && <SearchMenu/>}
    </div>
  )
}

export default Layout