import React from "react";
import { Spotlight } from "./ui/spotlight";
import Scene from "./Scene";
import { TypewriterEffect } from "./ui/typewriter-effect";
import SocialIcons from "./SocialIcons";

const Index = () => {
  return (
    <section className="pt-20 pb-10 ">
      <div>
        <Spotlight
          className="spotlight-animation -top-40 -left-50 md:-left-32 md:-top-20 min-h-screen"
          fill="white"
        />
        <Spotlight
          className="spotlight-animation h-[80vh] w-[50vw] -top-40 left-200"
          fill="white"
        />
        <Spotlight
          className="spotlight-animation left-80 top-28 h-[80vh] w-[50vw]"
          fill="white"
        />
      </div>

      <div className="flex flex-row justify-evenly min-h-screen">
        <div className="hidden md:block min-w-1/2 mx-5 md:ml-10">
          <Scene />
        </div>
        <div className="min-w-full md:min-w-1/2 mt-20 flex flex-col items-center md:items-start">
          <p className="text-sky-100 text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 lg:mb-6 md:text-left text-center">
            Hey there, I am{" "}
            <span className="gradient-text font-bold">Aung Kham Naung</span>
          </p>
          <div className="text-s-100 mb-3 lg:mb-6 md:text-left text-center text-xl">
            What I do:{" "}
            <span className="inline-block">
              <TypewriterEffect
                words={[
                  { text: "Crafting interactive user interfaces" },
                  { text: "Developing scalable solutions" },
                  { text: "Optimizing web performances" }
                ]}
                className="text-accent-purple"
              />
            </span>
          </div>
          <p className="text-white mb-3 lg:mb-6 text-lg md:text-2xl lg:text-3xl md:text-left text-center">
            BS & MS in Computer Science at{" "}
            <span className="text-accent-blue">
              Illinois Institute of Technology
            </span>
          </p>
          <p className="text-white mb-3 lg:mb-6 text-lg md:text-2xl lg:text-3xl md:text-left text-center text-p-500">
            <span className="text-white">Full Stack Developer</span> |{" "}
            <span className="text-white">Front End Developer</span> |{" "}
            <span className="text-white">Software Engineer</span>
          </p>
          <SocialIcons />
        </div>
      </div>
    </section>
  );
};

export default Index;
