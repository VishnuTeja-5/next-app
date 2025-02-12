import { Hero, Section1, Section2, Section3 } from "@/components";

export default function Home() {
  return (
      <main className="relative flex flex-col w-full min-h-screen items-center justify-center">
        <Hero />
        <Section1 />
        <Section2 />
        <Section3 />
        
      </main>
  );
}
