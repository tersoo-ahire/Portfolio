"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import SocialIcon from "./SocialIcon";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

const Navigation = () => {
  const pathname = usePathname();
  const [openMobileNav, setOpenMobileNav] = useState<boolean>(false);

  return (
    <nav className="fixed z-50 flex flex-col items-center justify-center w-full">
      <div className="flex flex-row items-center justify-between w-full bg-primary px-4 py-[1.625rem] h-[80px] md:px-12 md:py-6 xl:py-8 xl:h-[90px] 2xl:px-28 2xl:h-[150px]">
        <Link href="/" className="">
          <Image
            src="/tersoo-logo.svg"
            alt="Portfolio Icon"
            width={120}
            height={22.875}
            className="xl:w-[150px] 2xl:w-[250px]"
          />
        </Link>
        <div className="hidden items-center sm:flex sm:gap-9 md:gap-16 2xl:gap-32">
          {navLinks.map(({ name, href }) => (
            <NavLink key={name} href={href} isActive={pathname === href}>
              {name}
            </NavLink>
          ))}
        </div>
        <div className="hidden items-center gap-4 sm:flex 2xl:gap-8">
          <SocialIcon
            icon="/github.svg"
            link="https://github.com/tersoo-ahire"
            name="Github Logo"
          />
          <Button name="Contact Me" link="/contact" />
        </div>
        <Image
          src={openMobileNav ? "/cancel.svg" : "/bar.svg"}
          alt="Navigation Icon"
          width={23}
          height={20}
          className="block sm:hidden"
          onClick={() => setOpenMobileNav(!openMobileNav)}
        />
      </div>
      {openMobileNav ? (
        <div className="flex flex-col w-full px-4 py-[1.25em] gap-4 bg-[#4a4b51] sm:hidden">
          {navLinks.map(({ name, href }) => (
            <NavLink
              key={name}
              href={href}
              isActive={pathname === href}
              openMobileNav={openMobileNav}
              setOpenMobileNav={setOpenMobileNav}
            >
              {name}
            </NavLink>
          ))}
        </div>
      ) : null}
    </nav>
  );
};

const NavLink = ({
  href,
  isActive,
  children,
  openMobileNav,
  setOpenMobileNav,
}: {
  href: string;
  isActive: boolean;
  children: React.ReactNode;
  openMobileNav?: boolean;
  setOpenMobileNav?: (value: React.SetStateAction<boolean>) => void;
}) => (
  <div
    className={`w-full text-white border-b-2 2xl:border-b-4 hover:text-secondary ${
      isActive ? "border-white hover:border-secondary" : "border-transparent"
    } ${openMobileNav ? "border-b py-3" : "py-2 2xl:py-5"}`}
  >
    <Link
      href={href}
      onClick={() => setOpenMobileNav && setOpenMobileNav(false)}
      className="text-base md:text-[1.1rem] xl:text-[1.25rem] 2xl:text-[2.25rem]"
    >
      {children}
    </Link>
  </div>
);

export default Navigation;
