'use client'
import useEmblaCarousel from 'embla-carousel-react'
import React from 'react'
import { NextButton, PrevButton, usePrevNextButtons } from '../slider/ArrowButtons'
import BlogItem from './BlogItem'
import Link from 'next/link'

type Props = {}

export default function Blogs({ }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start' })


  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="container mx-auto px-4 mt-12 mb-12 flex flex-col gap-6 " >

      <div className='w-full flex justify-between items-center'>
        <h2 className='text-xl'>Bloqlarımız</h2>


        <div className='flex items-center gap-4'>

          <div className="embla__buttons flex lg:!hidden">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>
          <Link href={"/"} className='h-10 bg-[#FBECEC] flex lg:!hidden text-sm text-[#5B1D1B] border-transparent border-1 hover:border-[#5B1D1B]  rounded-[6px] flex justify-center items-center py-2 px-4'>Hamısı</Link>
        </div>

      </div>


      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex lg:!grid md:!grid-cols-3 xl:!grid-cols-3 gap-4">
          <div className="embla__slide flex-[0_0_auto] w-full  ">
            <BlogItem blogName={"İtaliya bloqu"} date={"11.01.2025"} description='Lorem İpsum Lorem İpsum Lorem İpsum Lorem İpsum Lorem İpsum Lorem İpsum Lorem İpsum Lorem İpsum Lorem' path='/#' />
          </div>

          <div className="embla__slide flex-[0_0_auto]  w-full  ">
            <BlogItem blogName={"İtaliya bloqu"} date={"11.01.2025"} description='Lorem İpsum Lorem İpsum Lorem İpsum Lorem İpsum Lorem İpsum Lorem İpsum Lorem İpsum Lorem İpsum Lorem' path='/#' />
          </div>

          <div className="embla__slide flex-[0_0_auto]  w-full  ">
            <BlogItem blogName={"İtaliya bloqu"} date={"11.01.2025"} description='Lorem İpsum Lorem İpsum Lorem İpsum Lorem İpsum Lorem İpsum Lorem İpsum Lorem İpsum Lorem İpsum Lorem' path='/#' />
          </div>

        </div>
      </div>




    </section>
  )
}