"use client";

import { Card } from "@/components/ui/card";
import ImageFallback from "./image-fallback";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useLocale } from "next-intl";

export default function Features() {
  const t = useTranslations();
  const dir = useLocale() === "ar" ? "rtl" : "ltr";
  const plugin = React.useRef(
    Autoplay({
      delay: 2500,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const features = [
    {
      icon: "/home/money-icon.png",
      title: t("feature1_title"),
      description: t("feature1_description"),
    },
    {
      icon: "/home/location-icon.png",
      title: t("feature2_title"),
      description: t("feature2_description"),
    },
    {
      icon: "/home/money-icon.png",
      title: t("feature3_title"),
      description: t("feature3_description"),
    },
    {
      icon: "/home/sales-icon.png",
      title: t("feature4_title"),
      description: t("feature4_description"),
    },
  ];

  return (
    <section className="py-8 sm:py-16 bg-white container px-4 mx-auto border-2 border-gray-200 rounded-md">
      <div className="flex items-center flex-col md:flex-row  sm:gap-10">
        {/* ===== Title for Small Screen ===== */}
        <h2 className="text-3xl font-bold text-gray-900 mb-2 flex sm:hidden text-nowrap flex-wrap text-center">
          {t("features_title")}
          <span className="text-2xl font-bold text-emerald-700 mb-4 ms-2">
            {t("features_subtitle")}
          </span>
        </h2>

        {/* ===== Right Highlight Card (Desktop) ===== */}
        <Card className="relative p-10 hidden sm:block bg-emerald-50 rounded-3xl shadow-none flex-1 overflow-hidden h-[500px] text-right">
          <div className="absolute inset-0">
            <ImageFallback
              src="/home/home-image-bg.webp"
              alt="house"
              fill
              className="object-cover opacity-20"
            />
          </div>

          <div className="relative z-10 flex flex-col">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {t("features_title")}
            </h2>

            <h3 className="text-2xl font-bold text-emerald-700 mb-4">
              {t("features_subtitle")}
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {t("features_description")}
            </p>

            <Button>{t("browse_properties")}</Button>
          </div>
        </Card>

        {/* ===== Features Section ===== */}

        {/* For larger screens → Grid */}
        <motion.div
          className="hidden md:grid grid-cols-2 gap-6 flex-2 w-full"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <Card className="p-6 border rounded-xl shadow-sm hover:shadow-md transition bg-white text-right flex gap-4">
                <div className="flex sm:flex-col items-center gap-2">
                  <div className="size-16 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
                    <ImageFallback
                      alt={feature.title}
                      src={feature.icon}
                      width={64}
                      height={64}
                      className="w-16 h-16"
                    />
                  </div>

                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                    {feature.title}
                  </h3>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* ===== Carousel for Mobile & Tablet ===== */}
        <div className="w-full md:hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              direction: dir,
            }}
            plugins={[plugin.current]}
            className="w-full"
          >
            <CarouselContent className="-ml-4 py-4">
              {features.map((feature, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 basis-full sm:basis-1/2"
                >
                  <Card className="p-6 border rounded-xl shadow-sm hover:shadow-md transition bg-white text-right flex gap-4">
                    <div className="flex items-center gap-4">
                      <div className="size-16 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
                        <ImageFallback
                          alt={feature.title}
                          src={feature.icon}
                          width={64}
                          height={64}
                          className="w-16 h-16"
                        />
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation */}
            <div className="flex justify-center gap-2">
              <CarouselPrevious className="relative translate-y-0 border border-gray-300 hover:bg-emerald-600 hover:text-white transition" />
              <CarouselNext className="relative translate-y-0 border border-gray-300 hover:bg-emerald-600 hover:text-white transition" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
