"use client";

import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { usePathname } from "next/navigation";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname(); // Get current path

  const navItems = [
    { name: "الرئيسية", href: "/" },
    { name: "من نحن", href: "/aboutus" },
    { name: "العقارات", href: "/properties" },
    { name: "إتصل بنا", href: "/contactus" },
    { name: "المدونة", href: "/blogs" },
  ];

  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

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
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Logo />
        </div>

        {/* Desktop Nav */}
        <motion.nav
          initial="hidden"
          animate="visible"
          variants={listVariants}
          className="hidden md:flex items-center gap-3 bg-green-600/30 rounded-md px-4 py-2 backdrop-blur-sm"
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <motion.div
                key={item.name}
                variants={itemVariants}
                whileHover="hover"
                className="relative"
              >
                <Link
                  href={item.href}
                  className={`px-3 py-1 rounded-md text-sm transition flex items-center gap-1 ${
                    isActive
                      ? "bg-white text-green-700 shadow-lg border-b-2 border-green-300"
                      : "hover:bg-green-500/50"
                  }`}
                >
                  {item.name === "الرئيسية" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 9.75L12 3l9 6.75V21a.75.75 0 01-.75.75H3.75A.75.75 0 013 21V9.75z"
                      />
                    </svg>
                  )}
                  {item.name}
                </Link>
              </motion.div>
            );
          })}
        </motion.nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Button
            variant="secondary"
            className="bg-white text-green-700 font-medium hover:bg-green-50 transition-all"
            asChild
          >
            <Link href={"/contactus"}>تواصل معنا</Link>
          </Button>
        </div>

        {/* Mobile Sheet */}
        <div className="md:hidden">
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
              <motion.div
                className="flex flex-col mt-8 space-y-4 text-right"
                initial="hidden"
                animate="visible"
                variants={listVariants}
              >
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.name}
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
                    <Link href={"/contactus"}>تواصل معنا</Link>
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
