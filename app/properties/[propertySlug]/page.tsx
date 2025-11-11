import CTA from "@/components/cta";
import PropertyCarousel from "@/features/properties/components/property-carousel";
import SingleDetailsProperty from "@/features/properties/components/single-details-property";
import {
  PropertiesDataQuery,
  PropertyDataQuery,
} from "@/features/properties/query-options";
import { createQueryClient } from "@/lib/query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function Page({
  params,
}: {
  params: Promise<{ propertySlug: string }>;
}) {
  const { propertySlug } = await params;
  const queryClient = createQueryClient();

  await Promise.all([
    queryClient.prefetchQuery(PropertyDataQuery(propertySlug)),
    queryClient.prefetchQuery(PropertiesDataQuery),
  ]);

  console.log({ propertySlug });
  return (
    <main className="mt-2 lg:mt-24 flex flex-col gap-10">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <SingleDetailsProperty />
        <PropertyCarousel />
        <CTA />
      </HydrationBoundary>
    </main>
  );
}
