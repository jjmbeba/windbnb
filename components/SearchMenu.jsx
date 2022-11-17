import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setGuests, setMenuState } from '../slices/menuSlice';
import data from '../stays.json'
import Location from './Location';

const SearchMenu = () => {
    const locationSet = new Set(data.map(({city}) => city));
    const locations = Array.from(locationSet.values());
    const [active, setActive] = useState({
        location:false,
        guests:false
    });
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);

    const locChoice = useSelector((state) => state.locChoice);
    const guests = useSelector((state) => state.guests);


    const adultAdd = () => {
        setAdults(adults+1);
    }

    const adultMinus = () => {
        if(adults > 0){
            setAdults(adults-1);
        }
    }

    const childrenAdd = () => {
        setChildren(children+1);
    }

    const childrenMinus = () => {
        if(children > 0){
            setChildren(children-1);
        }
    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setGuests(adults+children))
    },[children, adults])

    const handleClick = () => {
        dispatch(setMenuState());
    }
    const handleLocClick = () => {
        setActive((prev) => {
            return {
                location:true,
                guests:false
            }
        })
    }

    const handleGuestClick = () => {
        setActive((prev) => {
            return {
                location:false,
                guests:true
            }
        })
    }

  return (
    <div className='w-screen h-[88vh] absolute top-0 left-0 bg-white px-[22px] '>
        <div className='md:hidden flex w-full items-center justify-between pt-[18px] text-[12px] leading-[15px] text-[#333333] font-bold'>
            <span>Edit your search</span>
            <Image onClick={handleClick} src="/close.svg" width={13} height={13} alt="close"/>
        </div>
        <div className='md:my-[93px] my-[16px] rounded-[16px] shadow-search md:flex'>
            <div onClick={handleLocClick} className={`container ${active.location && 'border border-solid rounded-[16px] border-[#333333]'}`}>
                <label htmlFor="location" className='label'>LOCATION</label>
                <input className='inp' readOnly value={locChoice !== '' ? `${locChoice}, Finland    ` : ''} type="text" name='location' placeholder='Helsinki, Finland'/>
            </div>
            <div onClick={handleGuestClick} className={`container ${active.guests && 'border border-solid rounded-[16px] border-[#333333]'}`}>
                <label htmlFor="guests" className='label'>GUESTS</label>
                <input className='inp' readOnly value={guests !== 0 ? `${guests} guests` : ''} type="text" name='guests' placeholder='Add guests'/>
            </div>
            <button onClick={() => dispatch(setMenuState())} className='hidden md:block bg-[#EB5757] text-[#F2F2F2] font-bold text-[14px] leading-[18px] rounded-[16px] shadow-search px-[27px] max-h-[48px] mt-[8px] ml-[100px] mr-[133px]'>
                Search
            </button>
        </div>
        <div className='pt-[35px]  md:pt-[42px] flex flex-col gap-[34px]'>
           {
            active.location && locations.map((city) => (
                <div className='flex flex-col gap-[10px] pl-[26px]'>
                    <Location city={city}/>
                </div>
            ))
           }
           {
            active.guests && (
                <div className='font-mulish w-full pl-[26px] md:pl-0 md:flex items-center justify-center'>
                    <div className='flex flex-col'>
                    <div className='text-[14px] leading-[18px] font-bold'>
                        <h3 className='text-[#333333]'>Adults</h3>
                        <span className='text-[#BDBDBD] pt-[10px]'>Ages 13 or above</span>
                        <div className='count-container'>
                            <button onClick={adultMinus} className='btn'>
                                -
                            </button>
                            <span className='count'>
                                {adults}
                            </span>
                            <button onClick={adultAdd} className='btn'>
                                +
                            </button>
                        </div>
                    </div>
                    <div className='text-[14px] leading-[18px] font-bold pt-[52px]'>
                        <h3 className='text-[#333333]'>Children</h3>
                        <span className='text-[#BDBDBD] pt-[10px]'>Ages 2-12</span>
                        <div className='count-container'>
                            <button onClick={childrenMinus} className='btn'>
                                -
                            </button>
                            <span className='count'>
                                {children}
                            </span>
                            <button onClick={childrenAdd} className='btn'>
                                +
                            </button>
                        </div>
                    </div>
                    </div>
                </div>
            )
           }
           <button onClick={() => dispatch(setMenuState())} className={`m-auto md:hidden py-[15px] max-w-[126px] ${active.guests ? '!opacity-100' : active.location && '!opacity-100'} opacity-0 flex absolute bottom-[25px] left-[50%] translate-x-[-50%] item gap-[10px] bg-[#EB5757] text-[#F2F2F2] font-mulish font-bold text-[14px] leading-[18px] rounded-[16px] shadow-search px-[27px] max-h-[48px]`}>
                <Image src="/searchWhite.svg" height={17} width={17} alt="search"/>
                <span>Search</span>
            </button>
        </div>
    </div>
  )
}

export default SearchMenu