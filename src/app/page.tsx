"use client";

import About from "@/components/about";
import Cards from "@/components/cards";
import Eyes from "@/components/eyes";
import Featured from "@/components/featured";
import Footer from "@/components/footer";
import Hero from "@/components/hero-page";
import Marquee from "@/components/marquee";
import LocomotiveScroll from "locomotive-scroll";

export default function Home() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <main className="w-full  min-h-screen bg-zinc-900 text-white">
      <Hero />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
    </main>
  );
}
