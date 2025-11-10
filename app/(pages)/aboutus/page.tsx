import CTA from "@/components/cta";
import AboutUsFeatures from "@/features/contactus/components/about-us-features";
import AboutusSection from "@/features/contactus/components/aboutus-section";

export default function Page() {
  return (
    <main className="mt-2 lg:mt-24 flex flex-col gap-10">
      <AboutusSection />
      <AboutUsFeatures />
      <CTA />
    </main>
  );
}
