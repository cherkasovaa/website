import { HomePage } from '@/pages/home';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alina Cherkasova | Frontend Developer',
  description: 'Alina Cherkasova is a software engineer who loves to build beautiful, accessible web applications.',
};

export default function Page() {
  return <HomePage />;
}
