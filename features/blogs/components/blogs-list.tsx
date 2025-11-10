"use client";

import { useState } from "react";
import ImageFallback from "@/components/image-fallback";
import Pagnation from "@/features/properties/components/pagnation";
import BlogCard from "./blog-card";
import { useQuery } from "@tanstack/react-query";
import { createClient } from "@/lib/ofetch";
import { Blog } from "../types";
import { Root } from "@/features/shared/types";
import Breadcrumb from "@/components/breadcrumb";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Triangle from "@/features/shared/components/triangle";

export default function BlogsList() {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading } = useQuery({
    queryKey: ["/blogs", currentPage],
    queryFn: () =>
      createClient().get<Root<Blog[]>>(`/blogs?page=${currentPage}`),
  });

  const blogs = data?.data ?? [];
  const pagination = data?.pagination;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className=" 2xl:pt-28 container px-4 mx-auto">
      <Triangle>
        <div className="relative z-20 text-center flex flex-col items-center gap-5 pb-20">
          <Breadcrumb
            items={[
              { title: "الرئيسية", href: "/" },
              { title: "المدونة", href: "/blogs" },
            ]}
          />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary drop-shadow-2xl">
            مكتب دار الشويبي للعقارات
          </h2>
        </div>
      </Triangle>

      <div className="flex flex-col gap-2">
        <div className="bg-[#e8fdf5] grid sm:col-span-2 2xl:grid-cols-3 gap-3 p-4 -mt-12 relative z-10">
          {isLoading ? (
            <div className="col-span-full text-center py-8">
              جاري التحميل...
            </div>
          ) : blogs.length === 0 ? (
            <div className="col-span-full text-center py-8">لا توجد مدونات</div>
          ) : (
            blogs.map((article, index) => (
              <BlogCard
                key={article.id || index}
                article={article}
                index={index}
              />
            ))
          )}
        </div>
        {pagination && pagination.lastPage > 1 && (
          <Pagnation
            currentPage={pagination.currentPage}
            lastPage={pagination.lastPage}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </section>
  );
}
