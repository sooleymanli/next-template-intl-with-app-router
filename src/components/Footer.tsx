import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export default function Footer() {
    return (
        <footer className=' w-full bg-[#1F214F] pt-10 pb-5' style={{
            backgroundImage: `
              url('/footer_bg_left_top.png'),
              url('/footer_bg_center.png'),
              url('/footer_bg_right_bottom.png')
            `,
            backgroundPosition: 'top left, center, bottom right',
            backgroundRepeat: 'no-repeat, no-repeat, no-repeat',
            backgroundSize: 'auto, auto, auto'
        }}>
            <div className='container mx-auto px-4 flex flex-col gap-[100px]'>
                <div className='grid  justify-between grid-cols-2 lg:grid-cols-4 gap-y-10' >

                    <div className='flex flex-col gap-3 '>
                        <span className='text-[#C7C8EA] text-2xl font-bold mb-2'>Kateqoriyalar</span>
                        <Link href={"/"} className='text-md text-white hover:underline' >Meshur turlar</Link>
                        <Link href={"/"} className='text-md text-white hover:underline' >Qrup turları</Link>
                        <Link href={"/"} className='text-md text-white hover:underline' >Ekzotik turlar</Link>
                        <Link href={"/"} className='text-md text-white hover:underline' >Xarici turlar</Link>

                    </div>


                    <div className='flex flex-col gap-3 '>
                        <span className='text-[#C7C8EA] text-2xl font-bold mb-2'>Xidmətlərimiz</span>
                        <Link href={"/"} className='text-md text-white hover:underline' >Turlar</Link>
                        <Link href={"/"} className='text-md text-white hover:underline' >Ekskursiyalar</Link>
                        <Link href={"/"} className='text-md text-white hover:underline' >Viza dəstəyi</Link>

                    </div>



                    <div className='flex flex-col gap-3 '>
                        <span className='text-[#C7C8EA] text-2xl font-bold mb-2'>Fəaliyyətlərimiz</span>
                        <Link href={"/"} className='text-md text-white hover:underline' >Xəbərlər</Link>
                        <Link href={"/"} className='text-md text-white hover:underline' >Əlaqə</Link>

                    </div>

                    <div className='flex flex-col gap-3 '>
                        <span className='text-[#C7C8EA] text-2xl font-bold mb-2'>Qaydalar</span>
                        <Link href={"/"} className='text-md text-white hover:underline' >FAQ</Link>
                        <Link href={"/"} className='text-md text-white hover:underline' >Məxfilik siyasəti</Link>

                    </div>

                </div>

                <div className='flex justify-between items-center w-full'>
                    <div className='flex items-center gap-10'>
                        <Image src="/cht_logo.svg" alt="Logo" width={100} height={44.38} />
                        <div className='socials flex gap-2 items-center'>

                            <Link href="/" target='_blank'>

                                <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" className='group'>
                                    <rect x="0.75" y="0.75" width="44.5" height="44.5" rx="22.25" className='group-hover:stroke-[#ED1845] transition-colors duration-300' stroke="#C7C8EA" strokeWidth="1.5" />
                                    <path d="M28.8333 11.333H25.3333C23.7862 11.333 22.3025 11.9476 21.2085 13.0416C20.1146 14.1355 19.5 15.6192 19.5 17.1663V20.6663H16V25.333H19.5V34.6663H24.1667V25.333H27.6667L28.8333 20.6663H24.1667V17.1663C24.1667 16.8569 24.2896 16.5602 24.5084 16.3414C24.7272 16.1226 25.0239 15.9997 25.3333 15.9997H28.8333V11.333Z" className='group-hover:stroke-[#ED1845] transition-colors duration-300' stroke="#C7C8EA" strokeWidth="1.77" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            </Link>



                            <Link href="/" target='_blank'>
                                <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" className='group'>
                                    <rect x="0.75" y="0.75" width="44.5" height="44.5" rx="22.25" className='group-hover:stroke-[#ED1845] transition-colors duration-300' stroke="#C7C8EA" strokeWidth="1.5" />
                                    <path d="M23 27.6667V28.5521V27.6667ZM27.6667 23H28.5521H27.6667ZM23 18.3333V17.4479V18.3333ZM18.3333 23H17.4479H18.3333ZM18.3333 12.5V11.6146V12.5ZM28.7615 15.9989C28.4326 16.3607 28.4592 16.9207 28.8211 17.2496C29.1829 17.5786 29.7429 17.5519 30.0718 17.1901L28.7615 15.9989ZM30.083 17.1778C30.412 16.8159 30.3853 16.256 30.0235 15.927C29.6616 15.5981 29.1017 15.6247 28.7727 15.9866L30.083 17.1778ZM23 28.5521C24.4725 28.5521 25.8847 27.9671 26.9259 26.9259L25.6737 25.6737C24.9646 26.3829 24.0029 26.7812 23 26.7812V28.5521ZM26.9259 26.9259C27.9671 25.8847 28.5521 24.4725 28.5521 23H26.7812C26.7812 24.0029 26.3829 24.9646 25.6737 25.6737L26.9259 26.9259ZM28.5521 23C28.5521 21.5275 27.9671 20.1153 26.9259 19.0741L25.6737 20.3263C26.3829 21.0354 26.7812 21.9971 26.7812 23H28.5521ZM26.9259 19.0741C25.8847 18.0329 24.4725 17.4479 23 17.4479V19.2188C24.0029 19.2188 24.9646 19.6171 25.6737 20.3263L26.9259 19.0741ZM23 17.4479C21.5275 17.4479 20.1153 18.0329 19.0741 19.0741L20.3263 20.3263C21.0354 19.6171 21.9971 19.2188 23 19.2188V17.4479ZM19.0741 19.0741C18.0329 20.1153 17.4479 21.5275 17.4479 23H19.2188C19.2188 21.9971 19.6171 21.0354 20.3263 20.3263L19.0741 19.0741ZM17.4479 23C17.4479 24.4725 18.0329 25.8847 19.0741 26.9259L20.3263 25.6737C19.6171 24.9646 19.2188 24.0029 19.2188 23H17.4479ZM19.0741 26.9259C20.1153 27.9671 21.5275 28.5521 23 28.5521V26.7812C21.9971 26.7812 21.0354 26.3829 20.3263 25.6737L19.0741 26.9259ZM13.3854 27.6667V18.3333H11.6146V27.6667H13.3854ZM13.3854 18.3333C13.3854 17.0211 13.9067 15.7625 14.8346 14.8346L13.5825 13.5825C12.3224 14.8425 11.6146 16.5514 11.6146 18.3333H13.3854ZM14.8346 14.8346C15.7625 13.9067 17.0211 13.3854 18.3333 13.3854V11.6146C16.5514 11.6146 14.8425 12.3224 13.5825 13.5825L14.8346 14.8346ZM18.3333 13.3854H27.6667V11.6146H18.3333V13.3854ZM27.6667 13.3854C28.9789 13.3854 30.2375 13.9067 31.1654 14.8346L32.4175 13.5825C31.1575 12.3224 29.4486 11.6146 27.6667 11.6146V13.3854ZM31.1654 14.8346C32.0933 15.7625 32.6146 17.0211 32.6146 18.3333H34.3854C34.3854 16.5514 33.6775 14.8425 32.4175 13.5825L31.1654 14.8346ZM32.6146 18.3333V27.6667H34.3854V18.3333H32.6146ZM32.6146 27.6667C32.6146 28.9789 32.0933 30.2375 31.1654 31.1654L32.4175 32.4175C33.6775 31.1575 34.3854 29.4486 34.3854 27.6667H32.6146ZM31.1654 31.1654C30.2375 32.0933 28.9789 32.6146 27.6667 32.6146V34.3854C29.4486 34.3854 31.1575 33.6775 32.4175 32.4175L31.1654 31.1654ZM27.6667 32.6146H18.3333V34.3854H27.6667V32.6146ZM18.3333 32.6146C17.0211 32.6146 15.7625 32.0933 14.8346 31.1654L13.5825 32.4175C14.8425 33.6775 16.5514 34.3854 18.3333 34.3854V32.6146ZM14.8346 31.1654C13.9067 30.2375 13.3854 28.9789 13.3854 27.6667H11.6146C11.6146 29.4486 12.3224 31.1575 13.5825 32.4175L14.8346 31.1654ZM30.0718 17.1901L30.083 17.1778L28.7727 15.9866L28.7615 15.9989L30.0718 17.1901Z" className='group-hover:fill-[#ED1845] transition-colors duration-300' fill="#C7C8EA" />
                                </svg>
                            </Link>



                            <Link href="/" target='_blank'>
                                <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" className='group'>
                                    <rect x="0.75" y="0.75" width="44.5" height="44.5" rx="22.25" className='group-hover:stroke-[#ED1845] transition-colors duration-300' stroke="#C7C8EA" strokeWidth="1.5" />
                                    <path d="M27.6667 18.333C29.5232 18.333 31.3037 19.0705 32.6164 20.3833C33.9292 21.696 34.6667 23.4765 34.6667 25.333V33.4997H30V25.333C30 24.7142 29.7542 24.1207 29.3166 23.6831C28.879 23.2455 28.2855 22.9997 27.6667 22.9997C27.0478 22.9997 26.4543 23.2455 26.0168 23.6831C25.5792 24.1207 25.3333 24.7142 25.3333 25.333V33.4997H20.6667V25.333C20.6667 23.4765 21.4042 21.696 22.7169 20.3833C24.0297 19.0705 25.8102 18.333 27.6667 18.333Z" className='group-hover:stroke-[#ED1845] transition-colors duration-300' stroke="#C7C8EA" strokeWidth="1.77" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M16 19.4997H11.3333V33.4997H16V19.4997Z" className='group-hover:stroke-[#ED1845] transition-colors duration-300' stroke="#C7C8EA" strokeWidth="1.77" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M13.6667 15.9997C14.9553 15.9997 16 14.955 16 13.6663C16 12.3777 14.9553 11.333 13.6667 11.333C12.378 11.333 11.3333 12.3777 11.3333 13.6663C11.3333 14.955 12.378 15.9997 13.6667 15.9997Z" className='group-hover:stroke-[#ED1845] transition-colors duration-300' stroke="#C7C8EA" strokeWidth="1.77" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            </Link>


                            <Link href="/" target='_blank'>
                                <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" className='group'>
                                    <rect x="0.75" y="0.75" width="44.5" height="44.5" rx="22.25" className='group-hover:stroke-[#ED1845] transition-colors duration-300' stroke="#C7C8EA" strokeWidth="1.5" />
                                    <path d="M33.5 14.833L11.3333 23.583L19.5 24.7497M33.5 14.833L30.5833 32.333L19.5 24.7497M33.5 14.833L19.5 24.7497M19.5 24.7497V31.1663L23.2905 27.3432" stroke="#C7C8EA" className='group-hover:stroke-[#ED1845] transition-colors duration-300' strokeWidth="1.77" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            </Link>





                        </div>




                    </div>




                </div>


            </div>

        </footer>
    )
}

