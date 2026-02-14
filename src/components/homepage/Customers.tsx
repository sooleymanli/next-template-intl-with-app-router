'use client'
import React from 'react'
import { NextButton, PrevButton, usePrevNextButtons } from '../slider/ArrowButtons'
import CustomerItem from './CustomerItem'
import useEmblaCarousel from 'embla-carousel-react'


export default function Customers() {

    const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start' })


    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)


    return (
        <section className="py-16 mt-12 mb-12  bg-[#FFF4F3] bg-[url(/customer_bg.png)] bg-no-repeat bg-[right_top]  ">
            <div className='container mx-auto px-4 flex flex-col gap-6 '>


                <div className='w-full flex justify-between items-center'>
                    <h2 className='text-xl'>Müştərilərimiz bizim haqqımızda nə deyir?</h2>


                    <div className='flex items-center gap-4'>

                        <div className="embla__buttons">
                            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />

                            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />

                        </div>

                    </div>

                </div>
                <div className="embla overflow-hidden" ref={emblaRef}>
                    <div className="embla__container flex lg:!grid md:!grid-cols-3 xl:!grid-cols-3 gap-4">
                        <div className="embla__slide flex-[0_0_auto] w-full  ">
                            <CustomerItem fullName="Şəhriyar Qurbanzadə" comment="Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum..." />
                        </div>

                        <div className="embla__slide flex-[0_0_auto]  w-full  ">
                            <CustomerItem fullName="Şəhriyar Qurbanzadə" comment="Lorem Ipsum..Lorem Ipsum...Lorem Ipsum...Lorem Ipsum...Lorem Ipsum...Lorem Ipsum...." />
                        </div>

                        <div className="embla__slide flex-[0_0_auto]  w-full  ">
                            <CustomerItem fullName="Şəhriyar Qurbanzadə" comment="Lorem Ipsum.Lorem Ipsum...Lorem Ipsum....." />
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}