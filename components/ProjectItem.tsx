import React from "react";
import Image from "next/image";
import StackIcon from "tech-stack-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface ProjectItemProps {
  title: string;
  description: string;
  imgUrl: string;
  github: string;
  icons: string[];
  live?: string;
  onPrev: () => void;
  onNext: () => void;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  description,
  imgUrl,
  github,
  icons,
  live,
  onPrev,
  onNext
}) => {
  return (
    <div className="feature-border feature-bg border-2 text-white px-6 py-4 rounded-xl p-4 ">
      <div className="flex justify-center items-center rounded-xl max-w-fit-content mb-5">
        <Image
          src={imgUrl}
          alt={title}
          width={800}
          height={100}
          className="rounded-xl"
          priority
        />
      </div>
      <h2 className="font-bold text-xl md:text-3xl lg:text-4xl mb-4 ">
        {title}
      </h2>
      <p className="text-gray-400 text-md md:text-lg mb-4">{description}</p>

      <div className="flex flex-col justify-between items-center gap-4 min-[495px]:flex-row ">
        <div className="flex md:gap-3">
          {icons.map((icon) => (
            <StackIcon
              key={icon}
              name={icon}
              className="w-9 h-7 md:w-12 md:h-10"
            />
          ))}
        </div>
        <div className="flex gap-4">
          <a href={github} target="_blank" rel="noopener noreferrer">
            <button className="px-4 py-2 md:px-7 md:py-3 bg-zinc-800 text-indigo-500 rounded-md hover:bg-indigo-500 transition-colors cursor-pointer border-1 hover:text-white hover:border-none text-lg md:text-xl border-indigo-500 ">
              Github{" "}
              <span>
                <FontAwesomeIcon
                  icon={faGithub}
                  className="inline-block w-5 h-5"
                />
              </span>
            </button>
          </a>

          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer">
              <button className="px-4 py-2 md:px-7 md:py-3 bg-zinc-800 text-indigo-500 rounded-md hover:bg-indigo-500 transition-colors cursor-pointer border-1 hover:text-white hover:border-none text-lg md:text-xl border-indigo-500">
                <span>Live</span>
                <Image
                  src="/arrow-up.png"
                  alt="live"
                  width={10}
                  height={10}
                  className="inline-block ml-2"
                />
              </button>
            </a>
          )}
        </div>
      </div>

      <div className="flex flex-row justify-between mt-6 px-4">
        <button className="cursor-pointer" onClick={onPrev}>
          <Image src="/left-arrow.png" alt="left" width={20} height={20} />
        </button>
        <button className="cursor-pointer" onClick={onNext}>
          <Image src="/right-arrow.png" alt="left" width={20} height={20} />
        </button>
      </div>
    </div>
  );
};

export default ProjectItem;
