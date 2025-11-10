"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  city: z.string().optional(),
  district: z.string().optional(),
  finishType: z.string().optional(),
  rooms: z.string().optional(),
  propertyType: z.string().optional(),
  adNumber: z.string().optional(),
  price: z.tuple([z.number(), z.number()]),
});

export default function PropertyFilterForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      city: "",
      district: "",
      finishType: "",
      rooms: "",
      propertyType: "",
      adNumber: "",
      price: [0, 7400],
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex flex-wrap gap-3 items-end bg-emerald-50 p-4 rounded-xl"
        dir="rtl"
      >
        {/* المدينة */}
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem className="flex-1 ">
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <MapPin className="w-4 h-4 ml-2 opacity-70" />
                    <SelectValue placeholder="المدينة" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="الرياض">الرياض</SelectItem>
                  <SelectItem value="جدة">جدة</SelectItem>
                  <SelectItem value="مكة">مكة</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        {/* الحي */}
        <FormField
          control={form.control}
          name="district"
          render={({ field }) => (
            <FormItem className="flex-1 ">
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <MapPin className="w-4 h-4 ml-2 opacity-70" />
                    <SelectValue placeholder="الحي" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="النخيل">النخيل</SelectItem>
                  <SelectItem value="العقيق">العقيق</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        {/* نوع التشطيب */}
        <FormField
          control={form.control}
          name="finishType"
          render={({ field }) => (
            <FormItem className="flex-1 ">
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="نوع التشطيب" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="عادي">عادي</SelectItem>
                  <SelectItem value="فاخر">فاخر</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        {/* عدد الغرف */}
        <FormField
          control={form.control}
          name="rooms"
          render={({ field }) => (
            <FormItem className="flex-1 ">
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="عدد الغرف" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4+</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        {/* نوع العقار */}
        <FormField
          control={form.control}
          name="propertyType"
          render={({ field }) => (
            <FormItem className="flex-1 ">
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="نوع العقار" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="شقة">شقة</SelectItem>
                  <SelectItem value="فيلا">فيلا</SelectItem>
                  <SelectItem value="أرض">أرض</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        {/* رقم الإعلان */}
        <FormField
          control={form.control}
          name="adNumber"
          render={({ field }) => (
            <FormItem className="flex-1 ">
              <FormControl>
                <Input placeholder="رقم الإعلان" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        {/* السعر */}
        <div className="flex flex-col gap-2 min-w-[250px] flex-1">
          <span className="text-sm font-medium text-muted-foreground">
            السعر
          </span>
          <div className="flex gap-2">
            <Input placeholder="من" className="w-1/2" type="number" />
            <Input placeholder="إلى" className="w-1/2" type="number" />
          </div>
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Slider
                    min={0}
                    max={10000}
                    step={100}
                    value={field.value}
                    onValueChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" className="mt-2">
          بحث
        </Button>
      </form>
    </Form>
  );
}
