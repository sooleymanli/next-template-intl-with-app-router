import Blogs from '@/components/homepage/Blogs';
import CallMe from '@/components/homepage/CallMe';
import ContriesSlider from '@/components/homepage/ContriesSlider';
import Customers from '@/components/homepage/Customers';
import FavoriteRoutes from '@/components/homepage/FavoriteRoutes';
import SelectCountry from '@/components/homepage/SelectCountry';
import TourCategoriesWithIcon from '@/components/homepage/TourCategoriesWithIcon';
import TravelTypes from '@/components/homepage/TravelTypes';
import WeAreWho from '@/components/homepage/WeAreWho';
import ProductSlider from '@/components/ProductSlider';
import { Locale, useTranslations } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { use } from 'react';

export async function generateMetadata(
  props: Omit<PageProps<'/[locale]'>, 'children'>
) {
  const { locale } = await props.params;

  const t = await getTranslations({
    locale: locale as Locale,
    namespace: 'PageTitles'
  });

  return {
    title: t('home')
  };
}

export default function IndexPage({ params }: PageProps<'/[locale]'>) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale as Locale);

  const t = useTranslations('IndexPage');

  return (
    <div className='text-center'>
      <SelectCountry />
      <div className='w-full flex flex-col gap-6 bg-[url(/bg_restaurant.png)] bg-no-repeat bg-[left_-50px]
'>
        <TourCategoriesWithIcon />
        <ProductSlider />

      </div>
      <div className='w-full flex flex-col gap-6 bg-[url(/bg_flight.png)] bg-no-repeat bg-[right_200px]
'>
        <ContriesSlider />
        <WeAreWho />
      </div>

      <FavoriteRoutes />
      <Customers />
      <TravelTypes />
      <CallMe />
      <Blogs />

    </div>
  );
}
