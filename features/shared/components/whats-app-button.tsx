"use client";
import { useQuery } from "@tanstack/react-query";
import { PhoneCall } from "lucide-react";
import { SiteSettingsQuery } from "../query-options";

export default function WhatsAppButton() {
  const { data } = useQuery(SiteSettingsQuery);
  const message = `اريد الاستفسار عن العقارات المتاحة`;
  const whatsappLink = `https://wa.me/${
    data?.data.site_phone || ""
  }?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 transition-all duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <PhoneCall className="size-6" />
    </a>
  );
}
