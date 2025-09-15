'use client'
import { Button } from 'antd'
import { Hamburger, Menu } from 'lucide-react'
import React, { useState } from 'react'
import Navigation from '../Navigation'
import NavigationLink from '../NavigationLink'
import { useTranslations } from 'next-intl'
import { CloseOutlined } from '@ant-design/icons'

type Props = {}

export default function ToggleButton({ }: Props) {
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
                    <NavigationLink onClick={closeMenu} href="/">{t('home')}</NavigationLink>
                    <NavigationLink onClick={closeMenu} href="/tours">{t('tours')}</NavigationLink>
                    <NavigationLink onClick={closeMenu} href="/excursions">{t('excursions')}</NavigationLink>
                    <NavigationLink onClick={closeMenu} href="/visa-services">{t('visa_services')}</NavigationLink>
                    <NavigationLink onClick={closeMenu} href="/about">{t('about')}</NavigationLink>
                    <NavigationLink onClick={closeMenu} href="/blogs">{t('blogs')}</NavigationLink>
                    <NavigationLink onClick={closeMenu} href="/contact">{t('contact')}</NavigationLink>

                </div>
            }



        </div>
    )
}