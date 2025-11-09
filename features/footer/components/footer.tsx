"use client";
import ImageFallback from "@/components/image-fallback";
import { motion } from "framer-motion";
import { ChevronUp, Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const footerLinks = {
    company: {
      title: "الشركة",
      links: ["من نحن", "منتج العام", "فريق العمل", "وظائف ومهن"],
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className=" mt-10">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {/* Brand Section */}
          <motion.div
            variants={itemVariants}
            className="space-y-6 col-span-2 md:col-span-1"
          >
            {/* Logo */}
            <motion.div
              className="flex flex-col  items-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <ImageFallback
                src={"/header/logo-primary.png"}
                alt="دار الشويبي للعقارات"
                width={83}
                height={81}
                className="w-[83px] h-20 object-contain"
              />

              <p className=" text-black flex items-center gap-1 text-xl">
                دار
                <span className="text-primary">الشويبي</span>
                للعقارات
              </p>
            </motion.div>

            {/* Description */}
            <p className="text-sm text-gray-600 text-right leading-relaxed">
              شركة دار الموظفين للخدمات العقارية ومقرها سوريا تساعدك بسهولة
            </p>

            {/* Social Icons */}
            <div className="flex items-center justify-center gap-3">
              {[
                { Icon: Facebook, color: "hover:bg-blue-600" },
                { Icon: Twitter, color: "hover:bg-sky-500" },
                { Icon: Youtube, color: "hover:bg-red-600" },
                { Icon: Linkedin, color: "hover:bg-blue-700" },
              ].map(({ Icon, color }, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-9 h-9 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-white ${color} transition-all duration-300 shadow-sm hover:shadow-md`}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          {Object.values(footerLinks).map((section, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="space-y-4"
            >
              <h3 className="text-base font-bold text-gray-900 text-right">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    whileHover={{ x: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-emerald-500 transition-colors duration-300 block text-right"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-base font-bold text-gray-900 text-right">
              معلومات التواصل
            </h3>
            <div className="space-y-3 text-right">
              <p className="text-sm text-gray-600">سوريا - دمشق</p>
              <p className="text-sm text-gray-600" dir="ltr">
                +963 938 4526 100
              </p>
              <p className="text-sm text-gray-600">خدمة العملاء</p>
              <p className="text-sm text-gray-600">
                من الأحد إلى الخميس، 10صباحاً - 6مساءً
              </p>
              <a
                href="mailto:info@example.com"
                className="text-sm text-emerald-500 hover:text-emerald-600 transition-colors duration-300 block"
              >
                Mugtaman.com
              </a>
            </div>
          </motion.div>

          {/* App Download Buttons */}
          <div className="space-y-2 col-span-2 md:col-span-1">
            <p className="text-sm font-medium text-gray-700 text-right mb-3">
              تحميل التطبيق
            </p>
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-black text-white rounded-lg px-4 py-2.5 flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors duration-300 shadow-sm hover:shadow-md"
            >
              <ImageFallback
                src={"/apple-store.png"}
                alt="Apple store"
                width={20}
                height={26}
              />
              <div className="text-right">
                <div className="text-xs">Download on the</div>
                <div className="text-sm font-semibold">Apple Store</div>
              </div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-emerald-500 text-white rounded-lg px-4 py-2.5 flex items-center justify-center gap-2 hover:bg-emerald-600 transition-colors duration-300 shadow-sm hover:shadow-md"
            >
              <ImageFallback
                src={"/google-play.png"}
                alt="Apple store"
                width={26}
                height={26}
                className="size-[26px]"
              />
              <div className="text-right">
                <div className="text-xs">GET IT ON</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </motion.button>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-gray-500 text-center md:text-right">
            دار الشويبي © {new Date().getFullYear()} تصميم
            <Link
              href="https://serv5.com/"
              className="text-primary hover:text-primary/90 mx-1"
            >
              وبرمجة سيرف 5
            </Link>
          </p>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:text-emerald-500 hover:border-emerald-500 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
