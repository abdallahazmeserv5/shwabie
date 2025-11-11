"use client";

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
import { Property } from "../types";

export default function PropertyImages({ property }: { property: Property }) {
  const dir = useLocale() === "ar" ? "rtl" : "ltr";

  // نكوّن مصفوفة الصور من البيانات
  const images = [property.thumbnail, ...(property.gallery || [])].filter(
    Boolean
  );

  const [mainImage, setMainImage] = useState(
    images[0] || "/property-image.webp"
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const pluginMain = useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const pluginDialog = useRef(
    Autoplay({
      delay: 2500,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    })
  );

  const handleImageHover = (image: string) => setMainImage(image);
  const handleImageClick = (image: string) => setMainImage(image);
  const handleMainImageClick = () => setIsDialogOpen(true);

  const currentIndex = images.indexOf(mainImage);

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
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
      {/* الصورة الرئيسية */}
      <motion.div
        className="border-2 border-gray-200 rounded-md"
        variants={imageVariants}
        transition={{ duration: 0.6 }}
      >
        <div className="relative w-[80%] h-80 md:h-[783px] mx-auto">
          <ImageFallback
            src={mainImage}
            alt={property.name}
            fill
            className="object-contain absolute inset-0 cursor-pointer hover:opacity-90"
            onClick={handleMainImageClick}
          />

          {/* الكاروسيل الصغير */}
          {images.length > 1 && (
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
                      <ImageFallback
                        alt={property.name}
                        src={image}
                        width={128}
                        height={108}
                        className={`w-32 h-[108px] cursor-pointer rounded-md transition-all hover:scale-105 hover:brightness-110 ${
                          index === currentIndex
                            ? "border-2 border-primary"
                            : "border-2 border-transparent"
                        }`}
                        onMouseEnter={() => handleImageHover(image)}
                        onClick={() => handleImageClick(image)}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* دايلوج الصور */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-7xl w-[95vw] h-[95vh] p-0">
          <motion.div
            className="relative w-full h-full flex flex-col"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="relative flex-1 flex items-center justify-center">
              <ImageFallback
                src={mainImage}
                alt={property.name}
                fill
                className="object-contain"
              />
            </div>

            {images.length > 1 && (
              <div className="w-full py-4 px-6 bg-black/70">
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
                        className="pl-4 basis-1/3 sm:basis-1/6"
                      >
                        <ImageFallback
                          alt={property.name}
                          src={image}
                          width={160}
                          height={110}
                          className={`w-36 h-[86px] rounded-md cursor-pointer ${
                            image === mainImage
                              ? "ring-2 ring-offset-1 ring-primary"
                              : "opacity-80"
                          }`}
                          onClick={() => handleImageClick(image)}
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
            )}
          </motion.div>
        </DialogContent>
      </Dialog>

      <PropertyDescription property={property} />
      <CtaProperty property={property} />
    </motion.div>
  );
}
