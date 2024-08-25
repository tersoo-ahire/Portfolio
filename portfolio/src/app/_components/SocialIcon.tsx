import Image from "next/image";
import React from "react";

const SocialIcon = ({ icon, link }: { icon: string; link: string }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center p-2 bg-[#2D2E32] rounded-[10px] 2xl:p-4 hover:bg-black"
    >
      <Image
        src={icon}
        alt="Github Logo"
        width={30}
        height={30}
        className="2xl:w-[60px] 2xl:h-[60px]"
      />
    </a>
  );
};

export default SocialIcon;
