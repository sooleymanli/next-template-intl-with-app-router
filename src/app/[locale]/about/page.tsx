import { Locale, useTranslations } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { use } from 'react';

export async function generateMetadata(
  props: Omit<PageProps<'/[locale]/about'>, 'children'>
) {
  const { locale } = await props.params;

  const t: any = await getTranslations({
    locale: locale as Locale,
    namespace: 'PageTitles'
  });

  return {
    title: t('about')
  };
}

export default function AboutPage({
  params
}: PageProps<'/[locale]/about'>) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale as Locale);

  const t = useTranslations('PathnamesPage');

  return (
    <div className='text-center'>
      Haqqinda
    </div>
  );
}
