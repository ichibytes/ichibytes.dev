import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Home from '@/app/page';

it('renders the banner', () => {
    render(<Home />);
    const banner = screen.getByAltText('Ichibytes');
    expect(banner).toBeInTheDocument(); 
});
