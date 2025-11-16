"use client";

import Breadcrumb from "@/components/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Triangle from "@/features/shared/components/triangle";
import { zodResolver } from "@hookform/resolvers/zod";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useQuery } from "@tanstack/react-query";
import { SiteSettingsQuery } from "@/features/shared/query-options";

const LocationMap = dynamic(
  () => import("@/features/properties/components/property-location"),
  { ssr: false }
);

// ✅ Define schema with zod
const formSchema = z.object({
  fullName: z.string().min(2, { message: "الاسم يجب أن يكون حرفين على الأقل" }),
  phone: z
    .string()
    .min(10, { message: "رقم الهاتف يجب أن يكون 10 أرقام على الأقل" }),
  email: z.string().email({ message: "البريد الإلكتروني غير صحيح" }),
  address: z
    .string()
    .min(5, { message: "العنوان يجب أن يكون 5 أحرف على الأقل" }),
  city: z.string().min(2, { message: "المدينة مطلوبة" }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactusForm() {
  const { data } = useQuery(SiteSettingsQuery);

  const router = useRouter();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      address: "",
      city: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    const message = `شراء عقار سهل وعملي
الاسم: ${values.fullName}
الهاتف: ${values.phone}
البريد: ${values.email}
العنوان: ${values.address}
المدينة: ${values.city}`;

    const whatsappUrl = `https://wa.me/${
      data?.data.site_phone || ""
    }?text==${encodeURIComponent(message)}`;
    router.push(whatsappUrl);
    form.reset();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    form.handleSubmit(onSubmit)(e);
  };

  return (
    <section className="pt-8 container px-4 mx-auto  ">
      {/* Triangle Background */}
      <Triangle>
        <div className="relative z-20 text-center flex flex-col items-center gap-5 pb-20">
          <Breadcrumb
            items={[
              { title: "الرئيسية", href: "/" },
              { title: "تواصل معنا", href: "/contactus" },
            ]}
          />{" "}
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            إتصل بنا
          </h2>
        </div>
      </Triangle>

      <motion.div
        className="rounded-none overflow-y-auto bg-white border border-gray-200 py-20"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="grid md:grid-cols-2">
          {/* Right side - Map */}
          <motion.div
            className="hidden md:block relative max-w-[90%] w-full mx-auto"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <LocationMap h={600} />
          </motion.div>

          {/* Left side - Form */}
          <motion.div
            className="max-w-[90%] mx-auto"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-2xl font-bold  mb-4">
                تواصل معنا علي مدار اليوم{" "}
              </h2>
              <p className="text-sm text-gray-600   mb-6">
                من فضلك قم بكتابة البيانات التالية{" "}
              </p>
            </div>

            <Form {...form}>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="  block">الاسم الكامل</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="اكتب اسمك الكامل"
                            className=" "
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="  block">رقم الهاتف</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="اكتب رقمك"
                            className=" "
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className=" block">
                        البريد الإلكتروني
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="example@gmail.com"
                          className=" "
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="  block">العنوان</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="اكتب عنوانك بالتفصيل"
                          className=" "
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="  block">المدينة</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="اكتب مدينتك"
                          className=" "
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6"
                  >
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    إرسال التفاصيل
                  </Button>
                </motion.div>
              </form>
            </Form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
