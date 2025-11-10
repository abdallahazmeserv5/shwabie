"use client";
import Logo from "@/components/logo";
import { motion } from "framer-motion";
import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import BottomFooter from "./bottom-footer";
import StoresButtons from "./stores-button";
import { useQuery } from "@tanstack/react-query";
import { SiteSettingsQuery } from "@/features/shared/query-options";
import Link from "next/link";

const Footer = () => {
  const { data } = useQuery(SiteSettingsQuery);
  const footerLinks = {
    company: {
      title: "الشركة",
      links: [
        { title: "من نحن", href: "/aboutus" },
        { title: "تواصل معنا", href: "/contactus" },
        { title: "الشقق", href: "/properties" },
        { title: "المقالات", href: "/blogs" },
      ],
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
            <Logo />

            {/* Description */}
            <p className="text-sm text-gray-600 text-right leading-relaxed">
              {data?.data.site_name}
            </p>

            {/* Social Icons */}
            <div className="flex items-center justify-center gap-3">
              {[
                {
                  Icon: Facebook,
                  color: "hover:bg-blue-600",
                  href: data?.data.facebook_url,
                },
                {
                  Icon: Twitter,
                  color: "hover:bg-sky-500",

                  href: data?.data.twitter_url,
                },
                {
                  Icon: Youtube,
                  color: "hover:bg-red-600",
                  href: data?.data.youtube_url,
                },
                {
                  Icon: Linkedin,
                  color: "hover:bg-blue-700",
                  href: data?.data.linkedin_url,
                },
              ].map(({ Icon, color, href }, index) => (
                <motion.a
                  target="_blank"
                  key={index}
                  href={href}
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
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-emerald-500 transition-colors duration-300 block text-right"
                    >
                      {link.title}
                    </Link>
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
              <p className="text-sm text-gray-600">{data?.data.site_address}</p>
              <p className="text-sm text-gray-600" dir="ltr">
                {data?.data.site_phone}
              </p>
              <a
                href={`mailto:${data?.data.site_email}`}
                className="text-sm text-emerald-500 hover:text-emerald-600 transition-colors duration-300 block"
              >
                البريد الإلكتروني للتواصل
              </a>
            </div>
          </motion.div>

          {/* App Download Buttons */}
          <StoresButtons />
        </motion.div>

        {/* Bottom Bar */}
        <BottomFooter />
      </div>
    </footer>
  );
};

export default Footer;
