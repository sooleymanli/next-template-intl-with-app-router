import Breadcrumb from '@/components/BreadCrumb';
import Countries from '@/components/countries/Countries';

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
        title: t('countries')
    };
}

export default function CountriesPage({
    params
}: PageProps<'/[locale]/tours'>) {
    const { locale } = use(params);

    // Enable static rendering
    setRequestLocale(locale as Locale);

    const t = useTranslations();

    return (
        <div className='text-center flex container mx-auto px-4 flex-col gap-6'>
            <Breadcrumb
                paths={[t("Navigation.home"), t("Navigation.countries")]}
                links={["/", "/countries"]}
            />


            <Countries />

        </div>
    );
}
