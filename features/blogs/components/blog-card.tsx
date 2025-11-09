import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import ImageFallback from "@/components/image-fallback";

export default function BlogCard({
  article,
  index,
}: {
  article: any;
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group cursor-pointer"
    >
      <motion.div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500">
        {/* Image Container */}
        <div className="relative w-full h-64 ">
          <motion.div
            animate={{
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full h-full relative"
          >
            <ImageFallback
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
              fill
            />
          </motion.div>

          {/* Date Badge - Positioned in top-left corner */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
            className="absolute translate-y-1/3 z-10 bottom-0 shadow-md left-4 bg-white rounded-lg  overflow-hidden"
          >
            <div className="px-4 py-2 text-center">
              <div className="text-xs font-medium text-gray-600 uppercase">
                {article.month}
              </div>
              <div className="text-lg font-bold text-gray-900">
                {article.day}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Author Info */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.4 }}
            className="flex items-center gap-2 mb-4 text-sm text-gray-500"
          >
            <span>بواسطة:</span>
            <span className="font-medium">{article.author}</span>
          </motion.div>

          {/* Title */}
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.5 }}
            className="text-xl font-bold text-gray-900 leading-relaxed text-right group-hover:text-emerald-600 transition-colors duration-300"
          >
            {article.title}
          </motion.h3>
        </div>
      </motion.div>
    </motion.div>
  );
}
