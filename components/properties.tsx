"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { DoorOpen, Heart, MapPin, Maximize2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import ImageFallback from "./image-fallback";
import { Separator } from "./ui/separator";

type Property = {
  id: number;
  image: string;
  price: string;
  beds: number;
  baths: number;
  area: string;
  location: string;
};

const properties: Property[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4",
    price: "950,000",
    beds: 3,
    baths: 2,
    area: "250 م²",
    location: "حي النخيل",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    price: "850,000",
    beds: 4,
    baths: 3,
    area: "300 م²",
    location: "حي الياسمين",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    price: "750,000",
    beds: 3,
    baths: 2,
    area: "220 م²",
    location: "حي الورود",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1599427303058-f04cbcf4756f",
    price: "1,200,000",
    beds: 5,
    baths: 4,
    area: "400 م²",
    location: "حي الزهور",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4",
    price: "950,000",
    beds: 3,
    baths: 2,
    area: "250 م²",
    location: "حي النخيل",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    price: "850,000",
    beds: 4,
    baths: 3,
    area: "300 م²",
    location: "حي الياسمين",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    price: "750,000",
    beds: 3,
    baths: 2,
    area: "220 م²",
    location: "حي الورود",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1599427303058-f04cbcf4756f",
    price: "1,200,000",
    beds: 5,
    baths: 4,
    area: "400 م²",
    location: "حي الزهور",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Properties() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-20 container px-4 mx-auto">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col items-center justify-end mb-0 pb-0">
          {/* Triangle Image Background */}
          <div className="absolute inset-0 w-full h-full flex items-end justify-center pointer-events-none">
            <div className="relative w-full h-[295px]">
              <Image
                src="/home/triangle.png"
                alt="Triangle Background"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>
          </div>

          <div className="relative z-10 text-center py-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-primary mx-2 inline-block">عقارات</span>{" "}
              منتقاة بعناية
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              اختر من بين مئات العقارات المتاحة في أفضل المواقع
            </p>
          </div>
        </div>

        {/* Motion Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 bg-[#e8fdf5] p-8 rounded-t-[100px] -mt-12"
        >
          {properties.map((property) => (
            <motion.div key={property.id} variants={cardVariants}>
              <Card className="hover:shadow-xl transition duration-300 border-0 rounded-2xl ps-2 bg-white">
                {/* image  */}
                <div className="relative h-48 w-full rounded-t-2xl overflow-hidden">
                  <ImageFallback
                    src={property.image}
                    alt={property.location}
                    fill
                    className="object-cover"
                  />

                  <button
                    onClick={() => toggleFavorite(property.id)}
                    className="absolute cursor-pointer top-3 right-3 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition"
                  >
                    <Heart
                      size={20}
                      className={
                        favorites.includes(property.id)
                          ? "fill-red-500 text-red-500"
                          : "text-gray-400"
                      }
                    />
                  </button>

                  <div className="w-[104px] h-10 rounded-2xl absolute -bottom-1 -left-2">
                    <ImageFallback
                      src="/home/bg-badge.png"
                      alt="Background"
                      className="w-full h-full object-contain"
                      fill
                    />

                    <span className="text-white absolute top-1 -translate-x-1/3 left-1/2 text-sm font-bold z-10">
                      مميزة
                    </span>
                  </div>
                </div>
                {/* text */}
                <div className="p-2 space-y-3">
                  <h3 className="text-[#000929] font-bold">شقة فاخرة في جدة</h3>
                  <p className="font-bold text-lg text-gray-900">
                    <span className="text-[#808494] font-normal mx-1">
                      الشهر /
                    </span>
                    <span className="text-primary mx-1">{property.price}</span>
                    ريال
                  </p>

                  <div className="flex items-center gap-1 text-muted-foreground">
                    <MapPin size={16} />
                    <span className="text-sm">{property.location}</span>
                  </div>

                  <Separator className="bg-muted" />

                  <div className="flex items-center justify-between gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <DoorOpen className="text-primary" size={16} />
                      <span>{property.beds} غرف</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <Maximize2 className="text-primary" size={16} />
                      <span>{property.area}</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <DoorOpen className="text-primary" size={16} />
                      <span>{property.beds} حمام</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
