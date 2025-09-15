'use client';
import { Button, DatePicker, Form, Select } from "antd";

const { RangePicker } = DatePicker;

const countries = [
    { value: 'turkey', label: 'Türkiyə' },
    { value: 'greece', label: 'Yunanıstan' },
    { value: 'italy', label: 'İtaliya' },
    { value: 'spain', label: 'İspaniya' },
    { value: 'france', label: 'Fransa' },
    { value: 'germany', label: 'Almaniya' },
    { value: 'thailand', label: 'Tayland' },
    { value: 'maldives', label: 'Maldiv' },
    { value: 'dubai', label: 'Dubai' },
    { value: 'egypt', label: 'Misir' },
];

export default function SelectCountry() {


    const [form] = Form.useForm();


    return (
        <section
            className="w-full  flex justify-center items-center    h-[420px] bg-[linear-gradient(270deg,rgba(14,14,14,0)_0%,rgba(14,14,14,0.58)_100%),url(/homepage_bg.png)] bg-cover bg-center"
        >
            <div className='w-full container flex-col lg:flex-row gap-4  px-4 flex items-center  justify-center  lg:justify-between h-full'>
                <div className="text-4xl font-bold text-white text-left">
                    We are 🚀 <br />
                    Comfort Holiday Travel
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
                        label="Haraya"
                        name="country"
                        className="border border-[#F2F2F2] rounded-[8px] countrySelect w-full xl:w-[200px]"
                        style={{ padding: "4px 8px", color: "#ACACAC", fontSize: 12 }}
                    >
                        <Select
                            placeholder="Ölkə"
                            options={countries}
                            size="small"
                            showSearch
                            allowClear
                            style={{ textAlign: "left", paddingLeft: "0px !important" }}
                            variant="borderless"
                        />
                    </Form.Item>


                    <Form.Item
                        layout="vertical"
                        label="Tarix aralığı"
                        name="date"
                        className="border border-[#F2F2F2] rounded-[8px] countrySelect w-full   xl:w-[300px]"
                        style={{ padding: "4px 8px", color: "#ACACAC", fontSize: 12 }}
                    >

                        <RangePicker variant="borderless"
                            allowClear
                            format={"DD-MM-YYYY"}
                            
                            style={{ textAlign: "left", paddingLeft: "0px !important" ,width:"100%"}}

                        />
                    </Form.Item>


                    <Button type="primary" size="large"  className="w-full xl:w-auto"  htmlType="submit" style={{height:56}} >Axtar</Button>

                </Form>

            </div>



        </section>
    );
}
