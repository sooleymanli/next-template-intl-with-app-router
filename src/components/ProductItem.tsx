import { ArrowRightOutlined, CalendarOutlined } from '@ant-design/icons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {useTranslations} from 'next-intl';

type Props = {
    productName: string,
    dateRange: string,
    dayAndNigts?: string
    price: string,
    path: string,
    featuredImage: string
}

export default function ProductItem({ productName, dateRange, dayAndNigts = "", price, path, featuredImage }: Props) {
    const t = useTranslations('Common');
    return (
        <Link href={path} className="group cursor-pointer flex flex-col h-full rounded-[8px] border border-[#CFCFCF] shadow-[1px_1px_5px_1px_rgba(186,186,186,0.25)]"
        >
            <div className="w-full h-[260px] overflow-hidden rounded-t-[8px] relative">
                <Image
                    fill
                    src={featuredImage}
                    alt={productName}
                    className="w-full h-full  object-[center_0%] object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
            </div>

            <div className='description p-4 flex flex-col items-start gap-4 border-b-1 min-w-0'>
                <span className="font-bold text-lg text-left w-full min-w-0 truncate">
                    {productName}
                </span>




                <div className='w-full flex justify-between items-center  gap-4 text-[12px] text-[#606060]'>
                    <div className='date flex items-center gap-2'>
                        <CalendarOutlined />
                        <span>{dateRange}</span>

                    </div>


                    <span>{dayAndNigts}</span>
                </div>

            </div>

            <div className='footer w-full p-4 flex justify-between items-center'>
                <span className='text-[red] font-bold text-xl'>{price} $</span>
                <div className='flex items-center gap-2 ' >
                    <span className='text-[xs]'>
                        {t('more_details')}
                    </span>

                    <ArrowRightOutlined className='group-hover:translate-x-1 transition-all duration-300 ease-in-out' />

                </div>
            </div>

        </Link>
    )
}


