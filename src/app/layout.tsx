import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Halenur Büyükarslan — Full-Stack Yazılım Mühendisi ve Bilgisayar Vizyonu Geliştiricisi',
  description:
    'Bilgisayar Mühendisi. React, .NET Core ve OpenCV ile modern web uygulamaları ve bilgisayar vizyonu sistemleri geliştiriyorum.',
  keywords: [
    'Halenur Büyükarslan',
    'Full-Stack Geliştirici',
    'React',
    '.NET Core',
    'OpenCV',
    'Bilgisayar Vizyonu',
    'Portfolyo',
    'Yazılım Mühendisi',
  ],
  authors: [{ name: 'Halenur Büyükarslan' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Halenur Büyükarslan — Full-Stack Yazılım Mühendisi',
    description:
      'React, .NET Core ve OpenCV uzmanı. Modern web uygulamaları ve bilgisayar vizyonu sistemleri.',
    type: 'website',
    locale: 'tr_TR',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={inter.variable} style={{ backgroundColor: '#060810', colorScheme: 'dark' }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, backgroundColor: '#060810', color: '#e8eaf6' }}>{children}</body>
    </html>
  );
}
