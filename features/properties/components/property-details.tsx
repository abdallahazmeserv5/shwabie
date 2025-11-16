"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { CheckCircle2, MapPin, Tag } from "lucide-react";
import LocationMap from "./property-location";
import { Property } from "../types";
import PropertyDescription from "./property-description";
import CtaProperty from "./cta-property";

export default function PropertyDetails({ property }: { property: Property }) {
  const details = [
    { label: "الدولة", value: property.country },
    { label: "المدينة", value: property.city },
    { label: "السعر", value: `${property.price} ${property.currency}` },
  ];

  const amenities = property.features || [];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="mx-auto space-y-4 flex-1"
      initial="hidden"
      animate="visible"
      variants={cardVariants}
    >
      {/* تفاصيل العقار */}
      <motion.div variants={cardVariants} transition={{ delay: 0.1 }}>
        <Card className="gap-2">
          <CardHeader>
            <CardTitle className="text-xl font-bold  ">تفاصيل العقار</CardTitle>
          </CardHeader>

          <CardContent className="pt-2">
            <div className="grid sm:grid-cols-2 gap-0">
              {details.map((detail, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col"
                >
                  <div className="flex items-center justify-between p-3 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-2">
                      <Tag className="w-5 h-5 text-primary" />
                      <span className="text-sm text-gray-600">
                        {detail.label}
                      </span>
                    </div>
                    <span className="font-semibold text-gray-900">
                      {detail.value}
                    </span>
                  </div>
                  {index !== details.length - 1 && (
                    <Separator className="h-px bg-gray-200 w-full" />
                  )}
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* المميزات */}
      {amenities.length > 0 && (
        <motion.div variants={cardVariants} transition={{ delay: 0.2 }}>
          <Card>
            <CardHeader className="border-b">
              <CardTitle className="text-xl font-bold">المميزات</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
                {amenities.map((feature, index) => (
                  <motion.div
                    key={feature.id || index}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-teal-50 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0" />
                    <span className="text-sm text-gray-700">
                      {feature.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* الموقع */}
      {/* <motion.div variants={cardVariants} transition={{ delay: 0.3 }}>
        <Card className="pt-6 pb-2">
          <CardHeader className="border-b">
            <CardTitle className="text-xl font-bold flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" /> الموقع
            </CardTitle>
          </CardHeader>
          <CardContent className="px-2">
            <LocationMap country={property.country} city={property.city} />
          </CardContent>
        </Card>
      </motion.div> */}

      <PropertyDescription property={property} />
      <CtaProperty property={property} />
    </motion.div>
  );
}
