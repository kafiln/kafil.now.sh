import React from 'react';
import Image from 'next/image';

const Avatar = () => {
  return (
    <div className="rounded-full overflow-hidden w-16 h-16 relative">
      <Image alt="Picture of the author" src="/me.png" layout="fill"></Image>
    </div>
  );
};

export default Avatar;
