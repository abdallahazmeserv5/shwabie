import ImageFallback from "@/components/image-fallback";
import { Testimonial } from "@/features/shared/types";
import { motion } from "framer-motion";
import { useState } from "react";

export default function TestimonialsCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
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
      className="group cursor-pointer"
    >
      <motion.div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 p-8 relative min-h-80 flex flex-col">
        {/* Quote Icon */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
          className="absolute top-8 left-8"
        >
          <ImageFallback
            src={"/quote.png"}
            alt="Quote"
            width={47}
            height={47}
            className="size-[47px]"
          />
        </motion.div>

        {/* Main Quote */}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.4 }}
          className="text-xl font-bold text-gray-900 mb-4 text-right pt-4"
        >
          {testimonial.name}
        </motion.h3>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.5 }}
          className="text-gray-600 leading-relaxed text-right text-sm mb-8 grow line-clamp-5 min-h-[115px]"
        >
          {testimonial.description}
        </motion.p>

        {/* Author Info */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.6 }}
          className="flex items-center gap-4 mt-auto border-t border-gray-100 pt-6"
        >
          <div className="relative w-12 h-12  shrink-0">
            <ImageFallback
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full object-cover"
              fill
            />
          </div>
          <div className=" ">
            <div className="font-bold text-gray-900 text-base">
              {testimonial.name}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
