import type { Metadata } from 'next';
import './globals.css';
import BottomNav from '@/components/BottomNav';
import ServiceWorkerRegister from '@/components/ServiceWorkerRegister';
import { ProgressProvider } from '@/context/ProgressContext';
import { PWAInstallProvider } from '@/context/PWAInstallContext';

export const metadata: Metadata = {
  title: 'DengarBain – Belajar Hadis Arbain Tunanetra',
  description: 'Aplikasi PWA inklusif belajar 40 Hadis Arbain An-Nawawiyah berbasis audio & luring (Offline-First) ramah TalkBack.',
  keywords: 'hadis arbain, nawawi, tunanetra, talkback, pwa offline, belajar hadis',
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="theme-color" content="#1A5C40" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <ServiceWorkerRegister />
        <ProgressProvider>
          <PWAInstallProvider>
            <div className="app-layout">
              {/* TalkBack Live Region Announcement for Screen Readers (NFR-ACC-04) */}
              <div 
                id="accessibility-announcer" 
                className="sr-only" 
                aria-live="polite" 
                aria-atomic="true"
              />
              
              <main
                id="main-content"
                className="app-main"
              >
                {children}
              </main>
              <BottomNav />
            </div>
          </PWAInstallProvider>
        </ProgressProvider>
      </body>
    </html>
  );
}
