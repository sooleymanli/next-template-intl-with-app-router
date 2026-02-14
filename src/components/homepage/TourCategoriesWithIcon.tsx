'use client'
import React, { use, useEffect } from 'react'
import TourCategoryItemWithIcon from './TourCategoryItemWithIcon'
import useEmblaCarousel from 'embla-carousel-react'
import instance from '../../../api'
import { useLocale } from 'next-intl'




export default function TourCategoriesWithIcon() {
    const [emblaRef] = useEmblaCarousel({ align: 'start' })
    const [data,setData] = React.useState<any[]>([]);
    const locale =useLocale()

    const fetchData = async () => {
        try {
            const response = await instance(`categories?locale=${locale}`);
            setData(response.data.data);
            
        } catch (error) {
            console.error('Error fetching tour categories:', error);
            return [];
        }
    }


    useEffect(() => {
        fetchData();
    }, [locale]);

    return (
        <section className="container mx-auto px-4 mt-12">
            <div className="embla overflow-hidden" ref={emblaRef}>
                <div className="embla__container flex">
                    {!!data.length && data?.map((category) => (
                        <div className="embla__slide flex-[0_0_auto]" key={category.id}>
                            <TourCategoryItemWithIcon label={category.name} path={`/tours?category=${category.id}`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
