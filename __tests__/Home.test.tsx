import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Home from '@/app/page';

describe('Home', () => {
  it('Renders the banner', () => {
    render(<Home />);
    const banner = screen.getByAltText('Ichibytes');
    expect(banner).toBeInTheDocument();
  });
});
