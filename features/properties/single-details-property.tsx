"use client";

import ImageFallback from "@/components/image-fallback";
import PropertyDetails from "./property-details";

export default function SingleDetailsProperty({
  secondary = false,
}: {
  secondary?: boolean;
}) {
  return (
    <section className="pt-10 2xl:pt-28 container px-4 mx-auto">
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

      {/* details */}
      <div className="flex items-center gap-4 ">
        {/* image of property */}
        <div className="relative flex-1 border-2 border-gray-200 rounded-md h-[783px]">
          <div className="relative h-full w-[80%]">
            <ImageFallback
              src={"/property-image.webp"}
              alt="Properties"
              fill
              className="object-contain absolute bottom-0 start-0"
            />
          </div>
        </div>
        {/* details */}
        <PropertyDetails />
      </div>
    </section>
  );
}
