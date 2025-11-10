"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import {
  AirVent,
  Bath,
  Building2,
  CheckCircle2,
  DoorOpen,
  Dumbbell,
  Hash,
  Maximize,
  TreePine,
  Wifi,
  Wind,
} from "lucide-react";
import LocationMap from "./property-location";

export default function PropertyDetails() {
  const details = [
    { icon: Building2, label: "الدرجات", value: 2, color: "text-blue-500" },
    { icon: Hash, label: "الهوية", value: "يوجد", color: "text-teal-500" },
    { icon: DoorOpen, label: "الحمام", value: 3, color: "text-green-500" },
    { icon: Bath, label: "عدد الغرف", value: 5, color: "text-teal-500" },
    {
      icon: Maximize,
      label: "مساحة الارض الإجمالية",
      value: "224 m2",
      color: "text-teal-500",
    },
    {
      icon: Maximize,
      label: "المساحة المستخدمة",
      value: "224 m2",
      color: "text-teal-500",
    },
  ];

  const amenities = [
    { icon: Wifi, label: "واي فاي مجاني" },
    { icon: Wind, label: "مكيفة هواء" },
    { icon: TreePine, label: "حديقة طبيعية" },
    { icon: Building2, label: "رؤية جبلي" },
    { icon: Dumbbell, label: "صالة رياضيات" },
    { icon: AirVent, label: "مكيف هواء" },
  ];

  // بدل الـ function-based variant
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      className="mx-auto space-y-4 flex-1"
      initial="hidden"
      animate="visible"
      variants={cardVariants}
    >
      {/* Property Details Section */}
      <motion.div variants={cardVariants} transition={{ delay: 0.1 }}>
        <Card className="gap-2">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-right">
              تفاصيل العقار
            </CardTitle>
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
                      <detail.icon className={`w-5 h-5 ${detail.color}`} />
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

      {/* Amenities Section */}
      <motion.div variants={cardVariants} transition={{ delay: 0.2 }}>
        <Card>
          <CardHeader className="border-b">
            <CardTitle className="text-xl font-bold">المميزات</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
              {amenities.map((amenity, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-teal-50 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0" />
                  <div className="flex items-center justify-between gap-2 flex-1">
                    <span className="text-sm text-gray-700">
                      {amenity.label}
                    </span>
                    <amenity.icon className="hidden sm:block size-4 text-primary shrink-0" />
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Location Section */}
      <motion.div variants={cardVariants} transition={{ delay: 0.3 }}>
        <Card className="pt-6 pb-2">
          <CardHeader className="border-b">
            <CardTitle className="text-xl font-bold">الموقع</CardTitle>
          </CardHeader>
          <CardContent className="px-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: ["easeOut"] }}
              viewport={{ once: true }}
            >
              <LocationMap />
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
