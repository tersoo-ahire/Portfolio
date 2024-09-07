import React from "react";
import Button from "./Button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse bg-primary w-full items-start justify-center gap-4 px-4 pt-[79px] md:gap-12 md:flex-row md:px-12 lg:pt-[89px] 2xl:px-28 2xl:pt-[149px] 2xl:items-center 2xl:min-h-[1150px]">
      <div className="flex flex-col w-full py-6 gap-4 md:gap-5 md:w-1/2 2xl:w-[55%] 2xl:gap-10 2xl:py-16">
        <p className="text-base text-neon-green md:text-[1.1rem] 2xl:text-[2.25rem]">
          — About me
        </p>
        <h1 className="w-full tracking-[0.04em] font-extrabold text-[2.25rem] leading-[2.75rem] md:text-[3.7rem] md:leading-[4.5rem] md:w-[90%] 2xl:text-[7.5rem] 2xl:leading-[9rem]">
          Hello I’m Tersoo Ahire
        </h1>
        <p className="w-full text-base text-silver md:text-[1.1rem] md:w-[95%] md:leading-[28px] 2xl:w-[85%] 2xl:text-[2.5rem] 2xl:leading-normal">
          A web developer with a keen eye for detail and a passion for creating
          intuitive, user-friendly designs and web applications. Hire me for
          your next web project and watch your vision come to life.
        </p>
        <Button name={"Contact me"} link={"/contact"} />
      </div>
      <div className="flex flex-col items-center justify-center w-full animate-[fade-in_3s_ease-in-out_forwards] md:w-1/2 2xl:w-[45%]">
        <Image
          src="/tersoo.png"
          alt="Picture of Tersoo"
          width={585}
          height={783}
          className="w-auto max-h-[350px] md:max-h-[450px] lg:h-[500px] lg:max-h-[783px] 2xl:w-full 2xl:h-[1000px]"
        />
      </div>
    </div>
  );
};

export default Hero;
