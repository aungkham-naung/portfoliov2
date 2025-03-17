import React from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-10 pb-3 border-t-2 feature-border w-full">
      <div className="flex flex-col sm:flex-row items-center justify-center md:justify-between mt-5 gap-y-2 md:gap-y-0">
        <div className="flex gap-3 text-white">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>

        <div className="flex gap-5">
          <a
            href="https://github.com/aungkham-naung"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="h-12 w-12 rounded-full bg-gray-50 flex items-center justify-center ">
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                style={{ color: "#181717" }}
              />
            </div>
          </a>
          <a
            href="mailto:aung.k.naung@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="h-12 w-12 rounded-full bg-gray-50 flex items-center justify-center ">
              <FontAwesomeIcon
                icon={faEnvelope}
                size="2x"
                style={{ color: "D14836" }}
              />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/aung-kham-naung/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="h-12 w-12 rounded-full bg-gray-50 flex items-center justify-center ">
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                style={{ color: "#0A66C2" }}
              />
            </div>
          </a>
        </div>

        <div className="flex justify-center items-center">
          <p className="text-white">
            © {year} Aung Kham Naung. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
