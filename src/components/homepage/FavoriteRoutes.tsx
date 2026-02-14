'use client'
import useEmblaCarousel from 'embla-carousel-react'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import instance from '../../../api'
import { Skeleton } from 'antd'


export default function FavoriteRoutes() {
    const t = useTranslations('Common');
    const [data, setData] = React.useState<any[]>([]);
    const locale = useLocale()

    const [isLoading, setIsLoading] = React.useState(false);

    const fetchData = async () => {

        setIsLoading(true);
        try {
            const response = await instance(`cities?locale=${locale}&favorite_route=1`);
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
    }, [locale]);




    const [emblaRef] = useEmblaCarousel({ align: 'start' })


    if (!data.length && !isLoading) return null;

    return (
        <section className='container mx-auto px-4 mt-12 flex flex-col gap-6'>
            <div className='w-full flex justify-between items-center'>
                <h2 className='text-xl'>{t('favorite_routes')}</h2>
                <Link href={"/"} className='h-10 bg-[#FBECEC] text-sm text-[#5B1D1B] border-transparent border-1 hover:border-[#5B1D1B]  rounded-[6px] flex justify-center items-center py-2 px-4' >Hamısı</Link>

            </div>


            <div className='hidden xl:grid grid-cols-4 gap-4  '>

                {!!data.length && !isLoading ? data?.map(e => {
                    return (
                        <Link
                            href={"/"}
                            key={e.id}
                            className="group cursor-pointer flex flex-col rounded-[8px] border shadow-[1px_1px_5px_1px_rgba(186,186,186,0.25)]"
                        >
                            <div className=" h-[400px] overflow-hidden rounded-[8px] relative">
                                <Image
                                    fill
                                    src="/favorite_route.png"
                                    alt={e.name}
                                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                />
                                <div className="absolute bottom-0 left-0 w-full h-[74px]  bg-[rgba(0,0,0,0.5)] flex justify-between items-center p-4" >
                                    <span className='text-white text-lg' >{e.name}</span>
                                    <div className='flex items-center gap-4 bg-[#D84540] rounded-[4px] py-1 px-2 text-white'>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.07847 14.2448C8.7894 14.5155 8.40293 14.6668 8.00073 14.6668C7.59853 14.6668 7.21213 14.5155 6.923 14.2448C4.27535 11.7508 0.727174 8.96476 2.45751 4.91994C3.39309 2.73294 5.63889 1.3335 8.00073 1.3335C10.3626 1.3335 12.6084 2.73294 13.544 4.91994C15.2721 8.9597 11.7327 11.7594 9.07847 14.2448Z" stroke="white" strokeWidth="1.5" />
                                            <path d="M10.3333 7.33333C10.3333 8.622 9.28867 9.66667 8 9.66667C6.71134 9.66667 5.66667 8.622 5.66667 7.33333C5.66667 6.04467 6.71134 5 8 5C9.28867 5 10.3333 6.04467 10.3333 7.33333Z" stroke="white" strokeWidth="1.5" />
                                        </svg>

                                        <span>{e.country_name}</span>

                                    </div>
                                </div>


                            </div>
                        </Link>

                    )
                }) : isLoading ? Array.from({ length: 4 }).map((_, index) => <Skeleton.Avatar active size={400} shape="square" />
                ) : null}










            </div>



            <div className="block lg:hidden embla overflow-hidden" ref={emblaRef}>

                <div className="embla__container flex">


                    <div className="embla__slide flex-[0_0_auto]">

                        <Link
                            href={"/"}
                            className="group cursor-pointer flex flex-col rounded-[8px] border shadow-[1px_1px_5px_1px_rgba(186,186,186,0.25)]"
                        >
                            <div className="w-[288px]  h-[400px] overflow-hidden rounded-[8px] relative">
                                <Image
                                    fill
                                    src="/favorite_route.png"
                                    alt={"Route"}
                                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                />
                                <div className="absolute bottom-0 left-0 w-full h-[74px]  bg-[rgba(0,0,0,0.5)] flex justify-between items-center p-4" >
                                    <span className='text-white text-lg' >Roma Turları</span>
                                    <div className='flex items-center gap-4 bg-[#D84540] rounded-[4px] py-1 px-2 text-white'>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.07847 14.2448C8.7894 14.5155 8.40293 14.6668 8.00073 14.6668C7.59853 14.6668 7.21213 14.5155 6.923 14.2448C4.27535 11.7508 0.727174 8.96476 2.45751 4.91994C3.39309 2.73294 5.63889 1.3335 8.00073 1.3335C10.3626 1.3335 12.6084 2.73294 13.544 4.91994C15.2721 8.9597 11.7327 11.7594 9.07847 14.2448Z" stroke="white" strokeWidth="1.5" />
                                            <path d="M10.3333 7.33333C10.3333 8.622 9.28867 9.66667 8 9.66667C6.71134 9.66667 5.66667 8.622 5.66667 7.33333C5.66667 6.04467 6.71134 5 8 5C9.28867 5 10.3333 6.04467 10.3333 7.33333Z" stroke="white" strokeWidth="1.5" />
                                        </svg>

                                        <span>Italiya</span>

                                    </div>
                                </div>


                            </div>
                        </Link>




                    </div>

                    <div className="embla__slide flex-[0_0_auto]">

                        <Link
                            href={"/"}
                            className="group cursor-pointer flex flex-col rounded-[8px] border shadow-[1px_1px_5px_1px_rgba(186,186,186,0.25)]"
                        >
                            <div className="w-[288px]  h-[400px] overflow-hidden rounded-[8px] relative">
                                <Image
                                    fill
                                    src="/favorite_route.png"
                                    alt={"Route"}
                                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                />
                                <div className="absolute bottom-0 left-0 w-full h-[74px]  bg-[rgba(0,0,0,0.5)] flex justify-between items-center p-4" >
                                    <span className='text-white text-lg' >Roma Turları</span>
                                    <div className='flex items-center gap-4 bg-[#D84540] rounded-[4px] py-1 px-2 text-white'>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.07847 14.2448C8.7894 14.5155 8.40293 14.6668 8.00073 14.6668C7.59853 14.6668 7.21213 14.5155 6.923 14.2448C4.27535 11.7508 0.727174 8.96476 2.45751 4.91994C3.39309 2.73294 5.63889 1.3335 8.00073 1.3335C10.3626 1.3335 12.6084 2.73294 13.544 4.91994C15.2721 8.9597 11.7327 11.7594 9.07847 14.2448Z" stroke="white" strokeWidth="1.5" />
                                            <path d="M10.3333 7.33333C10.3333 8.622 9.28867 9.66667 8 9.66667C6.71134 9.66667 5.66667 8.622 5.66667 7.33333C5.66667 6.04467 6.71134 5 8 5C9.28867 5 10.3333 6.04467 10.3333 7.33333Z" stroke="white" strokeWidth="1.5" />
                                        </svg>

                                        <span>Italiya</span>

                                    </div>
                                </div>


                            </div>
                        </Link>




                    </div>
                    <div className="embla__slide flex-[0_0_auto]">
                        <Link
                            href={"/"}
                            className="group cursor-pointer flex flex-col rounded-[8px] border shadow-[1px_1px_5px_1px_rgba(186,186,186,0.25)]"
                        >
                            <div className="w-[288px]  h-[400px] overflow-hidden rounded-[8px] relative">
                                <Image
                                    fill
                                    src="/favorite_route.png"
                                    alt={"Route"}
                                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                />
                                <div className="absolute bottom-0 left-0 w-full h-[74px]  bg-[rgba(0,0,0,0.5)] flex justify-between items-center p-4" >
                                    <span className='text-white text-lg' >Roma Turları</span>
                                    <div className='flex items-center gap-4 bg-[#D84540] rounded-[4px] py-1 px-2 text-white'>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.07847 14.2448C8.7894 14.5155 8.40293 14.6668 8.00073 14.6668C7.59853 14.6668 7.21213 14.5155 6.923 14.2448C4.27535 11.7508 0.727174 8.96476 2.45751 4.91994C3.39309 2.73294 5.63889 1.3335 8.00073 1.3335C10.3626 1.3335 12.6084 2.73294 13.544 4.91994C15.2721 8.9597 11.7327 11.7594 9.07847 14.2448Z" stroke="white" strokeWidth="1.5" />
                                            <path d="M10.3333 7.33333C10.3333 8.622 9.28867 9.66667 8 9.66667C6.71134 9.66667 5.66667 8.622 5.66667 7.33333C5.66667 6.04467 6.71134 5 8 5C9.28867 5 10.3333 6.04467 10.3333 7.33333Z" stroke="white" strokeWidth="1.5" />
                                        </svg>

                                        <span>Italiya</span>

                                    </div>
                                </div>


                            </div>
                        </Link>
                    </div>
                    <div className="embla__slide flex-[0_0_auto]">

                        <Link
                            href={"/"}
                            className="group cursor-pointer flex flex-col rounded-[8px] border shadow-[1px_1px_5px_1px_rgba(186,186,186,0.25)]"
                        >
                            <div className="w-[288px]  h-[400px] overflow-hidden rounded-[8px] relative">
                                <Image
                                    fill
                                    src="/favorite_route.png"
                                    alt={"Route"}
                                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                />
                                <div className="absolute bottom-0 left-0 w-full h-[74px]  bg-[rgba(0,0,0,0.5)] flex justify-between items-center p-4" >
                                    <span className='text-white text-lg' >Roma Turları</span>
                                    <div className='flex items-center gap-4 bg-[#D84540] rounded-[4px] py-1 px-2 text-white'>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.07847 14.2448C8.7894 14.5155 8.40293 14.6668 8.00073 14.6668C7.59853 14.6668 7.21213 14.5155 6.923 14.2448C4.27535 11.7508 0.727174 8.96476 2.45751 4.91994C3.39309 2.73294 5.63889 1.3335 8.00073 1.3335C10.3626 1.3335 12.6084 2.73294 13.544 4.91994C15.2721 8.9597 11.7327 11.7594 9.07847 14.2448Z" stroke="white" strokeWidth="1.5" />
                                            <path d="M10.3333 7.33333C10.3333 8.622 9.28867 9.66667 8 9.66667C6.71134 9.66667 5.66667 8.622 5.66667 7.33333C5.66667 6.04467 6.71134 5 8 5C9.28867 5 10.3333 6.04467 10.3333 7.33333Z" stroke="white" strokeWidth="1.5" />
                                        </svg>

                                        <span>Italiya</span>

                                    </div>
                                </div>


                            </div>
                        </Link>

                    </div>
                    <div className="embla__slide flex-[0_0_auto]">

                        <Link
                            href={"/"}
                            className="group cursor-pointer flex flex-col rounded-[8px] border shadow-[1px_1px_5px_1px_rgba(186,186,186,0.25)]"
                        >
                            <div className="w-[288px]  h-[400px] overflow-hidden rounded-[8px] relative">
                                <Image
                                    fill
                                    src="/favorite_route.png"
                                    alt={"Route"}
                                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                />
                                <div className="absolute bottom-0 left-0 w-full h-[74px]  bg-[rgba(0,0,0,0.5)] flex justify-between items-center p-4" >
                                    <span className='text-white text-lg' >Roma Turları</span>
                                    <div className='flex items-center gap-4 bg-[#D84540] rounded-[4px] py-1 px-2 text-white'>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.07847 14.2448C8.7894 14.5155 8.40293 14.6668 8.00073 14.6668C7.59853 14.6668 7.21213 14.5155 6.923 14.2448C4.27535 11.7508 0.727174 8.96476 2.45751 4.91994C3.39309 2.73294 5.63889 1.3335 8.00073 1.3335C10.3626 1.3335 12.6084 2.73294 13.544 4.91994C15.2721 8.9597 11.7327 11.7594 9.07847 14.2448Z" stroke="white" strokeWidth="1.5" />
                                            <path d="M10.3333 7.33333C10.3333 8.622 9.28867 9.66667 8 9.66667C6.71134 9.66667 5.66667 8.622 5.66667 7.33333C5.66667 6.04467 6.71134 5 8 5C9.28867 5 10.3333 6.04467 10.3333 7.33333Z" stroke="white" strokeWidth="1.5" />
                                        </svg>

                                        <span>Italiya</span>

                                    </div>
                                </div>


                            </div>
                        </Link>




                    </div>
                    <div className="embla__slide flex-[0_0_auto]">

                        <Link
                            href={"/"}
                            className="group cursor-pointer flex flex-col rounded-[8px] border shadow-[1px_1px_5px_1px_rgba(186,186,186,0.25)]"
                        >
                            <div className="w-[288px]  h-[400px] overflow-hidden rounded-[8px] relative">
                                <Image
                                    fill
                                    src="/favorite_route.png"
                                    alt={"Route"}
                                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                />
                                <div className="absolute bottom-0 left-0 w-full h-[74px]  bg-[rgba(0,0,0,0.5)] flex justify-between items-center p-4" >
                                    <span className='text-white text-lg' >Roma Turları</span>
                                    <div className='flex items-center gap-4 bg-[#D84540] rounded-[4px] py-1 px-2 text-white'>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.07847 14.2448C8.7894 14.5155 8.40293 14.6668 8.00073 14.6668C7.59853 14.6668 7.21213 14.5155 6.923 14.2448C4.27535 11.7508 0.727174 8.96476 2.45751 4.91994C3.39309 2.73294 5.63889 1.3335 8.00073 1.3335C10.3626 1.3335 12.6084 2.73294 13.544 4.91994C15.2721 8.9597 11.7327 11.7594 9.07847 14.2448Z" stroke="white" strokeWidth="1.5" />
                                            <path d="M10.3333 7.33333C10.3333 8.622 9.28867 9.66667 8 9.66667C6.71134 9.66667 5.66667 8.622 5.66667 7.33333C5.66667 6.04467 6.71134 5 8 5C9.28867 5 10.3333 6.04467 10.3333 7.33333Z" stroke="white" strokeWidth="1.5" />
                                        </svg>

                                        <span>Italiya</span>

                                    </div>
                                </div>


                            </div>
                        </Link>




                    </div>
                    <div className="embla__slide flex-[0_0_auto]">

                        <Link
                            href={"/"}
                            className="group cursor-pointer flex flex-col rounded-[8px] border shadow-[1px_1px_5px_1px_rgba(186,186,186,0.25)]"
                        >
                            <div className="w-[288px]  h-[400px] overflow-hidden rounded-[8px] relative">
                                <Image
                                    fill
                                    src="/favorite_route.png"
                                    alt={"Route"}
                                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                />
                                <div className="absolute bottom-0 left-0 w-full h-[74px]  bg-[rgba(0,0,0,0.5)] flex justify-between items-center p-4" >
                                    <span className='text-white text-lg' >Roma Turları</span>
                                    <div className='flex items-center gap-4 bg-[#D84540] rounded-[4px] py-1 px-2 text-white'>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.07847 14.2448C8.7894 14.5155 8.40293 14.6668 8.00073 14.6668C7.59853 14.6668 7.21213 14.5155 6.923 14.2448C4.27535 11.7508 0.727174 8.96476 2.45751 4.91994C3.39309 2.73294 5.63889 1.3335 8.00073 1.3335C10.3626 1.3335 12.6084 2.73294 13.544 4.91994C15.2721 8.9597 11.7327 11.7594 9.07847 14.2448Z" stroke="white" strokeWidth="1.5" />
                                            <path d="M10.3333 7.33333C10.3333 8.622 9.28867 9.66667 8 9.66667C6.71134 9.66667 5.66667 8.622 5.66667 7.33333C5.66667 6.04467 6.71134 5 8 5C9.28867 5 10.3333 6.04467 10.3333 7.33333Z" stroke="white" strokeWidth="1.5" />
                                        </svg>

                                        <span>Italiya</span>

                                    </div>
                                </div>


                            </div>
                        </Link>




                    </div>
                    <div className="embla__slide flex-[0_0_auto]">

                        <Link
                            href={"/"}
                            className="group cursor-pointer flex flex-col rounded-[8px] border shadow-[1px_1px_5px_1px_rgba(186,186,186,0.25)]"
                        >
                            <div className="w-[288px]  h-[400px] overflow-hidden rounded-[8px] relative">
                                <Image
                                    fill
                                    src="/favorite_route.png"
                                    alt={"Route"}
                                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                />
                                <div className="absolute bottom-0 left-0 w-full h-[74px]  bg-[rgba(0,0,0,0.5)] flex justify-between items-center p-4" >
                                    <span className='text-white text-lg' >Roma Turları</span>
                                    <div className='flex items-center gap-4 bg-[#D84540] rounded-[4px] py-1 px-2 text-white'>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.07847 14.2448C8.7894 14.5155 8.40293 14.6668 8.00073 14.6668C7.59853 14.6668 7.21213 14.5155 6.923 14.2448C4.27535 11.7508 0.727174 8.96476 2.45751 4.91994C3.39309 2.73294 5.63889 1.3335 8.00073 1.3335C10.3626 1.3335 12.6084 2.73294 13.544 4.91994C15.2721 8.9597 11.7327 11.7594 9.07847 14.2448Z" stroke="white" strokeWidth="1.5" />
                                            <path d="M10.3333 7.33333C10.3333 8.622 9.28867 9.66667 8 9.66667C6.71134 9.66667 5.66667 8.622 5.66667 7.33333C5.66667 6.04467 6.71134 5 8 5C9.28867 5 10.3333 6.04467 10.3333 7.33333Z" stroke="white" strokeWidth="1.5" />
                                        </svg>

                                        <span>Italiya</span>

                                    </div>
                                </div>


                            </div>
                        </Link>




                    </div>
                    <div className="embla__slide flex-[0_0_auto]">

                        <Link
                            href={"/"}
                            className="group cursor-pointer flex flex-col rounded-[8px] border shadow-[1px_1px_5px_1px_rgba(186,186,186,0.25)]"
                        >
                            <div className="w-[288px]  h-[400px] overflow-hidden rounded-[8px] relative">
                                <Image
                                    fill
                                    src="/favorite_route.png"
                                    alt={"Route"}
                                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                />
                                <div className="absolute bottom-0 left-0 w-full h-[74px]  bg-[rgba(0,0,0,0.5)] flex justify-between items-center p-4" >
                                    <span className='text-white text-lg' >Roma Turları</span>
                                    <div className='flex items-center gap-4 bg-[#D84540] rounded-[4px] py-1 px-2 text-white'>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.07847 14.2448C8.7894 14.5155 8.40293 14.6668 8.00073 14.6668C7.59853 14.6668 7.21213 14.5155 6.923 14.2448C4.27535 11.7508 0.727174 8.96476 2.45751 4.91994C3.39309 2.73294 5.63889 1.3335 8.00073 1.3335C10.3626 1.3335 12.6084 2.73294 13.544 4.91994C15.2721 8.9597 11.7327 11.7594 9.07847 14.2448Z" stroke="white" strokeWidth="1.5" />
                                            <path d="M10.3333 7.33333C10.3333 8.622 9.28867 9.66667 8 9.66667C6.71134 9.66667 5.66667 8.622 5.66667 7.33333C5.66667 6.04467 6.71134 5 8 5C9.28867 5 10.3333 6.04467 10.3333 7.33333Z" stroke="white" strokeWidth="1.5" />
                                        </svg>

                                        <span>Italiya</span>

                                    </div>
                                </div>


                            </div>
                        </Link>




                    </div>
                    <div className="embla__slide flex-[0_0_auto]">

                        <Link
                            href={"/"}
                            className="group cursor-pointer flex flex-col rounded-[8px] border shadow-[1px_1px_5px_1px_rgba(186,186,186,0.25)]"
                        >
                            <div className="w-[288px]  h-[400px] overflow-hidden rounded-[8px] relative">
                                <Image
                                    fill
                                    src="/favorite_route.png"
                                    alt={"Route"}
                                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                />
                                <div className="absolute bottom-0 left-0 w-full h-[74px]  bg-[rgba(0,0,0,0.5)] flex justify-between items-center p-4" >
                                    <span className='text-white text-lg' >Roma Turları</span>
                                    <div className='flex items-center gap-4 bg-[#D84540] rounded-[4px] py-1 px-2 text-white'>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.07847 14.2448C8.7894 14.5155 8.40293 14.6668 8.00073 14.6668C7.59853 14.6668 7.21213 14.5155 6.923 14.2448C4.27535 11.7508 0.727174 8.96476 2.45751 4.91994C3.39309 2.73294 5.63889 1.3335 8.00073 1.3335C10.3626 1.3335 12.6084 2.73294 13.544 4.91994C15.2721 8.9597 11.7327 11.7594 9.07847 14.2448Z" stroke="white" strokeWidth="1.5" />
                                            <path d="M10.3333 7.33333C10.3333 8.622 9.28867 9.66667 8 9.66667C6.71134 9.66667 5.66667 8.622 5.66667 7.33333C5.66667 6.04467 6.71134 5 8 5C9.28867 5 10.3333 6.04467 10.3333 7.33333Z" stroke="white" strokeWidth="1.5" />
                                        </svg>

                                        <span>Italiya</span>

                                    </div>
                                </div>


                            </div>
                        </Link>




                    </div>


                </div>
            </div>



        </section >
    )
}


