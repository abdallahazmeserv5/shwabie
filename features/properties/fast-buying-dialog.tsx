"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import ImageFallback from "@/components/image-fallback";

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
  propertyArea: z.string().min(1, { message: "مساحة العقار مطلوبة" }),
});

type FormValues = z.infer<typeof formSchema>;

export default function FastBuyingDialog() {
  const [open, setOpen] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      address: "",
      city: "",
      propertyArea: "",
    },
  });

  // ✅ Properly typed submit handler
  const onSubmit = (values: FormValues) => {
    console.log(values);

    const message = `شراء عقار سهل وعملي
الاسم: ${values.fullName}
الهاتف: ${values.phone}
البريد: ${values.email}
العنوان: ${values.address}
المدينة: ${values.city}
مساحة العقار: ${values.propertyArea} م²`;

    const whatsappUrl = `https://wa.me/+966123456?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");

    setOpen(false);
    form.reset();
  };

  // ✅ Type-safe wrapper for manual submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    form.handleSubmit(onSubmit)(e);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="px-10 py-5 min-w-[210px]">شراء سريع</Button>
      </DialogTrigger>

      <DialogContent className="max-w-4xl rounded-none max-h-[90vh] overflow-y-auto bg-white py-20">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Right side - Image */}
          <div className="relative">
            <ImageFallback
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop"
              alt="عقار"
              className="w-full h-full object-cover"
              fill
            />
          </div>

          {/* Left side - Form */}
          <div className="max-w-[80%] mx-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-right mb-4">
                شراء عقار سهل وعملي
              </DialogTitle>
              <p className="text-sm text-gray-600 text-right mb-6">
                من خلال تعبئة النموذج أدناه وسنتواصل معك
              </p>
            </DialogHeader>

            <Form {...form}>
              {/* ✅ changed div → form */}
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-right block">
                          الاسم الكامل
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="اكتب اسمك الكامل"
                            className="text-right"
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
                        <FormLabel className="text-right block">
                          رقم الهاتف
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="اكتب رقمك"
                            className="text-right"
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
                      <FormLabel className="text-right block">
                        البريد الإلكتروني
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="example@gmail.com"
                          className="text-right"
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
                      <FormLabel className="text-right block">
                        العنوان
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="اكتب عنوانك بالتفصيل"
                          className="text-right"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-right block">
                          المدينة
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="اكتب مدينتك"
                            className="text-right"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="propertyArea"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-right block">
                          مساحة العقار المطلوبة
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="20"
                            type="number"
                            className="text-right"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="pt-4">
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
                </div>
              </form>
            </Form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
