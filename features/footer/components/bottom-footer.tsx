"use client";

import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function BottomFooter() {
  const t = useTranslations();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
      className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4"
    >
      <p className="text-sm text-gray-500 text-center md:text-right">
        {t("company_name")} © {new Date().getFullYear()} {t("designed_by")}
        <Link
          href="https://serv5.com/"
          className="text-primary hover:text-primary/90 mx-1"
        >
          {t("serv5")}
        </Link>
      </p>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.95 }}
        className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:text-emerald-500 hover:border-emerald-500 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
      >
        <ChevronUp className="w-5 h-5" />
      </motion.button>
    </motion.div>
  );
}
