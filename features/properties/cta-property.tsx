import ImageFallback from "@/components/image-fallback";
import { Button } from "@/components/ui/button";
import React from "react";
import FastBuyingDialog from "./fast-buying-dialog";

export default function CtaProperty() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-5 my-5">
      <FastBuyingDialog />
      <Button
        variant={"outline"}
        className="border-2 border-primary text-primary bg-white px-10 py-5  min-w-[210px]"
      >
        <ImageFallback
          src={"/whatsapp.png"}
          width={24}
          height={24}
          alt="Whatsapp logo"
          className="size-6"
        />
        تواصل واتساب
      </Button>
    </div>
  );
}
