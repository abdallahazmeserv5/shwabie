import CTA from "@/components/cta";
import Features from "@/components/features";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import Blogs from "@/components/blogs";
import Properties from "@/components/properties";
import Testimonials from "@/components/testimonials";
import { createQueryClient } from "@/lib/query-client";
import { createClient } from "@/lib/ofetch";
import { Root } from "@/features/shared/types";
import { Blog } from "@/features/blogs/types";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { HomeDataQuery } from "@/features/shared/query-options";
import { PropertiesDataQuery } from "@/features/properties/query-options";

export default async function Home() {
  const queryClient = createQueryClient();

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: ["/blogs?page=1"],
      queryFn: () => createClient().get<Root<Blog[]>>("/blogs?page=1"),
    }),
    queryClient.prefetchQuery(HomeDataQuery),
    queryClient.prefetchQuery(PropertiesDataQuery()),
  ]);

  return (
    <main className="w-full flex flex-col gap-5 md:gap-8 bg-white">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Hero />
        <Features />
        <Properties />
        <HowItWorks />
        <Blogs />
        <Testimonials />
        <CTA />
      </HydrationBoundary>
    </main>
  );
}
