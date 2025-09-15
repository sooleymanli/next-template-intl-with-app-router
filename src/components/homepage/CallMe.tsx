import { WhatsAppOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import Image from 'next/image'
import React from 'react'

type Props = {}

export default function CallMe({ }: Props) {
    return (

        <section className=" w-full  mt-12 mb-12 flex flex-col justify-end items-center gap-6 h-[329px] ">
            <div className=' text-lg'>Axtardığın turu tapmaqda sənə kömək edək</div>

            <div className='w-full  h-[250px] bg-[linear-gradient(90deg,#C1D1FE_0%,#EC3237_100%)] shadow-[1px_1px_5px_rgba(184,184,184,0.25)]'>
                <div className='container w-full h-full mx-auto px-4 relative flex justify-center items-center '>

                    <Image
                        src="/woman.png"
                        alt={"CallCenter"}
                        width={500}
                        height={300}
                        className='bottom-0 left-0 absolute hidden xl:flex '
                    />
                    <div className='flex  flex-col justify-center items-center gap-6'>
            <span className='text-white text-xl '>Menecer ilə əlaqə saxla, arzuladığın SƏYAHƏTİ reallaşdır</span>
            <Button style={{fontWeight:"bold",color:"red"}} icon={<WhatsAppOutlined style={{color:"green"}} />}  size='large' type='default'>Danışmağa başla</Button>

                    </div>
 
                    <Image
                        src="/speaker.png"
                        alt={"Speaker"}
                        width={257}
                        height={257}
                        className='bottom-0 !right-0 absolute'
                    />

                </div>


            </div>


        </section>
    )
}

