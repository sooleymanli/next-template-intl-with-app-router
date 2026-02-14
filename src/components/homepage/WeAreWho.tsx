import Image from 'next/image'
import React from 'react'
import instance from '../../../api';
import { getLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';



async function fetchData(locale: string) {
    try {
        const response = await instance(`about?locale=${locale}`);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching tour categories:', error);
        return null;
    }

}

export default async function WeAreWho() {
    const locale = await getLocale();
    const data = await fetchData(locale)
    const t = await getTranslations('Common');


    if (data === null) {
        return null
    }
    return (
        <div className='container mx-auto flex flex-col gap-6 px-4'>
            <h2 className='font-bold text-xl text-center'>{t('who_we_are')}</h2>
            <div className='w-full h-full  xl:h-[442px]   flex flex-col  xl:flex-row gap-6' >
                <div className='w-full xl:w-1/2 hidden xl:flex h-full  items-center  relative'>
                    <Image src={`https://admin.cht.az/storage/about/${data.image}`} alt={t('who_we_are')} fill className='object-cover object-[center]' />

                </div>

                <div className='w-full xl:w-1/2 flex flex-col items-start justify-between'>


                    <div className="flex flex-col gap-2 items-start">
                        <h3 className='text-[#5B1D1B] text-2xl font-bold'>{data?.title}</h3>
                        <p className='text-md  text-left
                        
                        font-montserrat font-medium text-[16px] leading-[20px] text-black
                        
                        '>{data?.content} </p>

                    </div>


                    <div className="w-full flex justify-between gap-4 items-center">
                        <div className="flex-1 h-[150px]  flex justify-center items-center gap-4 flex-col rounded-[12px] border-[2px] border-[#D84540] bg-[url(/we_are_who_1.png)] bg-no-repeat bg-[right_bottom] " style={{ backgroundSize: '50' }}>

                            <span className='text-2xl font-bold text-[red]'>{data.clients_count}+</span>
                            <span className='text-xs text-center'>
                                {t('clients_count')}</span>

                        </div>

                        <div className="flex-1 h-[150px]  flex justify-center items-center gap-4 flex-col rounded-[12px] border-[2px] border-[#D84540] bg-[url(/we_are_who_2.png)] bg-no-repeat bg-[right_bottom] " style={{ backgroundSize: '50%' }}>

                            <span className='text-2xl font-bold text-[red]'>{data.tours_count}+</span>
                            <span className='text-xs text-center'>{t('tours_count')}</span>

                        </div>



                        <div className="flex-1 h-[150px]  flex justify-center items-center gap-4 flex-col rounded-[12px] border-[2px] border-[#D84540] bg-[url(/we_are_who_3.png)] bg-no-repeat bg-[right_bottom] " style={{ backgroundSize: '50%' }}>

                            <span className='text-2xl font-bold text-[red]'>{data.countries_count}+</span>
                            <span className='text-xs text-center'>{t('countries_count')}</span>

                        </div>

                    </div>



                </div>



            </div>


        </div>
    )
}