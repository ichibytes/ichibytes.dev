import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import AboutMe from '@/app/about-me/page';

describe('About Me', () => {
  it('Renders the about me page', () => {
    render(<AboutMe />);
    const aboutMe = screen.getByText('About Me');
    expect(aboutMe).toBeInTheDocument();
  });
});
