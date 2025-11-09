"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BlogCard from "@/features/blogs/components/blog-card";
import { useLocale } from "next-intl";
import TestemonialsCard from "@/features/testemonials/components/testemonials-card";

export default function FeaturedArticles() {
  const dir = useLocale() === "ar" ? "rtl" : "ltr";
  const plugin = React.useRef(
    Autoplay({
      delay: 1800,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const testimonials = [
    {
      id: 1,
      quote: "موقع مميز وموثوق وشراء سريع",
      description:
        "وجع العقارات هذا دورا في تجربة ممتازة وسهلة في البحث عن العقار المناسب. يتميز بجودته والحث وسهولة الاستخدام. مع امكانية تصفية النتائج",
      name: "مينا كمال",
      role: "عميل",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    },
    {
      id: 2,
      quote: "خدمة عملاء ممتازة واحترافية عالية",
      description:
        "تعاملت مع الموقع لأول مرة وكانت التجربة رائعة. الفريق متعاون جداً وساعدني في إيجاد العقار المثالي لعائلتي",
      name: "سارة أحمد",
      role: "عميلة",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    },
    {
      id: 3,
      quote: "أفضل منصة عقارية استخدمتها",
      description:
        "سهولة في التصفح وخيارات متنوعة. وجدت شقة أحلامي في وقت قياسي. أنصح الجميع بالتعامل معهم",
      name: "خالد محمود",
      role: "مستثمر",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    },
    {
      id: 4,
      quote: "ثقة ومصداقية في كل خطوة",
      description:
        "من البحث إلى التوقيع، كانت العملية سلسة وشفافة. فريق محترف يفهم احتياجات العملاء",
      name: "ليلى حسن",
      role: "عميلة",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    },
    {
      id: 1,
      quote: "موقع مميز وموثوق وشراء سريع",
      description:
        "وجع العقارات هذا دورا في تجربة ممتازة وسهلة في البحث عن العقار المناسب. يتميز بجودته والحث وسهولة الاستخدام. مع امكانية تصفية النتائج",
      name: "مينا كمال",
      role: "عميل",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    },
    {
      id: 2,
      quote: "خدمة عملاء ممتازة واحترافية عالية",
      description:
        "تعاملت مع الموقع لأول مرة وكانت التجربة رائعة. الفريق متعاون جداً وساعدني في إيجاد العقار المثالي لعائلتي",
      name: "سارة أحمد",
      role: "عميلة",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    },
    {
      id: 3,
      quote: "أفضل منصة عقارية استخدمتها",
      description:
        "سهولة في التصفح وخيارات متنوعة. وجدت شقة أحلامي في وقت قياسي. أنصح الجميع بالتعامل معهم",
      name: "خالد محمود",
      role: "مستثمر",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    },
    {
      id: 4,
      quote: "ثقة ومصداقية في كل خطوة",
      description:
        "من البحث إلى التوقيع، كانت العملية سلسة وشفافة. فريق محترف يفهم احتياجات العملاء",
      name: "ليلى حسن",
      role: "عميلة",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    },
  ];

  return (
    <section className="container mx-auto p-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center  gap-4 ">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            ماذا يقول عملائنا{" "}
          </h2>
          <p className="text-gray-500 text-sm">بعض الآراء من تجارب عملائنا </p>
        </div>
      </div>

      {/* Carousel */}
      <Carousel
        opts={{
          align: "start",
          loop: true,
          direction: dir,
        }}
        plugins={[plugin.current]}
        className="w-full"
      >
        <CarouselContent className="-ml-4 py-4">
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3  "
            >
              <TestemonialsCard testimonial={testimonial} index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation buttons */}
        <div className="flex justify-center gap-2 mt-4">
          <CarouselPrevious className="relative translate-y-0   border border-gray-300 hover:bg-emerald-600 hover:text-white transition" />
          <CarouselNext className="relative translate-y-0   border border-gray-300 hover:bg-emerald-600 hover:text-white transition" />
        </div>
      </Carousel>
    </section>
  );
}
