import Link from "next/link";
import React from "react";
import ImageFallback from "./image-fallback";

export default function Logo() {
  return (
    <Link href={"/"}>
      <ImageFallback
        alt="Logo of shwaipi for renting"
        src={"/header/shwaibi-logo.webp"}
        width={191}
        height={129}
        className="object-contain w-20 md:w-[191px] md:h-[129px]"
      />
    </Link>
  );
}
