import { SpeedInsights } from '@vercel/speed-insights/next';
import { ResolvingViewport } from 'next';
import dynamic from 'next/dynamic';
import { ReactNode } from 'react';
import { isRtlLang } from 'rtl-detect';

import Analytics from '@/components/Analytics';
import { DEFAULT_LANG, LOBE_LOCALE_COOKIE } from '@/const/locale';
import AuthProvider from '@/layout/AuthProvider';
import GlobalProvider from '@/layout/GlobalProvider';
import { isMobileDevice } from '@/utils/responsive';
import FloatingButtons from '@/components/FloatingButtons'; // Yeni bileşeni ekledik

const PWAInstall = dynamic(() => import('@/features/PWAInstall'), { ssr: false });
const inVercel = process.env.VERCEL === '1';

type RootLayoutProps = {
  children: ReactNode;
  modal: ReactNode;
};

const RootLayout = async ({ children, modal }: RootLayoutProps) => {
  const direction = 'ltr'; // Varsayılan yön
  const lang = 'en'; // Varsayılan dil
  const mobile = isMobileDevice();

  return (
    <html dir={direction} lang={lang} suppressHydrationWarning>
      <body>
        <GlobalProvider>
          <AuthProvider>
            {children}
            {!mobile && modal}
          </AuthProvider>
          <PWAInstall />
          <FloatingButtons /> {/* Yeni bileşeni burada kullandık */}
        </GlobalProvider>
        <Analytics />
        {inVercel && <SpeedInsights />}
      </body>
    </html>
  );
};

export default RootLayout;
