import Breadcrumb from '@/components/BreadCrumb';
import Faq from '@/components/faq/Faq';
import WeAreWho from '@/components/homepage/WeAreWho';
import Banner from '@/components/visa/Banner';
import VisaApplication from '@/components/visa/VisaApplication';
import { Locale, useTranslations } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { use } from 'react';

export async function generateMetadata(
  props: Omit<PageProps<'/[locale]/visa-services'>, 'children'>
) {
  const { locale } = await props.params;

  const t = await getTranslations({
    locale: locale as Locale,
    namespace: 'PageTitles'
  });

  return {
    title: t('visa_services')
  };
}

export default function VisaServicesPage({
  params
}: PageProps<'/[locale]/visa-services'>) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale as Locale);

  const t = useTranslations();

  return (
    <section>
      <div className='container mx-auto px-4'>
        <Breadcrumb
          paths={[t("Navigation.home"), t("Navigation.visa_services")]}
          links={["/", "/visa-services"]}
        />
        <Banner />

      </div>


      <VisaApplication />

      <WeAreWho />

      <Faq />

    </section>
  );
}
