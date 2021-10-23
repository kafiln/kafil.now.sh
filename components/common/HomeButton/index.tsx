import { useRouter } from 'next/router';
import React from 'react';
import { BiHomeHeart } from 'react-icons/bi';

export type HomeButtonProps = {
  size?: number;
  color?: string;
  onClick?: () => void;
};

const HomeButton = ({ size = 1.5, color, onClick }: HomeButtonProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
    onClick && onClick();
  };
  return (
    <a onClick={handleClick} data-testid="home">
      <BiHomeHeart color={color} size={`${size}em`} />
    </a>
  );
};

export default HomeButton;
