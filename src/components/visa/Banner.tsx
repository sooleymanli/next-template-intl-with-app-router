import { useTranslations } from 'next-intl'
import React from 'react'


export default function Banner() {
    const t = useTranslations()
    return (
        <div className='w-full h-[200px] bg-gradient-to-r from-[#BC302B] to-[rgba(188,48,43,0)] rounded-[12px] flex items-center px-6'>

            <div className='flex flex-col '>
                <h2 className='text-2xl text-white'>{t("Navigation.visa_services")}</h2>
                <p className='text-white'>Biz ən yaxşı viza dəstəyi göstəririk. Biz ən yaxşı viza dəstəyi göstəririk. </p>
            </div>


        </div>
    )
}


