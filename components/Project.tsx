"use client";
import React from "react";
import ProjectItem from "./ProjectItem";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "StoreIt - Storage Management Platform",
    description:
      "StoreIt is a secure cloud storage solution designed to help individuals store, manage, back up, and share files seamlessly across all devices. With a user-friendly interface and robust functionality, StoreIt ensures smooth file organization and accessibility anytime, anywhere.",
    imgUrl: "/project_ss/drive.png",
    github: "https://github.com/aungkham-naung/storage-drive",
    live: "https://storage-drive-delta.vercel.app/sign-in",
    icons: ["reactjs", "nextjs2", "typescript", "appwrite", "tailwindcss"]
  },
  {
    title: "Check-in Manager",
    description:
      "Easily manage cabins, bookings, and guest data from one dashboard. Set up rooms, handle check-ins/check-outs, confirm payments, and monitor daily stats—all from a single, shareable link. A convenient way for hotel staff to stay on top of every reservation and guest detail.",
    imgUrl: "/project_ss/hotel.png",
    github: "https://github.com/aungkham-naung/hotel-management-application",
    live: "https://hotel-management-application-mu.vercel.app/",
    icons: ["reactjs", "js", "supabase", "reactrouter"]
  },
  {
    title: "YelpCamp",
    description:
      "Discover and rate campgrounds, add your own with images, and share reviews—all in one place. An interactive map projects exploring locations, and secure user accounts keep your data private. Perfect for outdoor enthusiasts looking to find, create, and discuss the best camping spots.",
    imgUrl: "/project_ss/camp.png",
    github: "https://github.com/aungkham-naung/yelp-camp",
    live: "https://yelp-camp-01ps.onrender.com",
    icons: ["js", "nodejs", "mongodb", "cloudinary", "css3"]
  },
  {
    title: "usePopcorn",
    description:
      "An application built with dynamic and interactive platform for movie enthusiasts to explore, catalog, and manage their favorite films. It fetches real-time movie data from the OMDb API, offering users an engaging and responsive experience for browsing, reviewing, and tracking watched movies.",
    imgUrl: "/project_ss/movies.png",
    github: "https://github.com/aungkham-naung/movie-list-application",
    icons: ["reactjs", "js", "vitejs", "css3"]
  },
  {
    title: "Pizza Menu",
    description:
      "Application that lets users easily browse, customize, and order pizzas from an online menu. It provides an interactive and user-friendly interface, allowing users to see real-time availability (sold out or available items), add pizzas to the cart, and prioritize items with a surcharge.",
    imgUrl: "/project_ss/menu.png",
    github: "https://github.com/aungkham-naung/pizza-menu",
    icons: ["reactjs", "js", "redux", "tailwindcss"]
  },
  {
    title: "ClearPolicy",
    description:
      "ClearPolicy is a lightweight Chrome extension designed to simplify the way users interact with complex privacy policies and terms & conditions. It empowers users to make informed decisions about signing up for online services by identifying and summarizing problematic or concerning clauses.",
    imgUrl: "/project_ss/paypal.png",
    github: "https://github.com/MitChaudhari/ClearPolicy",
    icons: ["js", "openai", "html5", "bootstrap5"]
  }
];

const Project = () => {
  const [index, setIndex] = React.useState(0);
  const totalProjects = projects.length;

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? totalProjects - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex === totalProjects - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="mt-10 mb-10">
      <div className="flex justify-start">
        <h1 className="text-4xl text-white mb-7 font-bold ">Projects</h1>
      </div>

      <div className="flex flex-col gap-8">
        <AnimatePresence>
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <ProjectItem
              {...projects[index]}
              onPrev={handlePrev}
              onNext={handleNext}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Project;
