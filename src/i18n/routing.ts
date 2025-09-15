import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['az', 'en'],
  defaultLocale: 'az',
  pathnames: {
    '/': '/',
    '/tours': {
      az: '/turlar',
      en: "/tours"
    },
    '/excursions': {
      az: '/ekskursiyalar',
      en: "/excursions"
    },
    '/visa-services': {
      az: "/visa-desteyi",
      en: "/visa-services"
    },
    '/about':{
      az:"/haqqimizda",
      en:"/about"
    },
    '/blogs':{
      az:"/bloqlar",
      en:"/blogs"
    },
    '/countries':{
      az:"/olkeler",
      en:"/countries"
    },
    '/contact':{
      az:"/elaqe",
      en:"/contact"
    }
  }
});
