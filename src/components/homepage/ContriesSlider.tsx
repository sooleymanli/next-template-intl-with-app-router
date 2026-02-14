

'use client'
import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { NextButton, PrevButton, usePrevNextButtons } from '../slider/ArrowButtons'
import Link from 'next/link'
import CountryItem from './CountryItem'
import { useLocale, useTranslations } from 'next-intl'
import instance from '../../../api'
import { Skeleton } from 'antd'

export default function ContriesSlider() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start' })
    const [data, setData] = React.useState<any[]>([]);
    const t = useTranslations('Common');
    const [isLoading, setIsLoading] = React.useState(false);

    const fetchData = async () => {

        setIsLoading(true);
        try {
            const response = await instance(`countries`);
            setData(response.data.data);

        } catch (error) {
            console.error('Error fetching tour categories:', error);
            setData([]);
        } finally {
            setIsLoading(false);
        }
    }




    useEffect(() => {
        fetchData();
    }, []);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    if(data.length === 0 && !isLoading) return null;



    return (
        <section className="container mx-auto px-4 mt-12 mb-12 flex flex-col gap-6">

            <div className='w-full flex justify-between items-center'>
                <h2 className='text-xl'>{t("countries")}</h2>


                <div className='flex items-center gap-4'>

                    <div className="embla__buttons">
                        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />

                        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />

                    </div>

                    <Link href={"/"} className='h-10 bg-[#FBECEC] text-sm text-[#5B1D1B] border-transparent border-1 hover:border-[#5B1D1B]  rounded-[6px] flex justify-center items-center py-2 px-4' >{t("all")}</Link>
                </div>

            </div>
            <div className="embla overflow-hidden" ref={emblaRef}>
                <div className="embla__container flex">

                    {!!data.length && !isLoading ? data?.map((country => (
                        <div className="embla__slide flex-[0_0_auto]" key={country.id}>

                            <CountryItem path={`/tours?country_id=${country.id}`} contry={country} />


                        </div>

                    ))):isLoading ? Array.from({ length: 5 }).map((_, index) => (
                        <div className="embla__slide flex-[0_0_auto]" key={index}>
                            <Skeleton.Avatar active size={288} shape="square"  />
                        </div>
                    )):null}

                </div>
            </div>
        </section>
    )
}
