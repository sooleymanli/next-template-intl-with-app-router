import { Select } from 'antd'
import { useTranslations } from 'next-intl'
import React from 'react'


export default function RightFilters() {
    const t = useTranslations("FiltersPlaceholders")
    return (
        <Select
            // defaultValue={locale}
            // onChange={onValueChange}
            // options={options}
            placeholder={t("filter")}
            size="large"
            
            style={{
                height: 40,
                borderRadius: 12,
                backgroundColor: 'rgba(35, 35, 35, 0.15)'
            }}
            variant="borderless"
        />

    )
}