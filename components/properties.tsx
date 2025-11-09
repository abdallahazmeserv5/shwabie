"use client";

import { useState } from "react";
import ImageFallback from "./image-fallback";
import PropertyFilter from "./property-filter";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { PropertyCard } from "@/features/properties/property-card";
import Autoplay from "embla-carousel-autoplay";
import { useLocale } from "next-intl";
import * as React from "react";
import Link from "next/link";
import PropertiesPagnation from "@/features/properties/properties-pagnation";

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
  const links = [
    { href: "/", name: "الرئيسية" },
    { href: "/properties", name: "العقارات" },
  ];
  const [favorites, setFavorites] = useState<number[]>([]);
  const dir = useLocale() === "ar" ? "rtl" : "ltr";

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  // Split properties into 2 rows of 4
  const firstRow = properties.slice(0, 4);
  const secondRow = properties.slice(4);

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
      <div className="relative flex flex-col items-center justify-end mb-0 pb-0 z-0">
        {/* Triangle Background */}
        <div className="absolute inset-0 w-full h-full flex items-end justify-center pointer-events-none -z-10">
          <div className="relative w-full h-[295px]">
            <ImageFallback
              src="/home/triangle.png"
              alt="Triangle Background"
              fill
              className="object-contain object-bottom"
            />
          </div>
        </div>

        <div className="relative z-20 text-center pb-20">
          {/* <div className=" flex items-center">
            {links.map((link) => {
              return (
                <div className="gap-1">
                  <Link href={link.href}>{link.name}</Link>
                </div>
              );
            })}
          </div> */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-primary mx-2 inline-block">عقارات</span>{" "}
            منتقاة بعناية
          </h2>
          {!secondary && (
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              اختر من بين مئات العقارات المتاحة في أفضل المواقع
            </p>
          )}
        </div>
      </div>

      <div className="bg-[#e8fdf5] p-4 -mt-12 relative z-10">
        <PropertyFilter />
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
        {secondary && <PropertiesPagnation />}
      </div>
    </section>
  );
}
