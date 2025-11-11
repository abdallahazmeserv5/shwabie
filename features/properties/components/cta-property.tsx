import ImageFallback from "@/components/image-fallback";
import { Button } from "@/components/ui/button";
import React from "react";
import FastBuyingDialog from "./fast-buying-dialog";
import { Property } from "../types";
import { useQuery } from "@tanstack/react-query";
import { SiteSettingsQuery } from "@/features/shared/query-options";
import Link from "next/link";

export default function CtaProperty({ property }: { property: Property }) {
  const { data } = useQuery(SiteSettingsQuery);

  return (
    <div className="flex flex-col sm:flex-row items-center gap-5 my-5">
      <FastBuyingDialog />
      <Button
        variant="outline"
        className="border-2 border-primary text-primary bg-white px-10 py-5 min-w-[210px]"
        asChild
      >
        <Link
          href={`https://wa.me/${
            data?.data.site_phone || ""
          }?text=${encodeURIComponent(
            "اريد احجز هذا العقار :" + property.name || ""
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImageFallback
            src="/whatsapp.png"
            width={24}
            height={24}
            alt="Whatsapp logo"
            className="size-6"
          />
          تواصل واتساب
        </Link>
      </Button>
    </div>
  );
}
