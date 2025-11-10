"use client";

import ImageFallback from "@/components/image-fallback";
import PropertyDetails from "./property-details";
import PropertyImages from "./property-images";
import { cn } from "@/lib/utils";

export default function SingleDetailsProperty({
  secondary = false,
}: {
  secondary?: boolean;
}) {
  return (
    <section className="pt-5 container px-4 mx-auto">
      {/* Triangle Background */}
      <div className="relative flex flex-col items-center justify-end mb-0 pb-0 z-0">
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

        <div
          className={cn(
            "relative z-20 text-center pt-10",
            secondary ? "pb-5" : "pb-20"
          )}
        >
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

      {/* details */}
      <div className="flex flex-col md:flex-row gap-4 mt-5 relative ">
        {/* image of property */}
        <div className="z-10 flex-1">
          <PropertyImages />
        </div>
        {/* details */}
        <div className="z-0 flex-1">
          <PropertyDetails />
        </div>
      </div>
    </section>
  );
}
