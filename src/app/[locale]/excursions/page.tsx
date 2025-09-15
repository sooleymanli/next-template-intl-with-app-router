import Breadcrumb from '@/components/BreadCrumb';
import LeftFilters from '@/components/excursions/LeftFilters';
import Products from '@/components/excursions/Products';
import RightFilters from '@/components/excursions/RightFilters';
import { Locale, useTranslations } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { use } from 'react';

export async function generateMetadata(
  props: Omit<PageProps<'/[locale]/excursions'>, 'children'>
) {
  const { locale } = await props.params;

  const t = await getTranslations({
    locale: locale as Locale,
    namespace: 'PageTitles'
  });

  return {
    title: t('excursions')
  };
}

export default function ExcursionsPage({
  params
}: PageProps<'/[locale]/excursions'>) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale as Locale);

  const t = useTranslations();

  return (
    <div className='text-center flex container mx-auto px-4 flex-col gap-6'>
    <Breadcrumb
      paths={[t("Navigation.home"), t("Navigation.excursions")]}
      links={["/", "/excursions"]}
    />
     <div className='filters flex flex-col lg:flex-row justify-start gap-4 lg:justify-between '>
        <LeftFilters />
        <RightFilters />
      </div>


      <Products />
    </div>
  );
}
