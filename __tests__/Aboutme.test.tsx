import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import AboutMe from '@/app/about-me/page';

it('renders the about me page', () => {
    render(<AboutMe />);
    const aboutMe = screen.getByText('About Me');
    expect(aboutMe).toBeInTheDocument();
});