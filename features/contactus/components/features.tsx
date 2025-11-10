"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Key, FlaskConical } from "lucide-react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { useLocale } from "next-intl";

const features = [
  {
    icon: ShieldCheck,
    title: "سعادة المستخدم",
    description: "شكل توضع العناصر في الصفحة التي يراها وذلك يتم استخدامها.",
  },
  {
    icon: Key,
    title: "تسليم سهل",
    description: "شكل توضع العناصر في الصفحة التي يراها وذلك يتم استخدامها.",
  },
  {
    icon: FlaskConical,
    title: "تداول آمن",
    description: "شكل توضع لتسير تجربتها بنجاح.",
  },
];

export default function FeaturesSection() {
  const autoplay = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const direction = useLocale() === "ar" ? "rtl" : "ltr";

  return (
    <section className="py-2 bg-linear-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Desktop grid layout */}
        <div className="hidden md:grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <Card className="border-none bg-white/80 backdrop-blur-md shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded-2xl  min-h-[300px] flex">
                  <CardContent className="flex flex-col items-center justify-center space-y-3 py-10 h-full">
                    <div className="p-3 rounded-full bg-green-100">
                      <Icon className="size-8 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Carousel on mobile */}
        <div className="md:hidden">
          <Carousel
            plugins={[autoplay.current]}
            opts={{
              align: "center",
              loop: true,
              direction,
            }}
            className="w-full max-w-md mx-auto"
          >
            <CarouselContent>
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <CarouselItem key={index} className="p-2 basis-[80%]">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="border-none bg-white/80 backdrop-blur-md shadow-md hover:shadow-lg transition-all duration-300 rounded-2xl text-center min-h-[300px] flex">
                        <CardContent className="flex flex-col  space-y-3 py-10 h-full">
                          <div className="p-3 rounded-full bg-green-100 w-fit">
                            <Icon className="w-8 h-8 text-green-600" />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {feature.title}
                          </h3>
                          <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
                            {feature.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
