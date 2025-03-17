"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconDeviceDesktop, IconUser } from "@tabler/icons-react";
export default function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-black dark:text-white" />
    },
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-4 w-4 text-black dark:text-white" />
    },
    {
      name: "Projects",
      link: "#project",
      icon: <IconDeviceDesktop className="h-4 w-4 text-black dark:text-white" />
    }
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
