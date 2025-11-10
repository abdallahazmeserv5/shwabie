"use client";
import Link from "next/link";
import ImageFallback from "./image-fallback";
import { useQuery } from "@tanstack/react-query";
import { createClient } from "@/lib/ofetch";
import { Root } from "react-dom/client";
import { SiteSettings } from "@/features/shared/types";
import { SiteSettingsQuery } from "@/features/shared/query-options";

export default function Logo() {
  const { data } = useQuery(SiteSettingsQuery);

  const logoImage = data?.data.site_logo || "";

  return (
    <Link href={"/"}>
      <ImageFallback
        alt="Logo of shwaipi for renting"
        src={logoImage}
        width={120}
        height={80}
        className="object-contain w-20 md:w-30 md:h-20"
      />
    </Link>
  );
}
