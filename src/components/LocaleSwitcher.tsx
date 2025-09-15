'use client'
import {useLocale, useTranslations} from 'next-intl';
import {routing} from '@/i18n/routing';
import {Select} from 'antd';
import {useParams} from 'next/navigation';
import {Locale} from 'next-intl';
import {useTransition} from 'react';
import {usePathname, useRouter} from '@/i18n/navigation';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onValueChange(value: string) {
    const nextLocale = value as Locale;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        {pathname, params},
        {locale: nextLocale}
      );
    });
  }

  const options = routing.locales.map((cur) => ({
    value: cur,
    label: t('locale', {locale: cur})
  }));

  return (
    <div className="relative">
      <p className="sr-only">{t('label')}</p>
      <Select
        defaultValue={locale}
        disabled={isPending}
        onChange={onValueChange}
        options={options}
        size="large"
        style={{ 
          width: 90,
          height: 40,
          borderRadius: 12,
          backgroundColor: 'rgba(35, 35, 35, 0.15)'
        }}
        variant="borderless"
      />
    </div>
  );
}
