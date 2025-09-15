'use client'
import { Select } from 'antd'
import { useTranslations } from 'next-intl'
import React from 'react'

type Props = {}

export default function LeftFilters({ }: Props) {
    const t = useTranslations("FiltersPlaceholders");

    return (
        <div className='flex flex-col lg:flex-row gap-4'>

            <Select
                // defaultValue={locale}
                // onChange={onValueChange}
                // options={options}
                placeholder={t("excursionsType")}
                size="large"
                style={{
                    height: 40,
                    borderRadius: 12,
                    backgroundColor: 'rgba(35, 35, 35, 0.15)'
                }}
                variant="borderless"
            />




         

         

        </div>
    )
}