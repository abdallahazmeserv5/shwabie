import CTA from "@/components/cta";
import AboutUsFeatures from "@/features/contactus/components/about-us-features";
import FontactusForm from "@/features/contactus/components/contactus-form";

export default function Page() {
  return (
    <main className="mt-2 lg:mt-24 flex flex-col gap-10">
      <FontactusForm />
      <AboutUsFeatures />
      <CTA />
    </main>
  );
}
