import ImageFallback from "@/components/image-fallback";
import { motion } from "framer-motion";

export default function StoresButtons() {
  return (
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
  );
}
