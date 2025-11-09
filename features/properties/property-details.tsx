import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Hash,
  DoorOpen,
  Bath,
  Maximize,
  Wifi,
  Wind,
  TreePine,
  Dumbbell,
  AirVent,
  CheckCircle2,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
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

  return (
    <div className=" mx-auto p-4 space-y-4" dir="rtl">
      {/* Property Details Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold text-right">
            تفاصيل العقار
          </CardTitle>
        </CardHeader>

        <CardContent className="pt-2">
          <div className="grid grid-cols-2 gap-0">
            {details.map((detail, index) => (
              <div key={index} className="flex flex-col">
                {/* المحتوى الأساسي */}
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

                {/* الفاصل تحت العنصر */}
                <Separator className="h-px bg-gray-200 w-full"></Separator>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Amenities Section */}
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="text-xl font-bold ">المميزات</CardTitle>
        </CardHeader>
        <CardContent className=" ">
          <div className="grid grid-cols-3 gap-1">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-teal-50 transition-colors"
              >
                {/* checkmark icon at start */}
                <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0" />

                {/* text + amenity icon at end */}
                <div className="flex items-center justify-between gap-2 flex-1">
                  <span className="text-sm text-gray-700">{amenity.label}</span>
                  <amenity.icon className="w-4 h-4 text-primary shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* location Section */}
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="text-xl font-bold ">الموقع</CardTitle>
        </CardHeader>
        <CardContent className=" ">
          <LocationMap />
        </CardContent>
      </Card>
    </div>
  );
}
