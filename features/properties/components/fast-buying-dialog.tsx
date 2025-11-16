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
import { toast } from "sonner"; // or your toast library
import { useReservation } from "../hooks";
import { Property } from "../types";
import { useQuery } from "@tanstack/react-query";
import { SiteSettingsQuery } from "@/features/shared/query-options";

// ✅ Updated schema to match API requirements
const formSchema = z.object({
  customer_name: z
    .string()
    .min(2, { message: "الاسم يجب أن يكون حرفين على الأقل" }),
  customer_mobile: z
    .string()
    .min(10, { message: "رقم الهاتف يجب أن يكون 10 أرقام على الأقل" }),
  reservable_type: z.string().min(1, { message: "نوع الحجز مطلوب" }),
  reservable_id: z.string().min(1, { message: "معرف العقار مطلوب" }),
  guest_count: z.string().min(1, { message: "عدد الضيوف مطلوب" }),
});

type FormValues = z.infer<typeof formSchema>;

interface FastBuyingDialogProps {
  reservableType?: string; // e.g., "hotel", "property", etc.
  reservableId?: number;
  property: Property;
}

export default function FastBuyingDialog({
  reservableType = "hotel",
  reservableId = 1,
  property,
}: FastBuyingDialogProps) {
  const { data } = useQuery(SiteSettingsQuery);

  const [open, setOpen] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      customer_name: "",
      customer_mobile: "",
      reservable_type: reservableType,
      reservable_id: String(property.id),
      guest_count: "1",
    },
  });

  // ✅ Use the reservation hook
  const { mutate: createReservation, isPending } = useReservation({
    onSuccess: () => {
      toast.success("تم إرسال طلب الحجز بنجاح");

      // Optional: Send WhatsApp message after successful API call
      const values = form.getValues();
      const message = `طلب حجز جديد
الاسم: ${values.customer_name}
الهاتف: ${values.customer_mobile}`;

      const whatsappUrl = `https://wa.me/${
        data?.data.site_phone || ""
      }?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");

      setOpen(false);
      form.reset();
    },
  });

  // ✅ Submit handler
  const onSubmit = (values: FormValues) => {
    createReservation({
      customer_name: values.customer_name,
      customer_mobile: values.customer_mobile,
      reservable_type: values.reservable_type,
      reservable_id: parseInt(values.reservable_id),
      guest_count: parseInt(values.guest_count),
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="px-10 py-5 min-w-[210px]">حجز سريع</Button>
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
              <DialogTitle className="text-2xl font-bold   mb-4">
                حجز عقار سهل وعملي
              </DialogTitle>
              <p className="text-sm text-gray-600   mb-6">
                من خلال تعبئة النموذج أدناه وسنتواصل معك
              </p>
            </DialogHeader>

            <Form {...form}>
              <form
                className="space-y-6"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <FormField
                  control={form.control}
                  name="customer_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="  block">الاسم الكامل</FormLabel>
                      <FormControl>
                        <Input placeholder="اكتب اسمك الكامل" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="customer_mobile"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className=" block">رقم الهاتف</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="01066689891"
                          className=" "
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* 
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="reservable_type"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-right block">
                          نوع الحجز
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="hotel"
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
                    name="reservable_id"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-right block">
                          معرف العقار
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="1"
                            type="number"
                            className="text-right"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div> */}
                {/* 
                <FormField
                  control={form.control}
                  name="guest_count"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-right block">
                        عدد الضيوف
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="1"
                          type="number"
                          className="text-right"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                /> */}

                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 disabled:opacity-50"
                  >
                    {isPending ? (
                      <span>جاري الإرسال...</span>
                    ) : (
                      <>
                        <svg
                          className="w-5 h-5 ml-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        إرسال الطلب
                      </>
                    )}
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
