import { render } from '@testing-library/react';
import HomeButton from '.';

describe('HomeButton', () => {
  it('should render without crashing', () => {
    const { asFragment } = render(<HomeButton />);
    expect(asFragment()).toMatchSnapshot();
  });
});
