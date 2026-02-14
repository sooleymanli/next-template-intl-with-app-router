import { Collapse } from 'antd'
import { CollapseProps } from 'antd/lib'
import { useTranslations } from 'next-intl'
import React from 'react'

const faqItems: CollapseProps['items'] = [
    {
        key: '1',
        label: 'Sifarişin çatdırılma ünvanını və ya alıcının adını dəyişə bilərəmmi?',
        children: (
            <div>
                Sifariş Təfərrüatları səhifəsində göstərilən çatdırılma tarixi aralığında çat &quot;Yüküm haradadır?&quot; bölməsində sifarişinizin göndərmə mərhələlərini yoxlaya bilərsiniz. Linki izləyə bilərsiniz.
            </div>
        ),
    },
    {
        key: '2',
        label: 'Sifarişin çatdırılma ünvanını və ya alıcının adını dəyişə bilərəmmi?',
        children: (
            <div>
                Sifariş Təfərrüatları səhifəsində göstərilən çatdırılma tarixi aralığında çat &quot;Yüküm haradadır?&quot; bölməsində sifarişinizin göndərmə mərhələlərini yoxlaya bilərsiniz. Linki izləyə bilərsiniz.
            </div>
        ),
    },
]

export default function Faq() {
    const t = useTranslations()
    return (
        <div className="container mx-auto px-4 py-10 mt-12">
            <h2 className='text-2xl text-center'>{t("FAQ")}</h2>
            <Collapse defaultActiveKey={['1']} expandIconPosition="end" items={faqItems} />
        </div>
    )
}
