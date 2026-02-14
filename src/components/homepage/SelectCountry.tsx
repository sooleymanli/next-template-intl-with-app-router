'use client';
import { Button, DatePicker, Form, Select } from "antd";
import instance from "../../../api";
import { useLocale, useTranslations } from "next-intl";
import React, { useEffect } from "react";

const { RangePicker } = DatePicker;



export default function SelectCountry() {
    const locale =useLocale()
    const [data,setData] = React.useState<any[]>([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [titleData, setTitleData] = React.useState<any>(null);
    const t = useTranslations('Common');


    async function fetchDataForTitle(locale: string) {
    try {
        const response = await instance(`about?locale=${locale}`);
        setTitleData(response.data.data);
    } catch (error) {
        console.error('Error fetching tour categories:', error);
        setTitleData(null);
    }

}

       const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await instance(`countries`);
            setData(response.data.data);
            
        } catch (error) {
            console.error('Error fetching tour categories:', error);
            setData([]);
        }{
            setIsLoading(false);
        }
    }


    useEffect(() => {
        fetchData();
        fetchDataForTitle(locale);
    }, [locale]);

    const [form] = Form.useForm();


    console.log("olkeler",data)


    return (
        <section
            className="w-full  flex justify-center items-center    h-[420px] bg-[linear-gradient(270deg,rgba(14,14,14,0)_0%,rgba(14,14,14,0.58)_100%),url(/homepage_bg.png)] bg-cover bg-center
            
            
            "
            style={{
            background:
                "linear-gradient(270deg, rgba(14, 14, 14, 0) 0%, rgba(14, 14, 14, 0.58) 100%), url(/homepage_bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            }}
        >
            <div className='w-full container flex-col lg:flex-row gap-4  px-4 flex items-center  justify-center  lg:justify-between h-full'>
            <div className="text-4xl font-bold text-white text-left">
                {titleData?.title}
            </div>



            <Form
                form={form}
                layout="inline"
                size="small"
                className="bg-white p-4 rounded-[12px]  gap-3  flex flex-col lg:flex-row  w-full lg:w-[max-content]"
                style={{ padding: 16 }}
            >

                <Form.Item
                layout="vertical"
                label={t('to_where')}
                name="country"
                className="border border-[#F2F2F2] rounded-[8px] countrySelect w-full xl:w-[200px]"
                style={{ padding: "4px 8px", color: "#ACACAC", fontSize: 12 }}
                >
                <Select
                    placeholder={t('country')}
                    options={data.map((country) => ({ value: country.id, label: country.name[locale] }))}
                    size="small"
                    showSearch
                    allowClear
                    style={{ textAlign: "left", paddingLeft: "0px !important" }}
                    variant="borderless"
                    loading={isLoading}
                />
                </Form.Item>


                <Form.Item
                layout="vertical"
                label={t('date_range')}
                name="date"
                className="border border-[#F2F2F2] rounded-[8px] countrySelect w-full   xl:w-[300px]"
                style={{ padding: "4px 8px", color: "#ACACAC", fontSize: 12 }}
                >
                <RangePicker
                    variant="borderless"
                    allowClear
                    format={locale === 'en' ? 'MM/DD/YYYY' : 'DD-MM-YYYY'}
                    placeholder={[t('begin_date'), t('end_date')]}
                    style={{ textAlign: "left", paddingLeft: "0px !important", width: "100%" }}
                />
                </Form.Item>


                <Button type="primary" size="large"  className="w-full xl:w-auto"  htmlType="submit" style={{height:56}} >{t('search')}</Button>

            </Form>

            </div>



        </section>
    );
}
