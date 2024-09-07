import React from "react";
import Button from "./Button";

const HireMe = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full px-4 gap-4 md:gap-12 md:px-12 md:flex-row xl:py-8 2xl:px-28 test-border">
      <div className="flex flex-wrap w-full gap-4 md:w-1/2"></div>
      <div className="flex flex-col w-full gap-4 md:w-1/2 2xl:gap-10">
        <h2 className="w-full tracking-[0.04em] font-extrabold text-[1.5rem] leading-[1.5em] md:text-[2.25rem] md:leading-[1.25em] lg:w-[95%] 2xl:w-full 2xl:text-[5rem] 2xl:leading-[6.5rem]">
          Why Hire Me For Your Next Project?
        </h2>
        <p className="w-full text-base text-dark-silver leading-[30px] md:text-[1.1rem] 2xl:text-[2.25rem] 2xl:leading-relaxed">
          With strong problem-solving skills and an attention to detail, I am
          able to take a project from concept to completion, ensuring that the
          end result meets your needs and expectations.
        </p>
        <p className="w-full text-base text-dark-silver leading-[30px] md:text-[1.1rem] 2xl:text-[2.25rem] 2xl:leading-relaxed">
          I am a strong communicator and able to work effectively as part of a
          team or individually to complete projects on time and to the highest
          standard. My skills, experience, and dedication to delivering
          high-quality work makes me an ideal candidate for your next project.
        </p>
        <Button
          name={"Download CV"}
          link={
            "https://drive.google.com/file/d/1FAZoeIrY4KD0MorQY7LAKng3ar92mWHq/view?usp=sharing"
          }
          target="_blank"
        />
      </div>
    </section>
  );
};

export default HireMe;
