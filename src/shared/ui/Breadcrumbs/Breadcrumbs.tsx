'use client';

import { type JSX } from 'react';

import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { APP_PATHS } from '@/shared/config/router/paths';

export const Breadcrumbs = (): JSX.Element | null => {
  const pathname = usePathname();

  if (pathname === APP_PATHS.HOME) {
    return null;
  }

  return (
    <nav aria-label="breadcrumb">
      <Link href={APP_PATHS.HOME} className="text-accent group mb-6 inline-flex items-center transition-colors">
        <ChevronLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" /> Back to Home
      </Link>
    </nav>
  );
};
