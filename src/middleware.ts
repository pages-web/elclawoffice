import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware({
  locales: ["mn", "en"],

  defaultLocale: "mn",
});

export const config = {
  matcher: ["/", "/(mn|en)/:path*"],
};
