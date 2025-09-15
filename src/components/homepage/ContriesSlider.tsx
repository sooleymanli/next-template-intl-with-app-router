

'use client'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { NextButton, PrevButton, usePrevNextButtons } from '../slider/ArrowButtons'
import Link from 'next/link'
import CountryItem from './CountryItem'

export default function ContriesSlider() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start' })


    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <section className="container mx-auto px-4 mt-12 mb-12 flex flex-col gap-6">

            <div className='w-full flex justify-between items-center'>
                <h2 className='text-xl'>Populyar Kateqoriyalar</h2>


                <div className='flex items-center gap-4'>

                    <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />

                        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />

                    </div>

                    <Link href={"/"} className='h-10 bg-[#FBECEC] text-sm text-[#5B1D1B] border-transparent border-1 hover:border-[#5B1D1B]  rounded-[6px] flex justify-center items-center py-2 px-4' >Hamısı</Link>
                </div>

            </div>
            <div className="embla overflow-hidden" ref={emblaRef}>
                <div className="embla__container flex">
                    <div className="embla__slide flex-[0_0_auto]">

                        <CountryItem path="/" contry='Turkey' />

                    </div>

                    <div className="embla__slide flex-[0_0_auto]">

                        <CountryItem path="/" contry='Turkey' />

                    </div>


                    <div className="embla__slide flex-[0_0_auto]">

                        <CountryItem path="/" contry='Turkey' />

                    </div>

                    <div className="embla__slide flex-[0_0_auto]">

                        <CountryItem path="/" contry='Turkey' />

                    </div>


                    <div className="embla__slide flex-[0_0_auto]">

                        <CountryItem path="/" contry='Turkey' />

                    </div>

                    <div className="embla__slide flex-[0_0_auto]">

                        <CountryItem path="/" contry='Turkey' />

                    </div>


                    <div className="embla__slide flex-[0_0_auto]">

                        <CountryItem path="/" contry='Turkey' />

                    </div>

                    <div className="embla__slide flex-[0_0_auto]">

                        <CountryItem path="/" contry='Turkey' />

                    </div>


                    <div className="embla__slide flex-[0_0_auto]">

                        <CountryItem path="/" contry='Turkey' />

                    </div>

                    <div className="embla__slide flex-[0_0_auto]">

                        <CountryItem path="/" contry='Turkey' />

                    </div>


                </div>
            </div>
        </section>
    )
}
