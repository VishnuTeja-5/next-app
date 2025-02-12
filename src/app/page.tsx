import Image from "next/image";
import { Hero, Section1 } from "@/components";

export default function Home() {
  return (
      <main className="flex flex-col w-full min-h-screen items-center justify-center">
        <Hero />
        <Section1 />
      </main>
  );
}
