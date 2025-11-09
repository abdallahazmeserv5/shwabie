"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowUp } from "lucide-react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
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

// Placeholder for ImageFallback component
const ImageFallback = ({ src, alt, width, height, className }: any) => (
  <div
    className={cn(
      "bg-white/20 rounded-lg flex items-center justify-center",
      className
    )}
  >
    <span className="text-2xl">🏠</span>
  </div>
);

const steps = [
  {
    number: "01",
    title: "ملء بيانات سريع",
    image: "/home/house.png",
    description:
      "قطاع حيوي يجمع بين الاستثمار المربح وتوفير العوامل الآمنة، ويشمل أنواعاً متعددة كالعقارات السكنية والتجارية مع تحديد الأسعار والإجراءات المعتمدة",
  },
  {
    number: "02",
    title: "اختيار العقار",
    image: "/home/note.png",
    description:
      "قطاع حيوي يجمع بين الاستثمار المربح وتوفير العوامل الآمنة، ويشمل أنواعاً متعددة كالعقارات السكنية مع تحديد الأسعار والإجراءات المعتمدة",
    highlighted: true,
  },
  {
    number: "03",
    title: "معاينة العقار",
    image: "/home/video.png",
    description:
      "قطاع حيوي يجمع بين الاستثمار المربح وتوفير العوامل الآمنة ويشمل أنواعاً متعددة كالعقارات السكنية والتجارية مع تحديد الأسعار والإجراءات المعتمدة",
  },
];

const stats = [
  { label: "نسبة الشفوي", value: 7265, change: "+11.01%" },
  { label: "عدد الزيارات اليوم", value: 3671, change: "-0.03%" },
  { label: "عملية بيع وشراء", value: 156, change: "+15.03%" },
  { label: "عملية تحويل يومية", value: 2318, change: "+0.06%" },
];

// Enhanced Counter component with proper motion animation
const Counter = ({ value }: { value: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2.5,
      ease: [0.16, 1, 0.3, 1],
    });

    return controls.stop;
  }, [count, value]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toLocaleString();
      }
    });

    return () => unsubscribe();
  }, [rounded]);

  return (
    <motion.p
      ref={ref}
      className="text-2xl font-bold"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      0
    </motion.p>
  );
};

export default function HowItWorks() {
  const dir = useLocale() === "ar" ? "rtl" : "ltr";
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <section className="py-10  bg-linear-to-br from-[#12B674] to-[#134732] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8 gap-6 lg:gap-0"
        >
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl font-bold max-w-[444px]"
          >
            طريقة عملنا سهلة وعملية
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white max-w-[866px]"
          >
            تشمل العقارات الأراضي والتحسينات التي تُبنى عليها، مثل المنازل
            والمباني التجارية وغيرها. هناك أيضًا تصنيفات مختلفة للعقارات مثل
            المساكن المتصلة، والفيوفية، والبحرية (تخضع للأسعار)، حسب سِكناها.
          </motion.p>
        </motion.div>

        {/* Steps Carousel */}
        <div className="mb-8">
          <Carousel
            opts={{
              align: "center",
              loop: true,
              direction: dir,
            }}
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="-ml-4 py-4">
              {steps.map((step, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 60, scale: 0.8, rotateX: 45 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.15,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    whileHover={{
                      y: -10,
                      scale: 1.03,
                      transition: { duration: 0.3, ease: "easeOut" },
                    }}
                  >
                    <Card
                      className={cn(
                        `p-6 text-center backdrop-blur transition-all duration-300 bg-white/20 border-white/30 hover:shadow-2xl hover:bg-white/30 h-full`,
                        index === 0 &&
                          "bg-white text-emerald-800 border border-white hover:shadow-2xl hover:bg-white"
                      )}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex gap-4 items-center">
                          <motion.div
                            initial={{ rotate: -180, opacity: 0, scale: 0 }}
                            whileInView={{ rotate: 0, opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.7,
                              delay: index * 0.15 + 0.2,
                              type: "spring",
                              stiffness: 150,
                              damping: 12,
                            }}
                            whileHover={{
                              rotate: [0, -10, 10, -10, 0],
                              transition: { duration: 0.5 },
                            }}
                          >
                            <ImageFallback
                              alt={step.title}
                              width={64}
                              height={64}
                              src={step.image}
                              className="w-16 h-16"
                            />
                          </motion.div>
                          <motion.h3
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.6,
                              delay: index * 0.15 + 0.3,
                              ease: "easeOut",
                            }}
                            className={cn(
                              "text-xl font-bold",
                              index === 0 ? "text-[#000929]" : "text-white"
                            )}
                          >
                            {step.title}
                          </motion.h3>
                        </div>
                        <motion.div
                          initial={{ scale: 0, opacity: 0, rotate: -180 }}
                          whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.6,
                            delay: index * 0.15 + 0.4,
                            type: "spring",
                            stiffness: 200,
                            damping: 15,
                          }}
                          className="text-4xl font-bold text-[#58D5A3]"
                        >
                          {step.number}
                        </motion.div>
                      </div>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.15 + 0.5,
                        }}
                        className={
                          index === 0 ? "text-[#000929]" : "text-white"
                        }
                      >
                        {step.description}
                      </motion.p>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Statistics */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{
                y: -5,
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              className={cn(
                "rounded-lg text-center flex flex-col gap-2 p-2 md:p-6 cursor-pointer max-w-[250px] flex-1",
                i % 2 === 0 ? "bg-[#E3FFF4]" : "bg-[#B6FFE2]",
                "text-black shadow-lg hover:shadow-xl transition-shadow duration-300"
              )}
            >
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
                className="text-sm mt-1"
              >
                {stat.label}
              </motion.p>
              <div className="flex gap-4 items-center justify-between">
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                  className="text-xs flex items-center justify-center mt-1"
                >
                  <motion.span
                    animate={{ y: [0, -3, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "loop",
                      delay: i * 0.2,
                    }}
                  >
                    <ArrowUp className="w-3 h-3 mr-1" />
                  </motion.span>
                  {stat.change}
                </motion.p>
                <Counter value={stat.value} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
