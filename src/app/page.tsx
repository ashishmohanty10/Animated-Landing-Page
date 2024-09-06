import About from "@/components/about";
import Eyes from "@/components/eyes";
import Hero from "@/components/hero-page";
import Marquee from "@/components/marquee";

export default function Home() {
  return (
    <main className="w-full  min-h-screen bg-zinc-900">
      <Hero />
      <Marquee />
      <About />
      <Eyes />
    </main>
  );
}
