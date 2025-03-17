import { GlobeDemo } from "./ui/globe-demo";
import Image from "next/image";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import ContactCopy from "./ContactCopy";
import TechStack from "./TechStack";

const About = () => {
  return (
    <section id="about" className="min-h-screen mx-10 md:mx-0">
      <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[22rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            headerClassName={item.headerClassName}
            header={item.header}
            className={item.className}
            descriptionClassName={item.descriptionClassName}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

const items = [
  {
    title: "Hi, I am Aung Kham Naung",
    description:
      "With 3 years of experience, I have refined my skills in both frontend and backend development to build dynamic websites.",
    header: <Image src="/logo.png" alt="logo" width={150} height={100} />,
    headerClassName: "justify-center h-screen",
    className: ""
  },
  {
    title: "B.S & M.S in Computer Science",
    headerClassName: "justify-center h-screen",

    description:
      "I am currently enrolled in the acclerated M.S program at IIT and expects to graduate by the December of 2026.",
    header: <Image src="/IIT.png" alt="iit_logo" width={200} height={400} />
  },
  {
    title: "Availablity & Flexibility",
    headerClassName: "justify-center",
    description: "I'm based in Chicago, IL and open to any opportunity.",
    header: <GlobeDemo />
  },
  {
    title: "Technology Stack",
    headerClassName: "justify-center h-screen",

    description:
      "I love solving problems and building things through code and I specialize in various languages, frameworks, and tools to build scalable applications. ",
    header: <TechStack />,
    className: "md:col-span-2"
  },
  {
    title: "Contact Me",
    descriptionClassName:
      "font-sans font-normal text-gray-400 text-center text-md lg:text-xl pb-4",
    description: <ContactCopy />,
    header: (
      <Image
        src="/phone.png"
        alt="phone"
        width={400}
        height={10}
        className="rounded-xl"
      />
    ),
    headerClassName: "justify-center"
  }
];

export default About;
