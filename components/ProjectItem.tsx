import React from "react";
import Image from "next/image";

interface ProjectItemProps {
  title: string;
  description: string;
  imgUrl: string;
  github: string;
  icons: string[];
  live?: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  description,
  imgUrl,
  github,
  icons,
  live
}) => {
  return (
    <div className="feature-border feature-bg border-2 text-white px-6 py-4 rounded-xl">
      <Image src={imgUrl} alt={title} width={200} height={200} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{github}</p>
      <ul>
        {icons.map((icon) => (
          <li key={icon}>{icon}</li>
        ))}
      </ul>
      {live && <p>{live}</p>}
    </div>
  );
};

export default ProjectItem;
