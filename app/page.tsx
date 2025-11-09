"use client";
import CTA from "@/components/cta";
import Features from "@/components/features";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import Blogs from "@/components/blogs";
import Properties from "@/components/properties";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main className="w-full flex flex-col gap-5 md:gap-8 bg-white">
      <Hero />
      <Features />
      <Properties />
      <HowItWorks />
      <Blogs />
      <Testimonials />
      <CTA />
    </main>
  );
}
