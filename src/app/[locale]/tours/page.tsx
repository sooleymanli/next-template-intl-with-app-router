import Breadcrumb from '@/components/BreadCrumb';
import LeftFilters from '@/components/tours/LeftFilters';
import Products from '@/components/tours/Products';
import RightFilters from '@/components/tours/RightFilters';
import { Select } from 'antd';
import { Locale, useTranslations } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { use } from 'react';

export async function generateMetadata(
  props: Omit<PageProps<'/[locale]/tours'>, 'children'>
) {
  const { locale } = await props.params;

  const t = await getTranslations({
    locale: locale as Locale,
    namespace: 'PageTitles'
  });

  return {
    title: t('tours')
  };
}

export default function ToursPage({
  params
}: PageProps<'/[locale]/tours'>) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale as Locale);

  const t = useTranslations();

  return (
    <div className='text-center flex container mx-auto px-4 flex-col gap-6'>
      <Breadcrumb
        paths={[t("Navigation.home"), t("Navigation.tours")]}
        links={["/", "/tours"]}
      />

      <div className='filters flex flex-col lg:flex-row justify-start gap-4 lg:justify-between '>
        <LeftFilters />
        <RightFilters />
      </div>

      <Products />

    </div>
  );
}
