'use client'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  contry: any,
  path: string
}

export default function CountryItem({ contry, path }: Props) {
  const locale = useLocale()
  return (
    <Link
      href={path}
      className="group cursor-pointer flex flex-col rounded-[16px] border border-[#CFCFCF] shadow-[1px_1px_5px_1px_rgba(186,186,186,0.25)]"
    >
      <div className="w-[288px] h-[260px] overflow-hidden rounded-[8px] relative">
        <Image
          fill
          src={`https://admin.cht.az/storage/${contry.image}`}
          alt={contry.name[locale]}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 w-full h-1/2  bg-gradient-to-t from-[#6C2C2C] to-transparent flex justify-center items-end py-4" >

          <span className='text-white text-lg' >{contry.name[locale]}</span>

        </div>
      </div>
    </Link>
  )
}


