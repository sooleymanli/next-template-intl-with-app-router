'use client'
import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import ProductItem from './ProductItem'
import { NextButton, PrevButton, usePrevNextButtons } from './slider/ArrowButtons'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import instance from '../../api'
import { SkeletonCard } from './Skeleton'

export default function ProductSlider() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start' })
    const [isLoading, setIsLoading] = React.useState(true);
    const t = useTranslations('Common');


    const [data, setData] = React.useState<any>([]);
    const locale = useLocale()

    const fetchData = async () => {
        try {
            const response = await instance(`tours?category_id=3&locale=${locale}`);
            setData(response.data.data);

        } catch (error) {
            console.error('Error fetching tour categories:', error);
            setData(null);
            return [];
        }
    }




    useEffect(() => {
        fetchData();
    }, [locale]);



    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)


    const getDayNightRange = (startDate: string, endDate: string) => {
        const parse = (dateStr: string) => {
            const [day, month, year] = dateStr.split('.').map(Number)
            return new Date(year, month - 1, day)
        }
        const start = parse(startDate)
        const end = parse(endDate)
        const diffMs = end.getTime() - start.getTime()
        const days = Math.max(1, Math.round(diffMs / (1000 * 60 * 60 * 24)))
        const nights = Math.max(0, days - 1)
        return `${days} ${t('day')} ${nights} ${t('night')}`
    }



    if (data === null) {
        return null
    }

    return (
        <section className="container mx-auto px-4 mt-12 mb-12 flex flex-col gap-6 " >

            <div className='w-full flex justify-between items-center'>
                <h2 className='text-xl'>{t('popular_tours')}</h2>


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
                    {!!data.length ? data.map((product:any) => (
                        <div
                            key={product.id}
                            className="
          embla__slide
          flex-[0_0_100%]
          sm:flex-[0_0_50%]
          lg:flex-[0_0_25%]
          2xl:flex-[0_0_calc(100%/4)]
          px-2
        "
                        >
                            <ProductItem
                                featuredImage={`https://admin.cht.az/storage/${product.featured_image}`}
                                productName={product.title}
                                dateRange={`${product.start_date} - ${product.end_date}`}
                                dayAndNigts={getDayNightRange(product.start_date, product.end_date)}
                                price={product.price}
                                path={`/tours/${product.slug}`}
                            />

                        </div>
                    )) : isLoading ?
                        <>
                            {[1, 2, 3, 4].map((index) => (
                                <div
                                    key={index}
                                    className="
              embla__slide
              flex-[0_0_100%]
              sm:flex-[0_0_50%]
              lg:flex-[0_0_25%]
              2xl:flex-[0_0_calc(100%/4)]
              px-2
            "
                                >
                                    <SkeletonCard />
                                </div>
                            ))}
                        </>
                        : null}



                </div>
            </div>
        </section>
    )
}
