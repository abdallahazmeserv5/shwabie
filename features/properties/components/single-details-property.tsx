"use client";

import ImageFallback from "@/components/image-fallback";
import PropertyDetails from "./property-details";
import PropertyImages from "./property-images";
import { cn } from "@/lib/utils";
import Triangle from "@/features/shared/components/triangle";
import Breadcrumb from "@/components/breadcrumb";
import {
  notFound,
  useParams,
  usePathname,
  useSearchParams,
} from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { PropertyDataQuery } from "../query-options";

export default function SingleDetailsProperty({
  secondary = false,
}: {
  secondary?: boolean;
}) {
  const { propertySlug } = useParams();
  const { data } = useQuery(PropertyDataQuery(propertySlug as string));

  const property = data?.data;

  if (!property) {
    return notFound();
  }
  return (
    <section className="pt-5 container px-4 mx-auto">
      {/* Triangle Background */}
      <Triangle>
        <div
          className={cn(
            "relative z-20 text-center flex flex-col items-center gap-4 pt-10 2xl:pb-20"
          )}
        >
          <Breadcrumb
            items={[
              { title: "الرئيسية", href: "/" },
              { title: "العقارات", href: "/properties" },
            ]}
          />

          <h2 className="text-3xl md:text-4xl font-bold text-primary  mb-4">
            {property?.name}
          </h2>
          {!secondary && (
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              {property?.description}
            </p>
          )}
        </div>
      </Triangle>

      {/* details */}
      <div className="flex flex-col md:flex-row gap-4 mt-5 relative ">
        {/* image of property */}
        <div className="z-10 flex-1">
          <PropertyImages property={property} />
        </div>
        {/* details */}
        <div className="z-0 flex-1">
          <PropertyDetails property={property} />
        </div>
      </div>
    </section>
  );
}
