"use client";

import { useRef, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PropertyCard } from "@/features/properties/components/property-card";
import { useQuery } from "@tanstack/react-query";
import Autoplay from "embla-carousel-autoplay";
import { useLocale } from "next-intl";
import { PropertiesDataQuery } from "../query-options";

export default function PropertyCarousel() {
  const { data } = useQuery(PropertiesDataQuery());

  const property = data?.data || [];
  const [favorites, setFavorites] = useState<number[]>([]);
  const dir = useLocale() === "ar" ? "rtl" : "ltr";
  const firstPluginForward = useRef(
    Autoplay({
      delay: 2500,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    })
  );

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };
  return (
    <section className="container mx-auto px-4">
      <div className="flex flex-col gap-6 text-[#054457]">
        <h2 className=" font-semibold text-2xl xl:text-5xl">عقارات مشابهة</h2>
        <p className="  ">بعض المقالات الأكثر قراءة من مدونتنا</p>
      </div>
      <Carousel
        opts={{
          align: "center",
          loop: true,
          direction: dir,
        }}
        plugins={[firstPluginForward.current]}
        className="mt-6 "
      >
        <CarouselContent className="-ml-4 py-2">
          {property.map((property) => (
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
        <div className="flex justify-center gap-1 mt-2">
          <CarouselPrevious className="relative translate-y-0   border border-gray-300 hover:bg-emerald-600 hover:text-white transition" />
          <CarouselNext className="relative translate-y-0   border border-gray-300 hover:bg-emerald-600 hover:text-white transition" />
        </div>
      </Carousel>
    </section>
  );
}
