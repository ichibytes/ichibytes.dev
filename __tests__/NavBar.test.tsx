import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import NavBar from '@/components/NavBar';
import menuItems from '../src/utils/menuItems';

describe('NavBar', () => {
  it('should render the logo', () => {
    render(<NavBar />);
    const logo = screen.getByRole('img', { name: /logo/i });
    expect(logo).toBeInTheDocument();
  });

  it('should render the brand name', () => {
    render(<NavBar />);
    const brandName = screen.getByText(/ichibytes/i);
    expect(brandName).toBeInTheDocument();
  });

  it('should render the menu items', () => {
    render(<NavBar />);
    menuItems.forEach((item) => {
      const menuItem = screen.getByRole('link', { name: item.name });
      expect(menuItem).toBeInTheDocument();
    });
  });
});