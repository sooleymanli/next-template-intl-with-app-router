import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
    title: string,
    path: string
}

export default function TravelTypeItem({ title, path }: Props) {
    return (
      <div className="embla__slide flex-[0_0_auto]">
        <Link
        href={path}
        className="group cursor-pointer flex flex-col rounded-[8px] border border-[#CFCFCF] shadow-[1px_1px_5px_1px_rgba(186,186,186,0.25)] bg-[linear-gradient(180deg,rgba(0,50,97,0)_0%,#003261_100%)]"
      >
        <div className="w-[225px] h-[378px] overflow-hidden rounded-[8px] relative">
          <Image
            fill
            src="/travelType.png"
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
          <div className="absolute bottom-0 left-0 w-full h-1/2  bg-gradient-to-t from-[#6C2C2C] to-transparent flex justify-center items-end py-4" >
          
            <span className='text-white text-lg' >{title}</span>
          
          </div>
        </div>
      </Link>
      </div>
    )
}



