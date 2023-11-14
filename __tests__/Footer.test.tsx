import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Footer from '@/components/Footer';

describe('Footer', () => {
  it('should render the footer', () => {
    render(<Footer />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });

  it('should render the footer copyright', () => {
    render(<Footer />);
    const footer = screen.getByText(/ichibytes/i);
    expect(footer).toBeInTheDocument();
  });
});