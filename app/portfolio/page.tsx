import { PortfolioPage } from '@/pages/portfolio';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Archive | Alina Cherkasova',
  description:
    'An archive of completed projects with a short description, a stack of technologies and links to the source code.',
};

export default function Page() {
  return <PortfolioPage />;
}
