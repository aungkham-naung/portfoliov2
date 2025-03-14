import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  descriptionClassName,
  description,
  header,
  headerClassName,
  icon
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  descriptionClassName?: string;
  header?: React.ReactNode;
  headerClassName?: string;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento transition duration-200 shadow-input dark:shadow-none p-4  dark:border-white/[0.2] border feature-border feature-bg justify-between flex flex-col space-y-4 h-[22rem] md:h-auto",
        className
      )}
    >
      <div className={`flex items-center ${headerClassName}`}>{header}</div>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-200 mb-2 mt-2 text-md lg:text-xl">
          {title}
        </div>
        <div
          className={
            descriptionClassName ||
            "font-sans font-normal text-gray-400 text-xs md:text-sm dark:text-neutral-300"
          }
        >
          {description}
        </div>
      </div>
    </div>
  );
};
