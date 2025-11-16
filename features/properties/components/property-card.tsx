"use client";

import { Card } from "@/components/ui/card";
import { Heart, MapPin } from "lucide-react";
import ImageFallback from "@/components/image-fallback";
import { Separator } from "@/components/ui/separator";
import { Property } from "../types";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useDirection } from "@/hooks/use-direction";

export function PropertyCard({
  property,
  isFavorite,
  toggleFavorite,
}: {
  property: Property;
  isFavorite: boolean;
  toggleFavorite: (id: number) => void;
}) {
  const t = useTranslations(); // flat translation keys
  const { isRtl } = useDirection();
  return (
    <Card
      dir={isRtl ? "rtl" : "ltr"}
      className="hover:shadow-xl pt-0 transition duration-300 border-0 rounded-2xl bg-white flex flex-col h-full"
    >
      {/* Image */}
      <div className="relative h-48 w-full rounded-t-2xl overflow-hidden">
        <ImageFallback
          src={property.thumbnail}
          alt={property.name || t("propertyNameUnavailable")}
          fill
          className="object-cover"
        />

        {/* Favorite Button */}
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

        {/* Badge */}
        <div className="w-[104px] h-10 rounded-2xl absolute -bottom-1 -left-2">
          <ImageFallback
            src="/home/bg-badge.png"
            alt={t("badgeAlt")}
            className="w-full h-full object-contain"
            fill
          />
          <span className="text-white absolute top-1 -translate-x-1/3 left-1/2 text-sm font-bold z-10">
            {t("featured")}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-3 space-y-2 flex flex-col justify-between grow min-h-[210px]">
        <div className="space-y-2">
          <h3 className="text-[#000929] font-bold text-base line-clamp-1">
            <Link href={`/properties/${property.slug}`}>
              {property.name || t("propertyNameUnavailable")}
            </Link>
          </h3>

          <p className="text-lg font-bold text-gray-900">
            <span className="text-[#808494] font-normal mx-1">
              {t("priceLabel")} /
            </span>
            <span className="text-primary mx-1">
              {property.price ? property.price : "—"}
            </span>
            <span className="text-sm text-gray-600">
              {property.currency || ""}
            </span>
          </p>

          <div className="flex items-center gap-1 text-muted-foreground">
            <MapPin size={16} />
            <span className="text-sm">
              {property.city && property.country
                ? `${property.city}, ${property.country}`
                : t("locationUnavailable")}
            </span>
          </div>
        </div>

        <div>
          <Separator className="bg-muted mb-2" />

          {/* Features */}
          {property.features && property.features.length > 0 ? (
            <div className="flex items-center flex-wrap gap-2">
              {property.features.slice(0, 3).map((feature) => (
                <div
                  key={feature.id}
                  className="flex items-center gap-1 text-sm text-gray-600 bg-gray-100 rounded-full px-2 py-1"
                >
                  <ImageFallback
                    src={feature.image}
                    alt={feature.name}
                    width={16}
                    height={16}
                    className="rounded-sm object-cover"
                  />
                  <span>{feature.name}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="h-7 flex items-center text-xs text-gray-400 italic">
              {t("noFeatures")}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
