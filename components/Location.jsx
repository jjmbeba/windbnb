import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setLocChoice } from '../slices/menuSlice';

const Location = ({city}) => {

    const dispatch = useDispatch();

  return (
    <div onClick={() => dispatch(setLocChoice(city))} className='flex cursor-pointer items-center justify-start gap-[10px] font-mulish'>
        <Image src="/location.svg" width={14} height={19} alt="location-icon"/>
        <span className='text-[14px] leading-[18px] text-[#4F4F4F] font-[400]'>{city}, Finland</span>
    </div>
  )
}

export default Location