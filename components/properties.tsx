"use client";

import { useState } from "react";
import ImageFallback from "./image-fallback";
import PropertyFilter from "./property-filter";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { PropertyCard } from "@/features/properties/components/property-card";
import Autoplay from "embla-carousel-autoplay";
import { useLocale } from "next-intl";
import * as React from "react";
import Link from "next/link";
import PropertiesPagnation from "@/features/properties/components/pagnation";
import Pagnation from "@/features/properties/components/pagnation";
import Triangle from "@/features/shared/components/triangle";
import Breadcrumb from "./breadcrumb";
import PropertyFilterForm from "@/features/properties/components/property-filter-form";
import { useQuery } from "@tanstack/react-query";
import { PropertyDataQuery } from "@/features/properties/query-options";

type Property = {
  id: number;
  image: string;
  price: string;
  beds: number;
  baths: number;
  area: string;
  location: string;
};

export const properties: Property[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4",
    price: "950,000",
    beds: 3,
    baths: 2,
    area: "250 م²",
    location: "حي النخيل",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    price: "850,000",
    beds: 4,
    baths: 3,
    area: "300 م²",
    location: "حي الياسمين",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    price: "750,000",
    beds: 3,
    baths: 2,
    area: "220 م²",
    location: "حي الورود",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1599427303058-f04cbcf4756f",
    price: "1,200,000",
    beds: 5,
    baths: 4,
    area: "400 م²",
    location: "حي الزهور",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4",
    price: "950,000",
    beds: 3,
    baths: 2,
    area: "250 م²",
    location: "حي النخيل",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    price: "850,000",
    beds: 4,
    baths: 3,
    area: "300 م²",
    location: "حي الياسمين",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    price: "750,000",
    beds: 3,
    baths: 2,
    area: "220 م²",
    location: "حي الورود",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1599427303058-f04cbcf4756f",
    price: "1,200,000",
    beds: 5,
    baths: 4,
    area: "400 م²",
    location: "حي الزهور",
  },
];

export default function Properties({
  secondary = false,
}: {
  secondary?: boolean;
}) {
  const [favorites, setFavorites] = useState<number[]>([]);
  const dir = useLocale() === "ar" ? "rtl" : "ltr";

  const { data } = useQuery(PropertyDataQuery);

  const properties = data?.data || [];
  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const half = Math.round((data?.data.length || 0) / 2);
  const firstRow = properties.slice(0, half);
  const secondRow = properties.slice(half);

  // Embla autoplay plugin (different directions)
  const firstPluginForward = React.useRef(
    Autoplay({
      delay: 2500,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    })
  );
  const secondPluginForward = React.useRef(
    Autoplay({
      delay: 2500,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    })
  );

  return (
    <section className="pt-10 2xl:pt-28 container px-4 mx-auto">
      <Triangle>
        <div className="relative z-20 text-center flex flex-col items-center gap-5 pb-20">
          <Breadcrumb
            items={[
              { title: "الرئيسية", href: "/" },
              { title: "العقارات", href: "/properties" },
            ]}
          />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-primary mx-2 inline-block">عقارات</span>
            منتقاة بعناية
          </h2>
          {!secondary && (
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              اختر من بين مئات العقارات المتاحة في أفضل المواقع
            </p>
          )}
        </div>
      </Triangle>

      <div className="bg-[#e8fdf5] p-4 -mt-12 relative z-10">
        <PropertyFilter />
        {secondary && <PropertyFilterForm />}
        {/* ===== Row 1 Carousel ===== */}
        <Carousel
          opts={{
            align: "center",
            loop: true,
            direction: dir,
          }}
          plugins={[firstPluginForward.current]}
          className="mt-6"
        >
          <CarouselContent className="-ml-4 py-2">
            {firstRow.map((property) => (
              <CarouselItem
                key={property.id}
                className="pl-4 basis-3/4 sm:basis-1/2 md:basis-1/3 xl:basis-1/4"
              >
                <PropertyCard
                  property={property}
                  isFavorite={favorites.includes(property.id)}
                  toggleFavorite={toggleFavorite}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        {/* ===== Row 2 Carousel (opposite direction) ===== */}
        <Carousel
          dir="ltr"
          opts={{
            align: "center",
            loop: true,
            direction: "ltr",
          }}
          plugins={[secondPluginForward.current]}
          className="mt-8"
        >
          <CarouselContent className="-ml-4 py-2 text-end">
            {secondRow.map((property) => (
              <CarouselItem
                key={property.id}
                className="pl-4 basis-3/4 sm:basis-1/2 md:basis-1/3 xl:basis-1/4"
              >
                <PropertyCard
                  property={property}
                  isFavorite={favorites.includes(property.id)}
                  toggleFavorite={toggleFavorite}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        {secondary && (
          <Pagnation
            currentPage={1}
            lastPage={1}
            onPageChange={() => console.log(" i got clicked")}
          />
        )}
      </div>
    </section>
  );
}
