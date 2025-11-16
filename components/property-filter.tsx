"use client";

import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Key, ReceiptCent, Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useTranslations } from "next-intl";

export default function PropertyFilter() {
  const t = useTranslations(); // flat translation keys
  const searchParams = useSearchParams();
  const router = useRouter();

  // Get initial values from URL params
  const initialTab = searchParams.get("type") || "rent";
  const initialSearch = searchParams.get("search") || "";

  const [activeTab, setActiveTab] = useState(initialTab);
  const [searchQuery, setSearchQuery] = useState(initialSearch);

  // Function to update URL params
  const updateQueryParams = useCallback(
    (newFilters: { [key: string]: string }) => {
      const params = new URLSearchParams(searchParams.toString());

      Object.entries(newFilters).forEach(([key, value]) => {
        if (value) {
          params.set(key, value);
        } else {
          params.delete(key);
        }
      });

      router.push(`?${params.toString()}`, { scroll: false });
    },
    [router, searchParams]
  );

  // Handle tab change
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    updateQueryParams({ type: value });
  };

  // Handle search with debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery !== initialSearch) {
        updateQueryParams({ search: searchQuery });
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery, initialSearch, updateQueryParams]);

  return (
    <div className="w-full flex flex-col sm:flex-row sm:items-center gap-1 justify-between relative z-30 mb-2">
      {/* Search Form */}
      <div className="bg-white relative flex-1 max-w-md">
        <Search
          className="absolute text-primary right-3 top-1/2 -translate-y-1/2 rounded-xl"
          size={20}
        />
        <Input
          type="text"
          placeholder={t("searchPlaceholder")} // translated
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pr-10 h-12 border-gray-200 focus:border-primary"
        />
      </div>

      {/* Tabs */}
      <Tabs
        value={activeTab}
        onValueChange={handleTabChange}
        className="text-white"
      >
        <TabsList className="p-2 gap-4 w-full h-14 bg-white rounded-xl">
          <TabsTrigger
            value="rent"
            className="rounded-lg text-base text-[#100A55] data-[state=active]:border-2 data-[state=active]:border-primary data-[state=active]:text-primary"
          >
            {t("rent")}
            <Key className="mr-1" />
          </TabsTrigger>

          <TabsTrigger
            value="sell"
            className="rounded-lg text-base text-[#100A55] data-[state=active]:border-2 data-[state=active]:border-primary data-[state=active]:text-primary"
          >
            {t("sell")}
            <ReceiptCent className="mr-1" />
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
