"use client";

import { motion } from "framer-motion";
import ImageFallback from "@/components/image-fallback";
import { Blog } from "../types";
import { useState } from "react";
import Link from "next/link";

export default function BlogCard({
  article,
  index,
}: {
  article: Blog;
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  // Extract day and month from created_at
  const date = new Date(article.created_at);
  const day = date.getDate();
  const month = date.toLocaleString("ar-EG", { month: "short" });

  const author = "دار الشويبي للعقارات";

  return (
    <Link href={`/blogs/${article.slug}`}>
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
          {/* Image */}
          <div className="relative w-full h-64">
            <motion.div
              animate={{ scale: isHovered ? 1.05 : 1 }}
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

            {/* Date Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
              className="absolute translate-y-1/3 z-10 bottom-0 shadow-md left-4 bg-white rounded-lg overflow-hidden"
            >
              <div className="px-4 py-2 text-center">
                <div className="text-xs font-medium text-gray-600 uppercase">
                  {month}
                </div>
                <div className="text-lg font-bold text-gray-900">{day}</div>
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
              <span className="font-medium">{author}</span>
            </motion.div>

            {/* Title */}
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.5 }}
              className="text-xl line-clamp-2 min-h-[70px] font-bold text-gray-900 leading-relaxed  group-hover:text-emerald-600 transition-colors duration-300"
            >
              {article.title}
            </motion.h3>

            {/* Excerpt */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.6 }}
              className="text-gray-600 text-sm mt-2 line-clamp-3   min-h-[60px]"
            >
              {article.content}
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </Link>
  );
}
