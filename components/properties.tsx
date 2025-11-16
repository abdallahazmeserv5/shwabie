"use client";

import { useState } from "react";
import PropertyFilter from "./property-filter";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Pagnation from "@/features/properties/components/pagnation";
import { PropertyCard } from "@/features/properties/components/property-card";
import PropertyFilterForm from "@/features/properties/components/property-filter-form";
import {
  PropertiesDataQuery,
  FiltersDataQuery,
} from "@/features/properties/query-options";
import Triangle from "@/features/shared/components/triangle";
import { useQuery } from "@tanstack/react-query";
import Autoplay from "embla-carousel-autoplay";
import { useLocale, useTranslations } from "next-intl";
import { useSearchParams, useRouter } from "next/navigation";
import * as React from "react";
import Breadcrumb from "./breadcrumb";

export default function Properties({
  secondary = false,
}: {
  secondary?: boolean;
}) {
  const [favorites, setFavorites] = useState<number[]>([]);
  const locale = useLocale();
  const t = useTranslations(); // flat keys
  const dir = locale === "ar" ? "rtl" : "ltr";

  const searchParams = useSearchParams();
  const router = useRouter();

  // Fetch
  const { data, isLoading, error } = useQuery(
    PropertiesDataQuery(searchParams)
  );
  const { data: filtersData } = useQuery(FiltersDataQuery);

  const properties = data?.data || [];
  const filters = filtersData?.data;

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  // Pagination
  const currentPage = data?.meta?.current_page || 1;
  const lastPage = data?.meta?.last_page || 1;

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`?${params.toString()}`, { scroll: true });
  };

  // Carousels
  const half = Math.round((properties.length || 0) / 2);
  const firstRow = properties.slice(0, half);
  const secondRow = properties.slice(half);

  const firstPluginForward = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: false, stopOnMouseEnter: false })
  );

  const secondPluginForward = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: false, stopOnMouseEnter: false })
  );

  return (
    <section className="pt-10 2xl:pt-28 container px-4 mx-auto">
      <Triangle>
        <div className="relative z-20 text-center flex flex-col items-center gap-5 pb-20">
          {secondary && (
            <Breadcrumb
              items={[
                { title: t("home"), href: "/" },
                { title: t("propertiesTitle"), href: "/properties" },
              ]}
            />
          )}

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-primary mx-2 inline-block">
              {t("propertiesTitle")}
            </span>
            {t("carefullySelected")}
          </h2>

          {!secondary && (
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              {t("chooseFromHundreds")}
            </p>
          )}
        </div>
      </Triangle>

      <div className="bg-[#e8fdf5] p-4 -mt-12 relative z-10">
        <PropertyFilter />

        {secondary && <PropertyFilterForm filters={filters} />}

        {isLoading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            <p className="mt-4 text-gray-600">{t("loading")}</p>
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <p className="text-red-600">{t("error")}</p>
          </div>
        )}

        {!isLoading && !error && properties.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">{t("noResults")}</p>
          </div>
        )}

        {!isLoading && !error && properties.length > 0 && (
          <>
            {secondary ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-6">
                {properties.map((property) => (
                  <PropertyCard
                    key={property.id}
                    property={property}
                    isFavorite={favorites.includes(property.id)}
                    toggleFavorite={toggleFavorite}
                  />
                ))}
              </div>
            ) : (
              <>
                <Carousel
                  opts={{ align: "center", loop: true, direction: dir }}
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

                <Carousel
                  dir="ltr"
                  opts={{ align: "center", loop: true, direction: "ltr" }}
                  plugins={[secondPluginForward.current]}
                  className="mt-8"
                >
                  <CarouselContent className="-ml-4 py-2">
                    {secondRow.map((property) => (
                      <CarouselItem
                        key={property.id}
                        className="pl-4 basis-3/4 sm:basis-1/2 md:basis-1/3 xl:basis-1/4"
                      >
                        <div dir={dir}>
                          <PropertyCard
                            property={property}
                            isFavorite={favorites.includes(property.id)}
                            toggleFavorite={toggleFavorite}
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </>
            )}
          </>
        )}

        {secondary && !isLoading && properties.length > 0 && (
          <Pagnation
            currentPage={currentPage}
            lastPage={lastPage}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </section>
  );
}
