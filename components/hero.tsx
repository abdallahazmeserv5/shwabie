"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import ImageFallback from "./image-fallback";
import Link from "next/link";
import { useDirection } from "@/hooks/use-direction";

export default function Hero() {
  const t = useTranslations();
  const dots = Array.from({ length: 10 });
  const { isRtl } = useDirection();

  return (
    <section className="relative overflow-hidden h-[calc(80vh-83.75px)] md:h-[calc(100vh-124px)] text-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#065f46,#10b981,#6ee7b7)] bg-size-[200%_200%] animate-[gradientShift_10s_ease_infinite]" />

      {/* ✨ Floating Dots */}
      <div className="absolute inset-0 overflow-hidden">
        {dots.map((_, i) => {
          const randX = Math.random() * 800;
          const randY = Math.random() * 600;
          const randScale = Math.random() * 0.8 + 0.4;

          return (
            <motion.span
              key={i}
              className="absolute w-3 h-3 rounded-full bg-emerald-300/40 blur-[1px]"
              initial={{
                x: randX,
                y: randY,
                scale: randScale,
              }}
              animate={{
                x: [randX, Math.random() * 800],
                y: [randY, Math.random() * 600],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 12 + Math.random() * 8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      <div className="absolute inset-0 bg-black/20" />

      <div className="relative flex flex-col-reverse lg:flex-row items-center justify-center h-full">
        <motion.div
          className="relative flex-1 ltr:-scale-x-100 w-full h-[350px] sm:h-[400px] lg:h-[500px] 2xl:h-[795px] hidden lg:block"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <ImageFallback
            src="/home/man-in-suit.webp"
            alt="House and a man"
            fill
            className="object-cover"
          />
        </motion.div>

        <motion.div
          className="space-y-6 z-10 flex-1 text-center lg:text-start max-w-6xl px-4 pt-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="text-sm font-semibold text-emerald-100">
            {t("company")}
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-balance">
            {t("title")}
          </h1>
          <p className="text-emerald-50 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
            {t("description")}
          </p>
          <div className="flex gap-2 items-center">
            <Button className=" bg-transparent hover:bg-primary text-white border border-white flex items-center gap-2  px-8! py-6! rounded-md   transition">
              <Link href={"/properties"}>
                <span>{t("browseProperties")}</span>
              </Link>
            </Button>
            {isRtl ? (
              <ChevronLeft className="" size={20} />
            ) : (
              <ChevronRight className="" size={20} />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
