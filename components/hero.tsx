import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { useTranslations } from "next-intl";
import ImageFallback from "./image-fallback";

export default function Hero() {
  const t = useTranslations();

  return (
    <section className=" border-gray-100 bg-primary  text-white overflow-hidden h-[calc(100vh-83.75px)] md:h-[calc(100vh-153px)]">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center h-full">
        {/* Image Section */}
        <motion.div
          className="relative flex-1 h-80 lg:h-[500px] 2xl:h-[795px]"
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

        {/* Content */}
        <motion.div
          className="space-y-6 z-10 flex-1 text-center lg:text-right max-w-6xl px-4 pt-10"
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
          <div className="flex items-center justify-center lg:justify-start gap-3 pt-4">
            <Button className="bg-white text-emerald-600 hover:bg-emerald-50 rounded-full px-8 font-semibold">
              {t("startNow")}
            </Button>
            <motion.button
              className="flex items-center gap-2 text-white hover:text-emerald-100 transition"
              whileHover={{ x: 5 }}
            >
              <span>{t("browseProperties")}</span>
              <ChevronLeft size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
