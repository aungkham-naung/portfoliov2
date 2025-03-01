import {
  faGithub,
  faLinkedin,
  IconDefinition
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import React from "react";

interface SocialIconItems {
  title: string;
  icon: IconDefinition;
  color: string;
  href: string;
}

const socialDockItems: SocialIconItems[] = [
  {
    title: "GitHub",
    icon: faGithub,
    color: "#181717",
    href: "https://github.com/aungkham-naung"
  },
  {
    title: "Email",
    icon: faEnvelope,
    color: "D14836",
    href: "mailto:aung.k.naung@gmail.com"
  },
  {
    title: "LinkedIn",
    icon: faLinkedin,
    color: "#0A66C2",
    href: "https://www.linkedin.com/in/aung-kham-naung/"
  }
];

const SocialIcons = () => {
  return (
    <div className="flex min-w-full flex-row justify-evenly mt-12">
      {socialDockItems.map((item) => (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          key={item.title}
        >
          <div className="h-12 w-12 rounded-full bg-gray-50 flex items-center justify-center transition-transform duration-200 hover:scale-150">
            <FontAwesomeIcon
              icon={item.icon}
              className="h-6 w-6"
              style={{ color: item.color }}
            />
          </div>
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
