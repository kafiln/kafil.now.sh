import React from "react";
import Image from "next/image";

const Avatar = ({ size = 64 }) => {
  return (
    <div className="rounded-full overflow-hidden w-16 h-16">
      <Image
        alt="Picture of the author"
        src="/me.png"
        height={size}
        width={size}
      ></Image>
    </div>
  );
};

export default Avatar;
