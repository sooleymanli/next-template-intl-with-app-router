import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Navigation from '../Navigation'
import LocaleSwitcher from '../LocaleSwitcher'
import { Phone } from 'lucide-react'
import { Button } from 'antd'
import ToggleButton from './ToggleButton'


export default function Header() {
    return (
        <header className='w-full border-b border-b-[#D9D9D9]'>

            <div className="container mx-auto px-4 h-[80px] flex justify-between items-center ">
                <Link href="/">
                    <Image src="/cht_logo.svg" alt="Logo" width={100} height={44.38} />
                </Link>

                <Navigation />

                <div className='flex items-center gap-3'>
                    <LocaleSwitcher />
                    <Button type='primary' size='large' shape='circle' icon={<Phone />} style={{ background: "rgba(35,35,35,0.15)", color: "#000" }}
                    >

                    </Button>
                </div>

                <ToggleButton />




            </div>
        </header>
    )
}