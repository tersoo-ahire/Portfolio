import Image from "next/image";
import React from "react";

const SocialIcon = ({
  icon,
  link,
  name,
}: {
  icon: string;
  link: string;
  name: string;
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center p-2 bg-[#2D2E32] rounded-[10px] 2xl:p-4 hover:bg-black"
    >
      <Image
        src={icon}
        alt={name}
        width={30}
        height={30}
        className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] 2xl:w-[60px] 2xl:h-[60px]"
      />
    </a>
  );
};

export default SocialIcon;
