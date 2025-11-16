"use client";

import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { usePathname } from "next/navigation";
import { LanguageToggle } from "./lang-toggole";
import { useTranslations } from "next-intl";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations();

  const navItems = [
    { name: t("navHome"), href: "/" },
    { name: t("navAboutUs"), href: "/aboutus" },
    { name: t("navProperties"), href: "/properties" },
    { name: t("navContactUs"), href: "/contactus" },
    { name: t("navBlogs"), href: "/blogs" },
  ];

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    hover: { scale: 1.05 },
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#065f46] text-white shadow-lg backdrop-blur-md"
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Logo />

        {/* Desktop Nav */}
        <motion.nav className="hidden md:flex items-center gap-3 bg-green-600/30 rounded-md px-4 py-2 backdrop-blur-sm">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <motion.div
                key={item.href}
                variants={itemVariants}
                whileHover="hover"
                className="relative"
              >
                <Link
                  href={item.href}
                  className={`px-3 py-1 rounded-md text-sm transition ${
                    isActive
                      ? "bg-white text-green-700 shadow-lg border-b-2 border-green-300"
                      : "hover:bg-green-500/50"
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            );
          })}
        </motion.nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageToggle />
          <Button
            variant="secondary"
            className="bg-white text-green-700 font-medium hover:bg-green-50 transition-all"
            asChild
          >
            <Link href={"/contactus"}>{t("navContactButton")}</Link>
          </Button>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-[rgba(11,41,28,0.85)] backdrop-blur-lg text-white rounded-l-xl p-6"
            >
              <motion.div className="flex flex-col mt-8 space-y-4 ">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.href}
                      variants={itemVariants}
                      whileHover="hover"
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`text-lg transition-all duration-300 ${
                          isActive
                            ? "bg-white text-green-700 px-4 py-2 rounded-md shadow-md border-b-2 border-green-300"
                            : "hover:text-green-200 px-4 py-2 rounded-md hover:bg-green-600/30"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  );
                })}

                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <Button
                    variant="secondary"
                    className="bg-white text-green-700 font-medium mt-4 w-full"
                    asChild
                  >
                    <Link href={"/contactus"}>{t("navContactButton")}</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
