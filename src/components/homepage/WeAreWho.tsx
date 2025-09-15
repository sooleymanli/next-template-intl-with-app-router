import Image from 'next/image'
import React from 'react'

type Props = {}

export default function WeAreWho({ }: Props) {
    return (
        <div className='container mx-auto flex flex-col gap-6'>
            <h2 className='font-bold text-xl'>Biz kimik?</h2>
            <div className='w-full h-full  xl:h-[300px]  px-4 flex flex-col  xl:flex-row gap-6' >
                <div className='w-full xl:w-1/2 hidden xl:flex h-full  items-center  relative'>
                    <Image src={"/wearewho.png"} alt='Biz Kimik?' fill className='object-cover' />
                </div>

                <div className='w-full xl:w-1/2 flex flex-col items-start justify-between'>


                    <div className="flex flex-col gap-2 items-start">
                        <h3 className='text-[#5B1D1B] text-xl'>COMFORT HOLIDAY TRAVEL  🚀</h3>
                        <p className='text-lg font-semibold text-left'>Lorem İpsum Lorem İpsum Lorem İpsum Lorem İpsum Lorem İpsum Lorem İpsum Lorem İpsum Lorem İpsum Lorem İpsum </p>

                    </div>


                    <div className="w-full flex justify-between gap-4 items-center">
                        <div className="flex-1 h-[150px]  flex justify-center items-center gap-4 flex-col rounded-[12px] border-[2px] border-[#D84540] bg-[url(/we_are_who_1.png)] bg-no-repeat bg-[right_bottom] " style={{ backgroundSize: '50' }}>

                            <span className='text-2xl font-bold text-[red]'>10.000+</span>
                            <span className='text-xs'>İllik
                                müştəri sayımız</span>

                        </div>

                        <div className="flex-1 h-[150px]  flex justify-center items-center gap-4 flex-col rounded-[12px] border-[2px] border-[#D84540] bg-[url(/we_are_who_2.png)] bg-no-repeat bg-[right_bottom] " style={{ backgroundSize: '50%' }}>

                            <span className='text-2xl font-bold text-[red]'>9.000+</span>
                            <span className='text-xs'>Məmnun
                                müştərilərimiz</span>

                        </div>



                        <div className="flex-1 h-[150px]  flex justify-center items-center gap-4 flex-col rounded-[12px] border-[2px] border-[#D84540] bg-[url(/we_are_who_3.png)] bg-no-repeat bg-[right_bottom] " style={{ backgroundSize: '50%' }}>

                            <span className='text-2xl font-bold text-[red]'>90+</span>
                            <span className='text-xs'>Ölkə
                                sayımız</span>

                        </div>

                    </div>



                </div>



            </div>


        </div>
    )
}