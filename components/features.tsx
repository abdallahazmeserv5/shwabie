"use client";

import { Card } from "@/components/ui/card";
import ImageFallback from "./image-fallback";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Features() {
  const t = useTranslations();

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
    <section className="py-16 bg-white container px-4 mx-auto">
      <div className="flex items-center flex-col md:flex-row gap-10">
        {/* Right Highlight Card */}
        <Card className="relative p-10 bg-emerald-50 rounded-3xl shadow-none flex-1 overflow-hidden h-[500px] text-right">
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

        {/* Features List */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-2 w-full"
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
                <div className="flex  sm:flex-col items-center gap-2">
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
      </div>
    </section>
  );
}
