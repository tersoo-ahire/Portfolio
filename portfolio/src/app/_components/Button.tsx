import Link from "next/link";
import React, { HTMLAttributeAnchorTarget } from "react";

const Button = ({
  name,
  link,
  target,
}: {
  name: string;
  link: string;
  target?: HTMLAttributeAnchorTarget;
}) => {
  return (
    <Link
      href={link}
      target={target}
      className="flex items-center justify-center px-0 py-4 md:px-[1em] md:py-[0.9375em] 
      w-[130px] h-[35px] md:w-[170px] md:h-[45px] text-center text-base md:text-[1.1rem]
      no-underline text-primary bg-gradient-to-r from-[#F7C000] to-[#FFA400] rounded-[8px] 
      md:rounded-[15px] xl:text-[1.25rem] 2xl:px-[2em] 2xl:text-[2rem] 2xl:font-medium 2xl:min-w-max 2xl:h-[92px]
      2xl:rounded-[30px] hover:from-[#FFA400] hover:to-[#F6C000] cursor-pointer"
    >
      {name}
    </Link>
  );
};

export default Button;
