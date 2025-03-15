import React from "react";
import ProjectItem from "./ProjectItem";

const projects = [
  {
    title: "StoreIt",
    description:
      "StoreIt is a secure cloud storage solution designed to help individuals store, manage, back up, and share files seamlessly across all devices. With a user-friendly interface and robust functionality, StoreIt ensures smooth file organization and accessibility anytime, anywhere.",
    imgUrl: "/project_ss/drive.png",
    github: "https://github.com/aungkham-naung/storage-drive",
    live: "https://storage-drive-delta.vercel.app/sign-in",
    icons: [
      "reactjs",
      "nextjs2",
      "typescript",
      "appwrite",
      "tailwindcss",
      "shadcnui"
    ]
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
  return (
    <section>
      <h1>Projects</h1>

      <div className="flex flex-col gap-8">
        {projects.map((project) => (
          <ProjectItem
            key={project.title}
            title={project.title}
            description={project.description}
            imgUrl={project.imgUrl}
            github={project.github}
            live={project.live}
            icons={project.icons}
          />
        ))}
      </div>
    </section>
  );
};

export default Project;
