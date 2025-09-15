import { PlusCircleOutlined } from '@ant-design/icons'
import { Collapse } from 'antd'
import { CollapseProps } from 'antd/lib'
import { useTranslations } from 'next-intl'
import React from 'react'

type Props = {}

const faqItems: CollapseProps['items'] = [
    {
        key: '1',
        label: 'Sifarişin çatdırılma ünvanını və ya alıcının adını dəyişə bilərəmmi?',
        children: (
            <div>
                • Aldığınız məhsullar Hesabım &rarr; Sifarişlərim &rarr; Sifariş Təfərrüatları səhifəsində göstərilən çatdırılma tarixi aralığında çatdırılacaq.<br />
                • Əgər məhsulda "Sürətli Çatdırılma" etiketi varsa, sifarişiniz ən geci növbəti iş günü göndəriləcək. Əgər "Bugün Göndərilir" etiketi varsa, sifarişiniz həmin gün göndəriləcək.<br />
                • Sifariş çatdırıldıqda, yük şirkəti tərəfindən SMS vasitəsilə sizə məlumat veriləcək.<br />
                • Sifarişiniz göndərildikdən sonra Hesabım &rarr; Sifarişlərim &rarr; Sifariş Təfərrüatları səhifəsində "Yüküm haradadır?" bölməsində sifarişinizin göndərmə mərhələlərini yoxlaya bilərsiniz. Linki izləyə bilərsiniz.
            </div>
        ),
    },
    {
        key: '2',
        label: 'Sifarişin çatdırılma ünvanını və ya alıcının adını dəyişə bilərəmmi?',
        children: (
            <div>
                • Aldığınız məhsullar Hesabım &rarr; Sifarişlərim &rarr; Sifariş Təfərrüatları səhifəsində göstərilən çatdırılma tarixi aralığında çatdırılacaq.<br />
                • Əgər məhsulda "Sürətli Çatdırılma" etiketi varsa, sifarişiniz ən geci növbəti iş günü göndəriləcək. Əgər "Bugün Göndərilir" etiketi varsa, sifarişiniz həmin gün göndəriləcək.<br />
                • Sifariş çatdırıldıqda, yük şirkəti tərəfindən SMS vasitəsilə sizə məlumat veriləcək.<br />
                • Sifarişiniz göndərildikdən sonra Hesabım &rarr; Sifarişlərim &rarr; Sifariş Təfərrüatları səhifəsində "Yüküm haradadır?" bölməsində sifarişinizin göndərmə mərhələlərini yoxlaya bilərsiniz. Linki izləyə bilərsiniz.
            </div>
        ),
    },
]

export default function Faq({ }: Props) {
    const t = useTranslations()
    return (
        <div className="container mx-auto px-4 py-10 mt-12">
            <h2 className='text-2xl text-center'>{t("FAQ")}</h2>
            <Collapse defaultActiveKey={['1']} expandIconPosition="end" items={faqItems} />
        </div>
    )
}
