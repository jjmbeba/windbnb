import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setMenuState } from '../slices/menuSlice';

const Search = () => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(setMenuState());
    }
    const locChoice = useSelector((state) => state.locChoice);
    const guests = useSelector((state) => state.guests);

  return (
    <div onClick={handleClick} className='mt-[39px] ml-[26px] md:mt-0 md:ml-0 flex text-[14px] leading-[18px] cursor-pointer rounded-[16px] shadow-search'>
        <span className='text-[#333333] px-[16px] py-[19px]'>{locChoice !== '' ? `${locChoice}, Finland` : 'Finland'}</span>
        <span className='text-[#BDBDBD] px-[16px] py-[19px] border border-solid border-y-transparent border-x-[#F2F2F2]'>{guests>0 ? `${guests} guests` : 'Add guests'}</span>
        <div className='px-[16px] py-[19px]'>
            <Image src="/search.svg" width={17} height={17} alt="search"/>
        </div>
    </div>
  )
}

export default Search