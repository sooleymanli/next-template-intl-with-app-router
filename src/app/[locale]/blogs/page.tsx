import Blogs from '@/components/blogs/Blogs';
import Breadcrumb from '@/components/BreadCrumb';
import { Locale, useTranslations } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { use } from 'react';

export async function generateMetadata(
  props: Omit<PageProps<'/[locale]/blogs'>, 'children'>
) {
  const { locale } = await props.params;

  const t = await getTranslations({
    locale: locale as Locale,
    namespace: 'PageTitles'
  });

  return {
    title: t('blogs')
  };
}

export default function BlogsPage({
  params
}: PageProps<'/[locale]/blogs'>) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale as Locale);

  const t = useTranslations();

  return (
    <div className='container mx-auto px-4 py-12 flex flex-col gap-6 '>
      <Breadcrumb
        paths={[t("Navigation.home"), t("Navigation.blogs")]}
        links={["/", "/countries"]}
      />

      <Blogs />
    </div>
  );
}
