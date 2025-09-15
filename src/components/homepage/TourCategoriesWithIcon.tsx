'use client'
import React from 'react'
import TourCategoryItemWithIcon from './TourCategoryItemWithIcon'
import useEmblaCarousel from 'embla-carousel-react'

export default function TourCategoriesWithIcon() {
    const [emblaRef] = useEmblaCarousel({ align: 'start' })

    return (
        <section className="container mx-auto px-4 mt-12">
            <div className="embla overflow-hidden" ref={emblaRef}>
                <div className="embla__container flex">
                    <div className="embla__slide flex-[0_0_auto]">
                        <TourCategoryItemWithIcon label='Məşhur turlar' path='/tours' />
                    </div>
                    <div className="embla__slide flex-[0_0_auto]">
                        <TourCategoryItemWithIcon label='Qrup turları' path='/tours' />
                    </div>
                    <div className="embla__slide flex-[0_0_auto]">
                        <TourCategoryItemWithIcon label='Ekzotik turlar' path='/tours' />
                    </div>
                    <div className="embla__slide flex-[0_0_auto]">
                        <TourCategoryItemWithIcon label='Xarici turlar' path='/tours' />
                    </div>
                    <div className="embla__slide flex-[0_0_auto]">
                        <TourCategoryItemWithIcon label='Avropa turları' path='/tours' />
                    </div>
                    <div className="embla__slide flex-[0_0_auto]">
                        <TourCategoryItemWithIcon label='Bal ayı turları' path='/tours' />
                    </div>

                    <div className="embla__slide flex-[0_0_auto]">
                        <TourCategoryItemWithIcon label='Yeni il turları' path='/tours' />
                    </div>

                    <div className="embla__slide flex-[0_0_auto]">
                        <TourCategoryItemWithIcon label='Yeni il turları' path='/tours' />
                    </div>
                </div>
            </div>
        </section>
    )
}
