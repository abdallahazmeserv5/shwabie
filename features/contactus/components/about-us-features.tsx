"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ImageFallback from "@/components/image-fallback";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useLocale } from "next-intl";
import { AboutusFeature } from "@/app/(pages)/aboutus/page";

export default function AboutUsFeatures({
  features = [],
}: {
  features: AboutusFeature[];
}) {
  const dir = useLocale() === "ar" ? "rtl" : "ltr";
  const plugin = React.useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const services = [
    {
      title: "شراء عقار",
      desc: "شكل توضيحي للعقارات التي نستهدفها وذلك لمن يستخدم طريقة البيع المرسومة.",
      icon: "/icon1.svg.png",
      primary: false,
    },
    {
      title: "بيع عقار",
      desc: "شكل توضيحي للعقارات التي نستهدفها وذلك لمن يستخدم طريقة البيع المرسومة.",
      icon: "/icon2.svg.png",
      primary: true,
    },
    {
      title: "إيجار عقار",
      desc: "شكل توضيحي للعقارات التي نستهدفها وذلك لمن يستخدم طريقة البيع المرسومة.",
      icon: "/icon3.svg.png",
      primary: false,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        type: "spring" as const,
        stiffness: 120,
      },
    }),
  };

  return (
    <section className="py-8 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">ماذا نقدم لك؟</h2>
        <p className="text-gray-500 mb-12">خدمات مميزة لعميل مميز</p>

        {/* Desktop: Grid Layout */}
        <div className="hidden md:flex gap-6 flex-wrap justify-center">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
              }}
              className="max-w-[370px] w-full"
            >
              <Card
                className={`border-none transition-all duration-300 ${
                  i
                    ? "bg-white shadow-xl hover:shadow-2xl"
                    : "bg-gray-50 shadow-sm hover:shadow-lg"
                }`}
              >
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <ImageFallback
                      src={feature.image}
                      alt={feature.description}
                      width={80}
                      height={80}
                    />
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {feature.description}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {/* <p className="text-gray-500 mb-6 text-sm">
                    {feature.description}
                  </p> */}
                  <Button
                    variant={i ? "default" : "outline"}
                    className="rounded-full"
                  >
                    عرض المزيد
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Carousel Layout */}
        <div className="md:hidden">
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
              {features.map((feature, i) => (
                <CarouselItem key={i} className="pl-4 basis-full">
                  <motion.div
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={cardVariants}
                  >
                    <Card
                      className={`border-none transition-all duration-300 ${
                        i ? "bg-white shadow-xl" : "bg-gray-50 shadow-sm"
                      }`}
                    >
                      <CardHeader>
                        <div className="flex justify-center mb-4">
                          <ImageFallback
                            src={feature.image}
                            alt={feature.description}
                            width={80}
                            height={80}
                          />
                        </div>
                        <CardTitle className="text-xl font-semibold">
                          {feature.description}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        {/* <p className="text-gray-500 mb-6 text-sm">
                          {feature.description}
                        </p> */}
                        <Button variant={"default"} className="rounded-full">
                          عرض المزيد
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation buttons */}
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious className="relative translate-y-0 border border-gray-300 hover:bg-emerald-600 hover:text-white transition" />
              <CarouselNext className="relative translate-y-0 border border-gray-300 hover:bg-emerald-600 hover:text-white transition" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
