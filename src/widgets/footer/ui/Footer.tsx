import type { JSX } from 'react';

import { FaGithub, FaTelegram } from 'react-icons/fa';

export const Footer = (): JSX.Element => {
  return (
    <footer className="bg-background text-secondary border-t border-gray-200 py-8 md:py-4 dark:border-gray-800">
      <div className="container mx-auto px-4 text-sm">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <div className="flex space-x-4">
              <p className="text-accent">Contact me →</p>
              <a href="https://t.me/cherkasova_aa" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                <FaTelegram className="hover:text-accent h-6 w-6 transition-colors" />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <a href="https://github.com/cherkasovaa" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className="hover:text-accent h-6 w-6 transition-colors" />
            </a>

            <p className="text-center">Designed & Built with ❤️ using Next.js, TypeScript & Tailwind</p>
          </div>

          <div className="flex flex-col items-center gap-4 md:items-end">
            <a href="mailto:alina.ch1202@yandex.com" className="hover:text-accent transition-colors">
              alina.ch1202@yandex.com
            </a>
            <p>© Alina Cherkasova, 2025</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
