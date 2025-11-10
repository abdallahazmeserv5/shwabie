import ImageFallback from "@/components/image-fallback";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { useRef, useState } from "react";

import CtaProperty from "./cta-property";
import PropertyDescription from "./property-description";

export default function PropertyImages() {
  const dir = useLocale() === "ar" ? "rtl" : "ltr";
  const [mainImage, setMainImage] = useState("/property-image.webp");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const images = [
    "/properties/property-1.png",
    "/properties/property-2.png",
    "/properties/property-3.png",
    "/properties/property-4.png",
    "/properties/property-1.png",
    "/properties/property-2.png",
    "/properties/property-3.png",
    "/properties/property-4.png",
  ];

  // منفصل لكل كاروusel
  const pluginMain = useRef(
    Autoplay({
      delay: 1800,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const pluginDialog = useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    })
  );

  const handleImageHover = (image: string) => {
    setMainImage(image);
  };

  const handleImageClick = (image: string) => {
    setMainImage(image);
  };

  const handleMainImageClick = () => {
    setIsDialogOpen(true);
  };

  // لمسة: نجيب مؤشر الصورة الحالية علشان نبرزها في الثمبنينيل
  const currentIndex = images.indexOf(mainImage);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  const carouselVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="relative flex-1"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="border-2 border-gray-200 rounded-md"
        variants={imageVariants}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="relative w-[80%] h-80 md:h-[783px] mx-auto">
          {/* الصورة الرئيسية في الكارد */}
          <motion.div
            className="relative w-full h-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <ImageFallback
              src={mainImage}
              alt="Properties"
              fill
              className="object-contain absolute inset-0 cursor-pointer transition-opacity hover:opacity-90"
              onClick={handleMainImageClick}
            />
          </motion.div>

          {/* كاروusel صغير خارج الدايلوج (اختياري، تقدر تخفيه لو مش محتاج) */}
          <motion.div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full max-w-[1100px]"
            variants={carouselVariants}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Carousel
              opts={{
                align: "start",
                loop: true,
                direction: dir,
              }}
              plugins={[pluginMain.current]}
              className="w-full"
            >
              <CarouselContent className="-ml-4 py-2">
                {images.map((image, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-4 basis-1/2 lg:basis-1/3 xl:basis-1/4"
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.5 + index * 0.05,
                      }}
                    >
                      <ImageFallback
                        alt={image}
                        src={image}
                        width={128}
                        height={108}
                        className={
                          "w-32 h-[108px] cursor-pointer transition-all hover:scale-105 hover:brightness-110 rounded-md " +
                          (index === currentIndex
                            ? "border-2 border-primary"
                            : "border-2 border-transparent")
                        }
                        onMouseEnter={() => handleImageHover(image)}
                        onClick={() => handleImageClick(image)}
                      />
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </motion.div>
        </div>
      </motion.div>

      {/* Image Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-7xl w-[95vw] h-[95vh] p-0">
          <motion.div
            className="relative w-full h-full flex flex-col"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* المنطقة اللي بتعرض الصورة الكبيرة */}
            <div className="relative flex-1 flex items-center justify-center">
              <motion.div
                className="relative w-full h-full max-h-[85vh]"
                key={mainImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <ImageFallback
                  src={mainImage}
                  alt="Full size property image"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>

            {/* الكاروusel داخل الدايلوج (أسفل) */}
            <motion.div
              className="w-full py-4 px-6 bg-black/70"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <Carousel
                opts={{
                  align: "center",
                  loop: true,
                  direction: dir,
                }}
                plugins={[pluginDialog.current]}
                className="w-full"
              >
                <CarouselContent className="-ml-4 py-2">
                  {images.map((image, index) => (
                    <CarouselItem
                      key={index}
                      className="pl-4 basis-1/3 sm:basis-1/6 md:basis-1/8"
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.15 + index * 0.03,
                        }}
                      >
                        <ImageFallback
                          alt={image}
                          src={image}
                          width={160}
                          height={110}
                          className={
                            "w-36 h-[86px] min-w-24 cursor-pointer transition-transform hover:scale-105 rounded-md " +
                            (image === mainImage
                              ? "ring-2 ring-offset-1 ring-primary"
                              : "opacity-90")
                          }
                          onMouseEnter={() => handleImageHover(image)}
                          onClick={() => handleImageClick(image)}
                        />
                      </motion.div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </motion.div>
          </motion.div>
        </DialogContent>
      </Dialog>

      {/* Property Details Section */}
      <PropertyDescription />

      {/* buttons */}
      <CtaProperty />
    </motion.div>
  );
}
