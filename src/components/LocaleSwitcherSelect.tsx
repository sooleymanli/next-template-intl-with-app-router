'use client';

import {useParams} from 'next/navigation';
import {Locale} from 'next-intl';
import {ReactNode, useTransition} from 'react';
import {usePathname, useRouter} from '@/i18n/navigation';
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label
}: Props) {
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

  return (
    <div className="relative">
      <p className="sr-only">{label}</p>
      <Select
        defaultValue={defaultValue}
        disabled={isPending}
        onValueChange={onValueChange}
      >
        <SelectTrigger className="w-[90px] bg-[rgb(35_35_35_/_15%)] border-0 hover:cursor-pointer ">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {children}
        </SelectContent>
      </Select>
    </div>
  );
}
