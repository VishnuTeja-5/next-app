import { Hero, Section1, Section2, Section3, Section4, Section5, Section6, Section7, Section8, Section9 } from "@/components";

export default function Home() {
  return (
      <main className="relative flex flex-col w-full min-h-screen items-center overflow-y-hidden justify-center">
        <Hero />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
        
      </main>
  );
}
