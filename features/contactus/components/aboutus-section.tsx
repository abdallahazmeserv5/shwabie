"use client";

import ImageFallback from "@/components/image-fallback";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import FeaturesSection from "./features";
import Breadcrumb from "@/components/breadcrumb";
import Triangle from "@/features/shared/components/triangle";
import { AboutUs } from "@/app/(pages)/aboutus/page";
import { useTranslations } from "next-intl";

export default function AboutusSection({ data }: { data: AboutUs }) {
  const t = useTranslations();

  return (
    <section className="pt-8 container px-4 mx-auto">
      {/* Triangle Background */}
      <Triangle>
        <div
          className={cn(
            "relative z-20 text-center flex flex-col items-center gap-4 pt-10 2xl:pb-20"
          )}
        >
          <Breadcrumb
            items={[
              { title: t("home"), href: "/" },
              { title: t("about_us"), href: "/aboutus" },
            ]}
          />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary drop-shadow-2xl">
            {data.title}
          </h2>
        </div>
      </Triangle>

      <motion.div
        className="rounded-none overflow-y-auto bg-white border border-gray-200"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="flex gap-5">
          {/* Right side - Map */}
          <motion.div
            className="hidden relative md:block h-[550px] object-cover flex-1 w-full"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <ImageFallback src={data.image} alt={data.description} fill />
          </motion.div>

          <motion.div
            className="flex-2 mx-auto ps-2"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="pt-10">
              <h2 className="text-2xl font-bold mb-4 max-w-[378px]">
                {t("best_real_estate_solutions")}
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                {t("diverse_properties_guaranteed")}
              </p>
            </div>

            <FeaturesSection />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
