"use client";
import Image, { ImageProps } from "next/image";
import { useState } from "react";

export default function ImageFallback({ src, ...props }: ImageProps) {
  const fallbackUrl = "/fallback-image.webp";
  const [imgSrc, setImgSrc] = useState(src || fallbackUrl);

  return (
    <Image
      {...props}
      src={imgSrc}
      className="object-cover"
      onError={() => {
        setImgSrc(fallbackUrl);
      }}
    />
  );
}
