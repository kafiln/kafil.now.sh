import Link from 'next/link';
import React from 'react';
import { BiHomeHeart } from 'react-icons/bi';

export declare type HomeButtonProps = {
  size?: number;
  color?: string;
  onClick?: () => void;
};

const HomeButton = ({ size = 1.5, color, onClick }: HomeButtonProps) => {
  return (
    <Link href="/">
      <a onClick={onClick}>
        <BiHomeHeart color={color} size={`${size}em`} />
      </a>
    </Link>
  );
};

export default HomeButton;
