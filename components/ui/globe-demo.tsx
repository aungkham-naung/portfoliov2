import { Globe } from "../magicui/globe";

export function GlobeDemo() {
  return (
    <div className="relative flex size-full max-w-fit items-center justify-center overflow-hidden rounded-lg px-30 md:px-25 lg:px-30 pb-40 pt-8 ">
      <Globe />
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
    </div>
  );
}
