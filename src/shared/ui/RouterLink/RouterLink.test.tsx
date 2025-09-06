import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { scrollToSection } from '~/shared/lib/utils/scrollToSection';

import { RouterLink } from './RouterLink';

vi.mock('~/shared/lib/utils/scrollToSection', () => ({
  scrollToSection: vi.fn(),
}));

const mockedScrollToSection = vi.mocked(scrollToSection);

describe('RouterLink', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Regular links', () => {
    it.each([
      ['about', 'About'],
      ['portfolio', 'Portfolio'],
      ['contacts', 'Contacts'],
    ])('renders link with correct text and path', (path, text) => {
      render(
        <MemoryRouter>
          <RouterLink path={path} content={text} />
        </MemoryRouter>
      );

      const link = screen.getByRole('link', { name: new RegExp(text, 'i') });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', `/${path}`);
    });

    it('does not call scrollToSection', () => {
      const handleClick = vi.fn();

      render(
        <MemoryRouter>
          <RouterLink path="/about" content="About" handleClick={handleClick} />
        </MemoryRouter>
      );

      const link = screen.getByRole('link', { name: /about/i });
      fireEvent.click(link);

      expect(mockedScrollToSection).not.toHaveBeenCalled();
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Anchor links', () => {
    it.each([
      ['about', 'About'],
      ['portfolio', 'Portfolio'],
      ['contacts', 'Contacts'],
    ])('renders link with correct text and path as anchor', (path, text) => {
      render(
        <MemoryRouter>
          <RouterLink path={path} content={text} isAnchor={true} />
        </MemoryRouter>
      );

      const link = screen.getByRole('link', { name: new RegExp(text, 'i') });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', `/#${path}`);
    });

    it('calls scrollToSection and handleClick for anchor links', () => {
      const handleClick = vi.fn();

      render(
        <MemoryRouter>
          <RouterLink path="about" content="About" isAnchor={true} handleClick={handleClick} />
        </MemoryRouter>
      );

      const link = screen.getByRole('link', { name: /about/i });
      fireEvent.click(link);

      expect(mockedScrollToSection).toHaveBeenCalledWith('about');
      expect(mockedScrollToSection).toHaveBeenCalledTimes(1);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});
