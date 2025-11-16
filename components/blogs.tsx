"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BlogCard from "@/features/blogs/components/blog-card";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { createClient } from "@/lib/ofetch";
import { Root } from "@/features/shared/types";
import { Blog } from "@/features/blogs/types";

export default function FeaturedArticles() {
  const t = useTranslations();
  const dir = useLocale() === "ar" ? "rtl" : "ltr";

  const { data, isLoading } = useQuery({
    queryKey: ["/blogs", 1],
    queryFn: () => createClient().get<Root<Blog[]>>(`/blogs?page=${1}`),
  });

  const blogs = data?.data ?? [];

  const plugin = React.useRef(
    Autoplay({
      delay: 1800,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  return (
    <section className="container mx-auto p-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4  ">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {t("featured_articles_title")}
          </h2>
          <p className="text-gray-500 text-sm">
            {t("featured_articles_subtitle")}
          </p>
        </div>
        <Link
          href="/blogs"
          className="text-emerald-600 text-sm font-medium hover:underline"
        >
          {t("view_all_articles")} ↗
        </Link>
      </div>

      {/* Carousel */}
      <Carousel
        opts={{
          align: "start",
          loop: true,
          direction: dir,
        }}
        plugins={[plugin.current]}
        className="w-full"
      >
        <CarouselContent className="-ml-4 py-4">
          {blogs.map((article, index) => (
            <CarouselItem
              key={index}
              className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <BlogCard article={article} index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation buttons */}
        <div className="flex justify-center gap-2">
          <CarouselPrevious className="relative translate-y-0 border border-gray-300 hover:bg-emerald-600 hover:text-white transition" />
          <CarouselNext className="relative translate-y-0 border border-gray-300 hover:bg-emerald-600 hover:text-white transition" />
        </div>
      </Carousel>
    </section>
  );
}
