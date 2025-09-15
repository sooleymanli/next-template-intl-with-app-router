import React from 'react'
import ProductItem from '../ProductItem'
import CountryItem from './CountryItem'

type Props = {}

export default function Countries({ }: Props) {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  gap-4'>
            <CountryItem path="/" contry='Turkey' />
            <CountryItem path="/" contry='Rusiya' />
            <CountryItem path="/" contry='Almaniya' />
            <CountryItem path="/" contry='Amerika' />
            <CountryItem path="/" contry='Turkey' />
            <CountryItem path="/" contry='Rusiya' />
            <CountryItem path="/" contry='Almaniya' />
            <CountryItem path="/" contry='Amerika' />
            <CountryItem path="/" contry='Turkey' />
            <CountryItem path="/" contry='Rusiya' />
            <CountryItem path="/" contry='Almaniya' />
            <CountryItem path="/" contry='Amerika' />
            <CountryItem path="/" contry='Turkey' />
            <CountryItem path="/" contry='Rusiya' />
            <CountryItem path="/" contry='Almaniya' />
            <CountryItem path="/" contry='Amerika' />
            <CountryItem path="/" contry='Turkey' />
            <CountryItem path="/" contry='Rusiya' />
            <CountryItem path="/" contry='Almaniya' />
            <CountryItem path="/" contry='Amerika' />
            <CountryItem path="/" contry='Turkey' />
            <CountryItem path="/" contry='Rusiya' />
            <CountryItem path="/" contry='Almaniya' />
            <CountryItem path="/" contry='Amerika' />
            <CountryItem path="/" contry='Turkey' />
            <CountryItem path="/" contry='Rusiya' />
            <CountryItem path="/" contry='Almaniya' />
            <CountryItem path="/" contry='Amerika' />
            <CountryItem path="/" contry='Turkey' />
            <CountryItem path="/" contry='Rusiya' />
            <CountryItem path="/" contry='Almaniya' />
            <CountryItem path="/" contry='Amerika' />
        </div>
    )
}