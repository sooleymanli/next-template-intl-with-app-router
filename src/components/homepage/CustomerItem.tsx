import Image from 'next/image'
import React from 'react'

type Props = {
    fullName: string,
    comment: string
}

export default function CustomerItem({
    fullName,
    comment
}: Props) {
    return (
        <div
            className="group w-full cursor-pointer flex flex-col rounded-[8px]  border-[#D84540] border-[2px] shadow-[1px_1px_5px_1px_rgba(186,186,186,0.25)]"
        >
            <div className="w-full h-[370px] overflow-hidden rounded-[6px] relative">
                <Image
                    fill
                    src="/customer.png"
                    alt={'Customer alT'}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 rounded-[6px]"
                />
                <div className="absolute bottom-0 left-0 w-full min-h-1/4  bg-white flex justify-start items-start p-4  flex-col gap-1" >
                    <span className='text-lg'>{fullName}</span>
                    <span className='text-xs text-left text-[#606060]' >{comment}</span>

                </div>
            </div>
        </div>
    )
}