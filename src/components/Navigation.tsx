import { useTranslations } from 'next-intl';
import NavigationLink from './NavigationLink';

export default function Navigation() {
  const t = useTranslations('Navigation');

  return (
      <nav className="container hidden lg:flex gap-2 justify-center">
          <NavigationLink href="/">{t('home')}</NavigationLink>
          <NavigationLink href="/tours">{t('tours')}</NavigationLink>
          <NavigationLink href="/excursions">{t('excursions')}</NavigationLink>
          <NavigationLink href="/visa-services">{t('visa_services')}</NavigationLink>
          {/* <NavigationLink   href="/about">{t('about')}</NavigationLink> */}
          <NavigationLink href="/blogs">{t('blogs')}</NavigationLink>
          {/* <NavigationLink href="/contact">{t('contact')}</NavigationLink> */}
      </nav>
  );
}
