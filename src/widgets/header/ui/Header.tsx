import { type JSX, useEffect, useState } from 'react';

import { NavigationMenu } from '~/features/navigation-menu';
import { APP_PATHS } from '~/shared/config/router/paths';
import { BurgerMenu, Logo, RouterLink } from '~/shared/ui';

export const Header = (): JSX.Element => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!isMobile) setIsMenuOpen(false);
  }, [isMobile]);

  useEffect(() => {
    const checkIsMobile = (): void => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };

    checkIsMobile();

    window.addEventListener('resize', checkIsMobile);
    return (): void => window.removeEventListener('resize', checkIsMobile);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    return (): void => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = (): void => setIsMenuOpen((prev) => !prev);
  const handleResumeView = (): Window | null => window.open(APP_PATHS.RESUME, '_blank');

  return (
    <header className="header p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />

        <div className="hidden md:flex">
          <NavigationMenu />
        </div>

        <RouterLink
          path={APP_PATHS.RESUME}
          content="Resume"
          handleClick={handleResumeView}
          className="border-accent hover:text-background bg-accent/10 hover:bg-accent text-accent inline-block rounded-full px-5 py-1 text-center text-lg transition-colors"
          aria-label="resume (opens in a new tab)"
        />

        <div className="border-accent z-20 flex h-12 w-12 items-center justify-center rounded-sm border-1 md:hidden">
          <BurgerMenu handleClick={toggleMenu} active={isMenuOpen} />
        </div>

        {isMenuOpen && (
          <div className="bg-background fixed top-0 left-0 z-10 block h-full w-full px-4 py-8 md:hidden">
            <NavigationMenu handleClick={toggleMenu} />
          </div>
        )}
      </div>
    </header>
  );
};
