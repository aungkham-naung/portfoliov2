import About from "@/components/About";
import Contact from "@/components/Contact";
import Index from "@/components/Index";
import Project from "@/components/Project";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-4">
      <Index />
      <About />
      <Project />
      <Contact />
    </main>
  );
}
