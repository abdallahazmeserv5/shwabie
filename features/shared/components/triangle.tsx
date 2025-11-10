import Breadcrumb from "@/components/breadcrumb";
import ImageFallback from "@/components/image-fallback";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Triangle({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="relative flex flex-col items-center justify-end 2xl:pt-20 mb-5 2xl:mb-0 pb-0 z-0"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 hidden 2xl:flex w-full h-full   items-end justify-center pointer-events-none -z-10">
        <div className="relative w-full h-[380px]">
          <ImageFallback
            src="/home/triangle.png"
            alt="Triangle Background"
            fill
            className="object-contain object-bottom"
          />
        </div>
      </div>

      {children}
    </motion.div>
  );
}
