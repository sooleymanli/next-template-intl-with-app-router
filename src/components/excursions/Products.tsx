import React from 'react'
import ProductItem from '../ProductItem'

type Props = {}

export default function Products({ }: Props) {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  gap-4'>
            <ProductItem productName={"Ekskursiya başlığı"} dateRange={"01.12.2024 - 08.12.2024"}  price={"500"} path='/#' />
            <ProductItem productName={"Ekskursiya başlığı"} dateRange={"01.12.2024 - 08.12.2024"}  price={"500"} path='/#' />
            <ProductItem productName={"Ekskursiya başlığı"} dateRange={"01.12.2024 - 08.12.2024"}  price={"500"} path='/#' />
            <ProductItem productName={"Ekskursiya başlığı"} dateRange={"01.12.2024 - 08.12.2024"}  price={"500"} path='/#' />
            <ProductItem productName={"Ekskursiya başlığı"} dateRange={"01.12.2024 - 08.12.2024"}  price={"500"} path='/#' />
            <ProductItem productName={"Ekskursiya başlığı"} dateRange={"01.12.2024 - 08.12.2024"}  price={"500"} path='/#' />
            <ProductItem productName={"Ekskursiya başlığı"} dateRange={"01.12.2024 - 08.12.2024"}  price={"500"} path='/#' />
            <ProductItem productName={"Ekskursiya başlığı"} dateRange={"01.12.2024 - 08.12.2024"}  price={"500"} path='/#' />
            <ProductItem productName={"Ekskursiya başlığı"} dateRange={"01.12.2024 - 08.12.2024"}  price={"500"} path='/#' />
            <ProductItem productName={"Ekskursiya başlığı"} dateRange={"01.12.2024 - 08.12.2024"}  price={"500"} path='/#' />
            <ProductItem productName={"Ekskursiya başlığı"} dateRange={"01.12.2024 - 08.12.2024"}  price={"500"} path='/#' />
            <ProductItem productName={"Ekskursiya başlığı"} dateRange={"01.12.2024 - 08.12.2024"}  price={"500"} path='/#' />
           
        </div>
    )
}