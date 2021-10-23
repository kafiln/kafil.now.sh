import { ChakraProvider } from '@chakra-ui/react';
import { fireEvent, render } from '@testing-library/react';
import ThemeToggle from '.';

describe('ThemeToggle', () => {
  it('should render without crashing', () => {
    const { asFragment } = render(<ThemeToggle />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have a default size of 1.5em', () => {
    const { container } = render(<ThemeToggle />);
    const height = container.querySelector('svg').getAttribute('height');
    expect(height).toEqual('1.5em');
  });

  it('should have a size from prop', () => {
    const { container } = render(<ThemeToggle size={4} />);
    const height = container.querySelector('svg').getAttribute('height');
    expect(height).toEqual('4em');
  });

  it('should change icon on click', () => {
    const { container } = render(
      <ChakraProvider>
        <ThemeToggle />
      </ChakraProvider>
    );
    const box = container.firstChild;
    const sun = container.querySelector('svg');
    fireEvent.click(box);
    const moon = container.querySelector('svg');
    expect(sun).toMatchSnapshot();
    expect(moon).toMatchSnapshot();
    expect(sun).not.toEqual(moon);
  });
});
