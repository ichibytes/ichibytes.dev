import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Home from '@/app/page';
import AboutMe from '@/app/about-me/page';
import Contact from '@/app/contact/page';

it('renders the banner', () => {
    render(<Home />);
    const banner = screen.getByAltText('Ichibytes');
    expect(banner).toBeInTheDocument(); 
});

it('renders the about me page', () => {
    render(<AboutMe />);
    const aboutMe = screen.getByText('About Me');
    expect(aboutMe).toBeInTheDocument();
});

it('renders the contact page', () => {
    render(<Contact />);
    const contact = screen.getByText('Contact');
    expect(contact).toBeInTheDocument();
});
