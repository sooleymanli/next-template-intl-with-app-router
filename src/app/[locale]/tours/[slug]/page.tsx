import Breadcrumb from '@/components/BreadCrumb';
import LeftFilters from '@/components/tours/LeftFilters';
import Products from '@/components/tours/Products';
import RightFilters from '@/components/tours/RightFilters';
import { Locale, useTranslations } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { use } from 'react';

export async function generateMetadata(
  props: Omit<PageProps<'/[locale]/tours/[slug]'>, 'children'>
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

export default function TourDetailPage({
  params
}: PageProps<'/[locale]/tours/[slug]'>) {
  const { locale,slug } = use(params);

  // Enable static rendering
  setRequestLocale(locale as Locale);

  const t = useTranslations();

  return (
    <div className='text-center flex container mx-auto px-4 flex-col gap-6'>
      <Breadcrumb
        paths={[t("Navigation.home"), t("Navigation.tours"),slug]}
        links={["/", "/tours"]}
      />

   
        Detallar
 

    </div>
  );
}
