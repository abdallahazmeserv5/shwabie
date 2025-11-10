"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

type BreadcrumbItem = {
  title: string;
  href?: string;
};

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      aria-label="breadcrumb"
      className="flex items-center space-x-2 text-sm text-gray-600"
    >
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {item.href ? (
            <Link
              href={item.href}
              className={cn(
                "hover:text-gray-900 transition-colors duration-150",
                index == 0 && "text-primary"
              )}
            >
              {item.title}
            </Link>
          ) : (
            <span className="text-gray-500">{item.title}</span>
          )}

          {index < items.length - 1 && (
            <div className="mx-1 text-gray-400 size-3 bg-[#00985B]" />
          )}
        </div>
      ))}
    </nav>
  );
}
