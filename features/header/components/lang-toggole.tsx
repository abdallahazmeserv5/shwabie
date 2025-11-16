"use client";

import { Button } from "@/components/ui/button";
import { Globe, Languages } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState, useTransition, useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";

export function LanguageToggle() {
  const pathname = usePathname();
  const router = useRouter();
  const queryClient = useQueryClient();
  const [isPending, startTransition] = useTransition();
  const [currentLocale, setCurrentLocale] = useState("ar");

  // Read locale from cookie on mount
  useEffect(() => {
    const cookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("NEXT_LOCALE="));
    const locale = cookie ? cookie.split("=")[1] : "ar";
    setCurrentLocale(locale);
  }, []);

  const toggleLanguage = () => {
    const newLocale = currentLocale === "ar" ? "en" : "ar";

    setCurrentLocale(newLocale);
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000`;

    startTransition(() => {
      // Invalidate without waiting (fire and forget)
      queryClient.invalidateQueries();
      router.refresh();
    });
  };

  return (
    <motion.div
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      className="relative"
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleLanguage}
        disabled={isPending}
        className="relative h-12 w-12 rounded-xl bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 border border-white/20 shadow-lg hover:shadow-xl"
        title={
          currentLocale === "ar" ? "Switch to English" : "التبديل إلى العربية"
        }
      >
        <motion.div
          initial={false}
          animate={{ rotate: isPending ? 360 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="relative flex items-center justify-center"
        >
          <Languages className="h-6 w-6" />
        </motion.div>

        {/* Animated locale badge */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 500,
            damping: 15,
          }}
          className="absolute -bottom-1 -right-1 bg-gradient-to-br from-white to-green-50 text-green-700 text-[9px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-lg border-2 border-green-600/30"
        >
          <motion.span
            key={currentLocale}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {currentLocale.toUpperCase()}
          </motion.span>
        </motion.div>

        {/* Pulse effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-xl bg-white/20"
          initial={{ scale: 1, opacity: 0 }}
          whileHover={{ scale: 1.1, opacity: 0.3 }}
          transition={{ duration: 0.3 }}
        />
      </Button>
    </motion.div>
  );
}
