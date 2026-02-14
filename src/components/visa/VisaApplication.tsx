import { Button, Select } from 'antd'
import { useTranslations } from 'next-intl'
import React from 'react'


export default function VisaApplication() {
    const t = useTranslations()


    return (
        <section className='mt-6  py-10 bg-[url(/passport.png)] bg-no-repeat bg-[right] '>
            <div className='flex flex-col gap-6 container mx-auto px-4'>

         

            <h2>{t("Navigation.visa_services")}</h2>

            <div className=' w-full'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eligendi doloremque itaque repellendus quae, nostrum aut. Sequi repellendus fugit atque unde, quod ex vel perferendis ipsa inventore quibusdam tempore repudiandae accusamus sunt dolorem. Numquam tempora velit debitis consectetur, est, magnam voluptatem exercitationem ex quaerat dolore nam vero quos? Commodi, fuga.</p>

            </div>

            <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-4'>


                <Select
                    // defaultValue={locale}
                    // onChange={onValueChange}
                    // options={options}
                    placeholder={t("FiltersPlaceholders.citizenshipCountry")}
                    size="large"
                    style={{
                        height: 40,
                        borderRadius: 12,
                        backgroundColor: 'rgba(35, 35, 35, 0.15)'
                    }}
                    variant="borderless"
                />




                <Select
                    // defaultValue={locale}
                    // onChange={onValueChange}
                    // options={options}
                    placeholder={t("FiltersPlaceholders.residenceCountry")}
                    size="large"
                    style={{

                        height: 40,
                        borderRadius: 12,
                        backgroundColor: 'rgba(35, 35, 35, 0.15)'
                    }}
                    variant="borderless"
                />






                <Select
                    // defaultValue={locale}
                    // onChange={onValueChange}
                    // options={options}
                    placeholder={t("FiltersPlaceholders.travelCountry")}
                    size="large"
                    style={{
                        height: 40,
                        borderRadius: 12,
                        backgroundColor: 'rgba(35, 35, 35, 0.15)'
                    }}
                    variant="borderless"
                />






            </div>

            <div className='w-full flex justify-end'>
                <Button type='primary' color='red' block size='large' className='!bg-[red]' >{t("ButtonsValue.apply")}</Button>

            </div>


            </div>

        </section>
    )
}