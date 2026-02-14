'use client'
import { Link } from '@/i18n/navigation'
import React, { useEffect, useState } from 'react'



type Props = {
    label: string,
    path: string
}

// Açıq rənglər
const colors = [
    "#FDE2E4", "#FAD2E1", "#E2ECE9", "#BEE1E6", "#CDE7F0",
    "#D9D7F1", "#F6DFEB", "#E4C1F9", "#F5E6CC", "#FDEBD0",
    "#F8E1A1", "#FFF5BA", "#E0F9B5", "#D3F8E2", "#B5EAEA",
    "#EDF6F9", "#F7DAD9", "#FFD6A5", "#FFB5A7", "#FEC5BB",
    "#FFDAC1", "#FFEEDD", "#DFF3E3", "#C4FCEF", "#E2F0CB",
    "#B5EAD7", "#C7CEEA", "#E0BBE4", "#D291BC", "#FEC8D8",
    "#F6EAC2", "#FFF0D1", "#E8EAE6", "#F1F0F0", "#E2F1F8"
]

// Sadə tündləşdirmə funksiyası (prosent qədər qara qatır)
function darken(hex: string, percent: number) {
    const num = parseInt(hex.replace('#', ''), 16)
    const r = Math.max(0, (num >> 16) - (2.55 * percent))
    const g = Math.max(0, ((num >> 8) & 0x00FF) - (2.55 * percent))
    const b = Math.max(0, (num & 0x0000FF) - (2.55 * percent))
    return `rgb(${r}, ${g}, ${b})`
}

export default function TourCategoryItemWithIcon({
    path,
    label
}: Props) {

    const [bgColor, setBgColor] = useState("")
    const [darkColor, setDarkColor] = useState("")





    useEffect(() => {
        const index = Math.floor(Math.random() * colors.length)
        const base = colors[index]
        setBgColor(base)
        setDarkColor(darken(base, 30))
    }, [])

    if(!bgColor || !darkColor){
        return null
    }



    return (
        <Link
            href={`${path}`}
            style={{ backgroundColor: bgColor }}
            className='w-[max-content]  xl:w-[162px] h-[40px] xl:h-[80px] rounded-[8px] p-2 flex flex-row  xl:flex-col items-center justify-center gap-1 xl:gap-2 
        bg-none  xl:bg-[url(/category_bg_icon.png)] bg-no-repeat bg-[right_-70%_top_200%] cursor-pointer 
        border-1 transition-all duration-300 ease-in-out border-transparent'

            onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = darkColor
            }}
            onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'transparent'
            }}
        >
            <div className='flex justify-start w-auto xl:w-full'>
                <div className='hidden xl:flex'>
                    <svg width="28" height="30" viewBox="0 0 28 30" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.6406 5.26631C18.2381 4.07506 16.7881 2.84506 15.3331 1.39131L13.9981 0.0600586L12.6744 1.39256C10.6915 3.5583 9.26808 6.17595 8.52812 9.01756C8.50937 8.95256 8.49187 8.89256 8.47437 8.82131L7.68187 5.75006L5.37312 7.91756C3.05437 10.0913 0.911868 12.6926 0.910618 16.9751C0.886236 19.8665 1.82878 22.6832 3.5885 24.9776C5.34823 27.2721 7.82422 28.9127 10.6231 29.6388C11.7223 29.9175 12.8517 30.059 13.9856 30.0601C15.7052 30.0627 17.4084 29.7262 18.9978 29.0699C20.5872 28.4136 22.0316 27.4503 23.2484 26.2352C24.4651 25.0201 25.4303 23.577 26.0888 21.9885C26.7472 20.3999 27.0859 18.6971 27.0856 16.9776C27.0856 11.5876 23.6344 8.65756 19.6406 5.26631ZM19.7269 24.3426C19.5906 24.4476 19.4456 24.5351 19.3056 24.6326C19.5938 23.9379 19.7425 23.1934 19.7431 22.4413C19.7431 19.2676 16.8681 18.0013 13.9931 15.1288C10.8594 18.2626 8.24312 19.2676 8.24312 22.4413C8.24882 23.2377 8.42083 24.024 8.74812 24.7501C7.48262 23.888 6.44856 22.728 5.73707 21.3721C5.02557 20.0163 4.65847 18.5062 4.66812 16.9751C4.63637 15.418 5.13785 13.8968 6.08937 12.6638C6.22562 12.8788 6.36937 13.0863 6.52187 13.2888C6.84858 13.7301 7.29714 14.0662 7.81237 14.2558C8.32761 14.4455 8.88705 14.4804 9.42187 14.3563C9.96438 14.2352 10.4605 13.9604 10.8509 13.5647C11.2413 13.169 11.5094 12.6692 11.6231 12.1251C12.0651 9.77373 12.9304 7.5222 14.1769 5.48006C15.2319 6.45006 16.2644 7.32631 17.2094 8.13006C21.2319 11.5438 23.3344 13.4888 23.3344 16.9776C23.3376 18.3995 23.014 19.8032 22.3885 21.0803C21.763 22.3573 20.8523 23.4734 19.7269 24.3426Z"
                            fill={darkColor}
                        />
                    </svg>
                </div>


                <div className="flex xl:hidden">

                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_917_4144)">
                            <path d="M13.7616 3.5099C12.8266 2.71573 11.86 1.89573 10.89 0.926563L9.99997 0.0390625L9.11747 0.927396C7.79554 2.37122 6.84661 4.11632 6.3533 6.01073C6.3408 5.9674 6.32913 5.9274 6.31747 5.8799L5.78913 3.8324L4.24997 5.2774C2.70413 6.72656 1.2758 8.46073 1.27497 11.3157C1.25871 13.2434 1.88707 15.1212 3.06022 16.6508C4.23338 18.1804 5.88403 19.2741 7.74997 19.7582C8.48273 19.944 9.23568 20.0384 9.99163 20.0391C11.138 20.0408 12.2735 19.8165 13.3331 19.379C14.3927 18.9414 15.3557 18.2992 16.1668 17.4892C16.978 16.6791 17.6214 15.717 18.0604 14.658C18.4994 13.599 18.7252 12.4638 18.725 11.3174C18.725 7.72406 16.4241 5.77073 13.7616 3.5099ZM13.8191 16.2274C13.7283 16.2974 13.6316 16.3557 13.5383 16.4207C13.7304 15.9576 13.8296 15.4613 13.83 14.9599C13.83 12.8441 11.9133 11.9999 9.99663 10.0849C7.90747 12.1741 6.1633 12.8441 6.1633 14.9599C6.1671 15.4908 6.28178 16.0151 6.49997 16.4991C5.6563 15.9244 4.96693 15.151 4.4926 14.2471C4.01827 13.3432 3.77353 12.3365 3.77997 11.3157C3.7588 10.2777 4.09312 9.26354 4.72747 8.44156C4.8183 8.5849 4.91413 8.72323 5.0158 8.85823C5.23361 9.15239 5.53265 9.37648 5.87614 9.50292C6.21963 9.62936 6.59259 9.65264 6.94913 9.5699C7.31081 9.48917 7.64157 9.30595 7.90183 9.04215C8.16208 8.77834 8.34082 8.44513 8.41663 8.0824C8.71128 6.51484 9.28814 5.01383 10.1191 3.6524C10.8225 4.29906 11.5108 4.88323 12.1408 5.41906C14.8225 7.6949 16.2241 8.99156 16.2241 11.3174C16.2263 12.2654 16.0105 13.2012 15.5935 14.0525C15.1765 14.9039 14.5694 15.648 13.8191 16.2274Z" fill={darkColor} />
                        </g>
                        <defs>
                            <clipPath id="clip0_917_4144">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>


                </div>
            </div>

            <span className='text-[#333333] text-xs xl:text-sm'>{label}</span>
        </Link>
    )
}
