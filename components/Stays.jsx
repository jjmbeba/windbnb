import React from 'react'
import Stay from './Stay'
import data from '../stays.json' assert {type : 'JSON'};
import { useSelector } from 'react-redux';


const Stays = () => {

    console.log(data);

    const guests = useSelector((state) => state.guests);
    const locChoice = useSelector((state) => state.locChoice);
    const results = data.filter(({city, maxGuests}) => city===locChoice && guests<=maxGuests);
    const guestsResults = data.filter(({maxGuests}) => guests<=maxGuests);

  return (
    <div className='pt-[37px] md:pt-[61px] font-montserrat'>
        <div className='w-full flex items-center justify-between'>
            <h2 className='font-bold text-[18px] md:text-[24px] leading-[22px] md:leading-[29px] text-[#333333]'>
                Stays in Finland
            </h2>
            <span className='font-[500] text-[14px] leading-[17px] text-[#4F4F4F]'>
                12+ stays
            </span>
        </div>
        <div className='pt-[24px] md:pt-[32px] grid gap-[32px] md:grid-cols-3 pb-[144px]'>
            {
                guests===0 && locChoice ==="" && data.map(({city,superHost,title,rating,type,maxGuests,beds,photo}) => (
                    <Stay city={city} superHost={superHost} title={title} rating={rating} type={type} maxGuests={maxGuests} beds={beds} photo={photo}/>
                ))
            }
            {
                results.map(({city,superHost,title,rating,type,maxGuests,beds,photo}) => (
                    <Stay city={city} superHost={superHost} title={title} rating={rating} type={type} maxGuests={maxGuests} beds={beds} photo={photo}/>
                ))
            }
            {
                locChoice === "" && guests>0 && guestsResults.map(({city,superHost,title,rating,type,maxGuests,beds,photo}) => (
                    <Stay city={city} superHost={superHost} title={title} rating={rating} type={type} maxGuests={maxGuests} beds={beds} photo={photo}/>
                ))
            }
        </div>
    </div>
  )
}

export default Stays