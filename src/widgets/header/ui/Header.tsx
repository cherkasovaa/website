import { type JSX, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { NavigationMenu } from '~/features/navigation-menu';
import { APP_PATHS } from '~/shared/config/router/paths';
import { useBreakpoints } from '~/shared/lib/hooks/useBreakpoints';
import { BurgerMenu, Logo, ThemeSwitcher } from '~/shared/ui';

export const Header = (): JSX.Element => {
  const { isMobile, isSmallestDevice } = useBreakpoints();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!isMobile) setIsMenuOpen(false);
  }, [isMobile]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    return (): void => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = (): void => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="container mx-auto flex items-center justify-end gap-4 p-4">
        <Logo />

        <div className="mr-6 hidden md:flex">
          <NavigationMenu />
        </div>

        <Link
          to={APP_PATHS.RESUME}
          target="_blank"
          className="border-accent hover:text-background bg-accent/10 hover:bg-accent text-accent text-md inline-block rounded-full px-5 py-1 text-center transition-colors"
          aria-label="resume (opens in a new tab)"
        >
          Resume
        </Link>

        {!isSmallestDevice && <ThemeSwitcher />}

        <BurgerMenu handleClick={toggleMenu} active={isMenuOpen} />

        {isMenuOpen && (
          <div className="bg-background fixed inset-0 z-10 block h-full w-full px-4 py-8 md:hidden">
            {isSmallestDevice && (
              <div className="w-min -translate-y-2">
                <ThemeSwitcher />
              </div>
            )}

            <NavigationMenu handleClick={toggleMenu} />
          </div>
        )}
      </div>
    </header>
  );
};
