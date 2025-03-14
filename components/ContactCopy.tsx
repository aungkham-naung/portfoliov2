"use client";

import { useState } from "react";
import Image from "next/image";
import React from "react";

const ContactCopy = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("aung.k.naung@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div onClick={handleCopy}>
      <p className="flex items-center justify-center space-x-2 cursor-pointer text-neutral-100s">
        <Image
          src={copied ? "/tick.svg" : "/copy.svg"}
          alt="copy"
          height={24}
          width={24}
        />
        <span>aung.k.naung@gmail.com</span>
      </p>
    </div>
  );
};

export default ContactCopy;
