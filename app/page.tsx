import { HomePage } from '~/pages/home';

export function generateStaticParams() {
  return [{ slug: [''] }];
}

export default function Page() {
  return <HomePage />;
}
