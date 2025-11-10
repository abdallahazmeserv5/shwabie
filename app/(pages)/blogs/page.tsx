import CTA from "@/components/cta";
import BlogsList from "@/features/blogs/components/blogs-list";
import { Blog } from "@/features/blogs/types";
import { Root } from "@/features/shared/types";
import { createClient } from "@/lib/ofetch";
import { createQueryClient } from "@/lib/query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function Page() {
  const queryClient = createQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["/blogs?page=1"],
    queryFn: () => createClient().get<Root<Blog[]>>("/blogs?page=1"),
  });

  return (
    <main className="mt-14">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <BlogsList />
      </HydrationBoundary>
      <CTA />
    </main>
  );
}
