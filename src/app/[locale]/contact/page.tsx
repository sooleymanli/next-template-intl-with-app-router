import { Locale, useTranslations } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { use } from 'react';

export async function generateMetadata(
  props: Omit<PageProps<'/[locale]/contact'>, 'children'>
) {
  const {locale} = await props.params;
  
  const t = await getTranslations({
    locale: locale as Locale,
    namespace: 'PageTitles'
  });

  return {
    title: t('contact')
  };
}

export default function ContactPage({
  params
}: PageProps<'/[locale]/contact'>) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale as Locale);

  const t = useTranslations('PathnamesPage');

  return (
    <div className='text-center'>
      Elaqe
    </div>
  );
}
