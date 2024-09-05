"use client"

import Image from "next/image";
import Link from "next/link";
import SocialIcon from "./SocialIcon";
import { scrollToTop } from "../utils/helpers";

const Footer = () => {
  const socialIcons = [
    {
      name: "Github Icon",
      icon: "github.svg",
      link: "https://github.com/tersoo-ahire",
    },
    {
      name: "Linkedin Icon",
      icon: "linkedin.svg",
      link: "https://www.linkedin.com/in/tersooahire/",
    },
    {
      name: "Twitter Icon",
      icon: "twitter.svg",
      link: "https://twitter.com/tersoo_ahire",
    },
    {
      name: "Behance Icon",
      icon: "behance.svg",
      link: "https://www.behance.net/tersooahire1",
    },
  ];

  return (
    <footer className="flex flex-col items-center justify-center gap-6 md:flex-row md:justify-between bg-primary w-full px-4 py-[1.625rem] md:px-12 md:py-6 xl:py-8 2xl:px-28 2xl:py-12">
      <Link href="/" onClick={() => scrollToTop("navigation")}>
        <Image
          src="/tersoo-logo.svg"
          alt="Portfolio Icon"
          width={120}
          height={22.875}
          className="xl:w-[150px] 2xl:w-[250px]"
        />
      </Link>
      <em className="block md:hidden">tersooahire21@gmail.com</em>
      <p className="text-center hidden md:block xl:text-lg 2xl:text-4xl">
        © 2023 - Ahire Tersoo David. All rights reserved.
      </p>
      <div className="flex items-center justify-center gap-5 md:gap-4 md:justify-between 2xl:gap-6">
        {socialIcons.map((item, index) => (
          <SocialIcon
            key={index}
            name={item.name}
            icon={item.icon}
            link={item.link}
          />
        ))}
      </div>

      <div className="flex flex-col gap-3 md:hidden">
        <p className="text-lg text-secondary font-bold">QUICK LINKS</p>
        <Link
          href="/"
          onClick={() => scrollToTop("navigation")}
          className="text-sm text-center font-medium"
        >
          Home
        </Link>
        <Link
          href="/portfolio"
          onClick={() => scrollToTop("navigation")}
          className="text-sm text-center font-medium"
        >
          Portfolio
        </Link>
        <Link
          href="/contact"
          onClick={() => scrollToTop("navigation")}
          className="text-sm text-center font-medium"
        >
          Contact
        </Link>
      </div>
      <p className="text-ash text-center block md:hidden xl:text-lg 2xl:text-4xl">
        © 2024 - Ahire Tersoo David. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
