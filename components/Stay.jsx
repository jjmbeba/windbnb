import Image from 'next/image'
import React from 'react'

const Stay = ({city,superHost,title,rating,type,maxGuests,beds,photo}) => {
  return (
    <div className='max-w-[350px] md:max-w-[395px]'>
        <Image className='rounded-[24px] object-cover max-h-[238px] md:max-h-[269px] w-full' src={photo} width={395} height={269} alt="room-image"/>
        <div className='w-full flex items-center justify-between pt-[13px] md:pt-[15px]'>
            <div className='flex items-center gap-[9px] md:gap-[11px]'>
                {superHost && <span className='font-bold text-[10px] md:text-[12px] leading-[12px] md:leading-[15px] text-[#4F4F4F] border border-solid border-[#4F4F4F] rounded-[12px] px-[7px] md:px-[10px] py-[6px] md:py-[7px]'>SUPER HOST</span>}
                <span className='text-[12px] md:text-[14px] leading-[15px] md:leading-[17px] font-[500] text-[#828282]'>{type} {beds && `. ${beds} beds`}</span>
            </div>
            <div className='flex items-center gap-[7px]'>
                <Image src="/star.svg" width={15} height={15} alt="star"/>
                <span className='font-[500] text-[12px] md:text-[14px] leading-[15px] md:leading-[17px] text-[#4F4F4F]'>{rating}</span>
            </div>
        </div>
        <h3 className='font-semibold text-[14px] md:text-[16px] leading-[17px] md:leading-[20px] text-[#333333] pt-[12px]'>
            {title}
        </h3>
    </div>
  )
}

export default Stay