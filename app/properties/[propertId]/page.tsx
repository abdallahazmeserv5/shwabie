import CTA from "@/components/cta";
import PropertyCarousel from "@/features/properties/components/property-carousel";
import SingleDetailsProperty from "@/features/properties/components/single-details-property";

export default function Page() {
  return (
    <main className="mt-2 lg:mt-24 flex flex-col gap-10">
      <SingleDetailsProperty />
      <PropertyCarousel />
      <CTA />
    </main>
  );
}
