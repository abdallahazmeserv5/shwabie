"use client";

import { Card } from "@/components/ui/card";
import { DoorOpen, Heart, MapPin, Maximize2 } from "lucide-react";

import ImageFallback from "@/components/image-fallback";
import { Separator } from "@/components/ui/separator";

export function PropertyCard({
  property,
  isFavorite,
  toggleFavorite,
}: {
  property: any;
  isFavorite: boolean;
  toggleFavorite: (id: number) => void;
}) {
  return (
    <Card className="hover:shadow-xl gap-2 transition duration-300 border-0 rounded-2xl bg-white pt-0">
      {/* Image */}
      <div className="relative h-48 w-full rounded-t-2xl overflow-hidden">
        <ImageFallback
          src={property.image}
          alt={property.location}
          fill
          className="object-cover"
        />

        <button
          onClick={() => toggleFavorite(property.id)}
          className="absolute cursor-pointer top-3 right-3 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition"
        >
          <Heart
            size={20}
            className={
              isFavorite
                ? "fill-red-500 text-red-500"
                : "text-gray-400 hover:text-red-500"
            }
          />
        </button>

        <div className="w-[104px] h-10 rounded-2xl absolute -bottom-1 -left-2">
          <ImageFallback
            src="/home/bg-badge.png"
            alt="Background"
            className="w-full h-full object-contain"
            fill
          />
          <span className="text-white absolute top-1 -translate-x-1/3 left-1/2 text-sm font-bold z-10">
            مميزة
          </span>
        </div>
      </div>

      {/* Text */}
      <div className="p-2 space-y-2">
        <h3 className="text-[#000929] font-bold">شقة فاخرة في جدة</h3>
        <p className="font-bold text-lg text-gray-900">
          <span className="text-[#808494] font-normal mx-1">الشهر /</span>
          <span className="text-primary mx-1">{property.price}</span> ريال
        </p>

        <div className="flex items-center gap-1 text-muted-foreground">
          <MapPin size={16} />
          <span className="text-sm">{property.location}</span>
        </div>

        <Separator className="bg-muted" />

        <div className="flex items-center justify-between gap-1 md:gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <DoorOpen className="text-primary" size={16} />
            <span>{property.beds} غرف</span>
          </div>
          <div className="flex items-center gap-1">
            <Maximize2 className="text-primary" size={16} />
            <span>{property.area}</span>
          </div>
          <div className="flex items-center gap-1">
            <DoorOpen className="text-primary" size={16} />
            <span>{property.baths} حمام</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
