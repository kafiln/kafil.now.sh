import { fireEvent, render } from '@testing-library/react';
import * as nextRouter from 'next/router';
import HomeButton from '.';

describe('HomeButton', () => {
  it('should render without crashing', () => {
    const { asFragment } = render(<HomeButton />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should call on click once clicked', () => {
    const push = jest.fn();
    //@ts-ignore
    jest.spyOn(nextRouter, 'useRouter').mockImplementation(() => ({ push }));

    const clickHandler = jest.fn();
    const { getByTestId } = render(<HomeButton onClick={clickHandler} />);
    const tag = getByTestId('home');
    fireEvent.click(tag);
    expect(push).toHaveBeenCalledWith('/');
    expect(clickHandler).toBeCalled();
  });
});
