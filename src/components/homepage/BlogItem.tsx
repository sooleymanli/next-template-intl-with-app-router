import { ArrowRightOutlined } from '@ant-design/icons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
    blogName: string,
    path: string
    description:string
    date:string
}

export default function BlogItem({ description, blogName, path,date }: Props) {
    return (
        <Link href={path} className='group cursor-pointer flex flex-col rounded-[8px] border border-[#CFCFCF] shadow-[1px_1px_5px_1px_rgba(186,186,186,0.25)]'>
            <div className="w-full h-[260px] overflow-hidden rounded-t-[8px] relative">
                <Image
                    fill
                    src="/product.png"
                    
                    alt={blogName}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
            </div>

            <div className='description p-4 flex flex-col items-start gap-4 border-b-1'>
                <span className='font-bold text-lg'>{blogName}</span>



                <div className='w-full flex justify-between items-center  text-left text-sm text-[#606060]'>
                  {description}
                </div>

            </div>

            <div className='footer w-full p-4 flex justify-between items-center'>
                <span className='text-[12px]'>{date}</span>
                <div className='flex items-center gap-2 ' >
                    <span className='text-[12px]'>
                        Daha Ətraflı
                    </span>

                    <ArrowRightOutlined className='group-hover:translate-x-1 transition-all duration-300 ease-in-out' />

                </div>
            </div>

        </Link>
    )
}


