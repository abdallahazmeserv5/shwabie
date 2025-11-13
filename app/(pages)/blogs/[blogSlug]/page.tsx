import { createClient } from "@/lib/ofetch";
import { Root } from "@/features/shared/types";
import { BlogDetails as BlogDetailsType } from "@/features/blogs/types";
import BlogDetails from "@/features/blogs/components/blog-details";

export default async function Page({
  params,
}: {
  params: Promise<{ blogSlug: string }>;
}) {
  const { blogSlug } = await params;

  const blogRes = await createClient().get<Root<BlogDetailsType>>(
    `/blog/${blogSlug}`
  );

  const blogDetails = blogRes.data;

  return <BlogDetails blogDetails={blogDetails} />;
}
