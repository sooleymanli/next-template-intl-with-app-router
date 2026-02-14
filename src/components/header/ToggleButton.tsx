'use client'
import { Button } from 'antd'
import { Menu, Phone } from 'lucide-react'
import React, { useState } from 'react'
import NavigationLink from '../NavigationLink'
import { useTranslations } from 'next-intl'
import { CloseOutlined } from '@ant-design/icons'
import LocaleSwitcher from '../LocaleSwitcher'


export default function ToggleButton() {
    const [visible, setVisible] = useState(false)
    const t = useTranslations('Navigation');

    const closeMenu = () => {
        setVisible(false)
    }

    return (
        <div className='flex lg:hidden'>
            <Button size='large' icon={<Menu />} onClick={() => setVisible(prev => !prev)} />
            {
                visible && <div className='w-full h-[100vh] flex  flex-col  justify-center items-center lg:hidden fixed left-0 top-0 bg-white  z-40'>
                    <div className='fixed right-6 top-6'>
                        <Button icon={<CloseOutlined />} onClick={() => setVisible(prev => !prev)} />
                    </div>


                    <div className='flex lg:hidden items-center gap-3  fixed left-6 top-6 '>
                        <LocaleSwitcher />
                        <Button type='primary' size='large' shape='circle' icon={<Phone />} style={{ background: "rgba(35,35,35,0.15)", color: "#000" }} />
                    </div>



                    <NavigationLink onClick={closeMenu} href="/">{t('home')}</NavigationLink>
                    <NavigationLink onClick={closeMenu} href="/tours">{t('tours')}</NavigationLink>
                    <NavigationLink onClick={closeMenu} href="/excursions">{t('excursions')}</NavigationLink>
                    <NavigationLink onClick={closeMenu} href="/visa-services">{t('visa_services')}</NavigationLink>
                    {/* <NavigationLink onClick={closeMenu} href="/about">{t('about')}</NavigationLink> */}
                    <NavigationLink onClick={closeMenu} href="/blogs">{t('blogs')}</NavigationLink>
                    {/* <NavigationLink onClick={closeMenu} href="/contact">{t('contact')}</NavigationLink> */}

                </div>
            }



        </div>
    )
}