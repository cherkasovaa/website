import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';

import { RouterLink } from './RouterLink';

describe('RouterLink', () => {
  it.each([
    ['/about', 'About'],
    ['/portfolio', 'Portfolio'],
    ['/contacts', 'Contacts'],
  ])('renders link with correct text and path', (path, text) => {
    render(
      <MemoryRouter>
        <RouterLink path={path} content={text} />
      </MemoryRouter>,
    );

    const link = screen.getByRole('link', { name: new RegExp(text, 'i') });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', path);
  });

  it('calls handleClick when link is clicked', () => {
    const handleClick = vi.fn();

    render(
      <MemoryRouter>
        <RouterLink path="/about" content="About" handleClick={handleClick} />
      </MemoryRouter>,
    );

    const link = screen.getByRole('link', { name: /about/i });
    fireEvent.click(link);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
