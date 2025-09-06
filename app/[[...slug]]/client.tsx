'use client';

import dynamic from 'next/dynamic';

const App = dynamic(() => import('../../src/app/App'), { ssr: false });

export function ClientOnly() {
  return <App />;
}
