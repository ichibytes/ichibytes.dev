import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Contact from '@/app/contact/page';

describe('Contact', () => {
  it('Renders the contact page', () => {
    render(<Contact />);
    const contact = screen.getByText('Contact');
    expect(contact).toBeInTheDocument();
  });
});
