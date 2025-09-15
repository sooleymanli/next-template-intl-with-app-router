import { Breadcrumb as AntBreadcrumb } from 'antd'
import { Link } from '@/i18n/navigation'
import React, { ComponentProps } from 'react'

type Props = {
  paths: string[]
  links?: ComponentProps<typeof Link>['href'][] // opsional, paths ilə eyni uzunluqda olmalıdır
}

export default function Breadcrumb({ paths, links = [] }: Props) {
  if (!paths.length) return null

  const breadcrumbItems = paths.map((label, idx) => {
    const isLast = idx === paths.length - 1
    const href = links[idx]

    return {
      title: isLast || !href ? label : (
        <Link href={href}>{label}</Link>
      )
    }
  })

  return (
    <div className="container mx-auto px-4 py-4">
      <AntBreadcrumb items={breadcrumbItems} />
    </div>
  )
}
