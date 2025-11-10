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
import { useLocale } from "next-intl";
import TestemonialsCard from "@/features/testemonials/components/testemonials-card";
import { useQuery } from "@tanstack/react-query";
import { HomeDataQuery } from "@/features/shared/query-options";

export default function FeaturedArticles() {
  const { data } = useQuery(HomeDataQuery);
  const dir = useLocale() === "ar" ? "rtl" : "ltr";
  const plugin = React.useRef(
    Autoplay({
      delay: 1800,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const testimonials = data?.data.testimonials || [];

  return (
    <section className="container mx-auto p-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center  gap-4 ">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            ماذا يقول عملائنا{" "}
          </h2>
          <p className="text-gray-500 text-sm">بعض الآراء من تجارب عملائنا </p>
        </div>
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
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3  "
            >
              <TestemonialsCard testimonial={testimonial} index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation buttons */}
        <div className="flex justify-center gap-2 mt-4">
          <CarouselPrevious className="relative translate-y-0   border border-gray-300 hover:bg-emerald-600 hover:text-white transition" />
          <CarouselNext className="relative translate-y-0   border border-gray-300 hover:bg-emerald-600 hover:text-white transition" />
        </div>
      </Carousel>
    </section>
  );
}
