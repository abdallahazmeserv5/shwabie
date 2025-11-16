"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ImageFallback from "./image-fallback";
import Link from "next/link";
import { SiteSettingsQuery } from "@/features/shared/query-options";
import { useQuery } from "@tanstack/react-query";
import { useTranslations } from "next-intl";

export default function CTA() {
  const t = useTranslations();
  const { data } = useQuery(SiteSettingsQuery);

  const phoneNumber = data?.data.site_phone;

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-primary rounded-2xl pt-10 container mx-auto pe-6 py-5 sm:py-0"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center lg:justify-start"
        >
          <ImageFallback
            src="/building-image.webp"
            alt={t("cta_image_alt")}
            width={400}
            height={200}
            className="object-contain w-[250px] sm:w-[300px] md:w-[400px] h-auto"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center lg:text-start text-white space-y-4 flex-1"
        >
          <h2 className="text-2xl md:text-3xl font-bold">{t("cta_title")}</h2>
          <p className="text-sm md:text-base opacity-90 leading-relaxed">
            {t("cta_description")}
          </p>
          <div className="flex justify-center lg:justify-start">
            <Button
              variant="outline"
              className="bg-white hover:text-primary text-black hover:bg-gray-100 rounded-md text-sm md:text-base px-5 py-2 transition-all duration-200"
              asChild
            >
              <Link
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("cta_button")}
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
