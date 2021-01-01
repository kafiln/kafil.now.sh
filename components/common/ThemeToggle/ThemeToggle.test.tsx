import { render } from '@testing-library/react';
import ThemeToggle from '.';

describe('ThemeToggle', () => {
  it('should render without crashing', () => {
    const { asFragment } = render(<ThemeToggle />);
    expect(asFragment()).toMatchSnapshot();
  });
});
