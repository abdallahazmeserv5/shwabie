import Footer from "@/features/footer/components/footer";
import { Header } from "@/features/header/components/header";
import "leaflet/dist/leaflet.css";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import { Alexandria } from "next/font/google";
import type React from "react";
import "./globals.css";

const _alexandra = Alexandria({
  subsets: ["latin", "arabic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "دار الشوون للعقارات - أفضل وسيط عقاري",
  description: "منصة تعاملك مع أفضل وسيط عقاري في السوق",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const local = await getLocale();

  return (
    <html lang={local} dir={local === "ar" ? "rtl" : "ltr"}>
      <body className={`${_alexandra.className} antialiased bg-white`}>
        <NextIntlClientProvider>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
