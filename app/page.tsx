"use client";
import CTA from "@/components/cta";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import Portfolio from "@/components/portfolio";
import Properties from "@/components/properties";
import Statistics from "@/components/statistics";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main className="w-full flex flex-col gap-5 md:gap-10 bg-white">
      <Hero />
      <Features />
      <Properties />
      <HowItWorks />
      <Statistics />
      <Portfolio />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
