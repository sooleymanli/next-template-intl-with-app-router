import { notFound } from 'next/navigation';
import {  hasLocale, NextIntlClientProvider } from 'next-intl';
import {  setRequestLocale } from 'next-intl/server';
import { clsx } from 'clsx';
import { Inter } from 'next/font/google';
import { routing } from '@/i18n/routing';
import Header from '@/components/header/Header';
import { ConfigProvider } from 'antd';
import azLocale from 'antd/locale/az_AZ';
import CallMe from '@/components/homepage/CallMe';
import Footer from '@/components/Footer';
import '@ant-design/v5-patch-for-react-19';

const inter = Inter({ subsets: ['latin'] });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// Metadata is now handled by individual pages

export default async function LocaleLayout({
  children,
  params
}: LayoutProps<'/[locale]'>) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={clsx(inter.className, 'flex  flex-col h-auto')} style={{height:"auto"}}>
      <ConfigProvider locale={azLocale}>
        <NextIntlClientProvider>
          <Header />
      
          {children}
          <CallMe />
          <Footer />
        </NextIntlClientProvider>
        </ConfigProvider>

      </body>

    </html>
  );
}
