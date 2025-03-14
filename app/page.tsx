import About from "@/components/About";
import Index from "@/components/Index";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-4">
      <Index />
      <About />
    </main>
  );
}
