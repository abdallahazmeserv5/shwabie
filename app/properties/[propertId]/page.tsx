import CTA from "@/components/cta";
import PropertyCarousel from "@/features/properties/property-carousel";
import SingleDetailsProperty from "@/features/properties/single-details-property";

export default function Page() {
  return (
    <main className="mt-14 flex flex-col gap-5">
      <SingleDetailsProperty />
      <PropertyCarousel />
      <CTA />
    </main>
  );
}
