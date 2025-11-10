import ImageFallback from "@/components/image-fallback";
import { BlogDetails } from "@/features/blogs/types";
import { Root } from "@/features/shared/types";
import { createClient } from "@/lib/ofetch";

export default async function Page({
  params,
}: {
  params: Promise<{ blogSlug: string }>;
}) {
  const { blogSlug } = await params;

  const blogRes = await createClient().get<Root<BlogDetails>>(
    `/blog/${blogSlug}`
  );
  const blogDetails = blogRes.data;
  console.log({ blogDetails });

  return (
    <section className="container mx-auto px-4 my-5">
      <div className="rounded-md relative overflow-hidden h-60 sm:h-100">
        <ImageFallback
          src={blogDetails.author_image}
          alt={blogDetails.title}
          fill
        />
      </div>
    </section>
  );
}
