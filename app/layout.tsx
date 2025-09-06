import { cookies } from 'next/headers';

import { ThemeProvider } from '~/app/providers/ThemeProvider';
import { THEME_KEY } from '~/shared/config/theme/constants';
import { type Theme, THEME_MODE } from '~/shared/model/providers/types';
import { Footer } from '~/widgets/footer';
import { Header } from '~/widgets/header';

import '../src/app/styles/globals.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alina Cherkasova | Frontend Developer',
  description: 'My App is a...',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const themeCookies = (await cookies()).get(THEME_KEY);
  const initialTheme = (themeCookies?.value as Theme) || THEME_MODE.SYSTEM;

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ThemeProvider defaultTheme={initialTheme}>
          <div id="root">
            <Header />
            <main className="container mx-auto flex flex-1 flex-col px-4">
              {/* <Breadcrumbs /> */}
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
