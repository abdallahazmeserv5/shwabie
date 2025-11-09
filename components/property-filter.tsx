"use client";

import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Home, Key, ReceiptCent, Search } from "lucide-react";
import { useState } from "react";

export default function PropertyFilter() {
  const [activeTab, setActiveTab] = useState("rent");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="w-full flex flex-col sm:flex-row sm:items-center gap-1 justify-between relative z-30 mb-2">
      {/* Search Form */}
      <div className="bg-white relative">
        <Search
          className="absolute text-primary right-3 top-1/2 -translate-y-1/2 rounded-xl "
          size={20}
        />
        <Input
          type="text"
          placeholder="ابحث عن عقار..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pr-10 h-12  border-gray-200 focus:border-primary"
        />
      </div>
      {/* Tabs */}
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="text-white "
      >
        <TabsList className="p-2  gap-4 w-full  h-14 bg-white rounded-xl">
          <TabsTrigger
            value="rent"
            className="rounded-lg text-base text-[#100A55]  data-[state=active]:border-2 data-[state=active]:border-primary data-[state=active]:text-primary "
          >
            إيجار
            <Key />
          </TabsTrigger>
          <TabsTrigger
            value="buy"
            className="rounded-lg text-base text-[#100A55]  data-[state=active]:border-2 data-[state=active]:border-primary data-[state=active]:text-primary "
          >
            شراء
            <Home />
          </TabsTrigger>
          <TabsTrigger
            value="sell"
            className="rounded-lg text-base text-[#100A55]  data-[state=active]:border-2 data-[state=active]:border-primary data-[state=active]:text-primary "
          >
            بيع
            <ReceiptCent />
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
