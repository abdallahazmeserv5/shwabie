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
import { useSearchParams, useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import * as z from "zod";

const formSchema = z.object({
  country_code: z.string().optional(),
  city: z.string().optional(),
  district: z.string().optional(),
  rooms: z.string().optional(),
  min_price: z.number().optional(),
  max_price: z.number().optional(),
});

interface PropertyFilterFormProps {
  filters?: {
    countries?: Array<{ code: string; name: string }>;
    prices?: {
      min_price: number;
      max_price: number;
    };
  };
}

export default function PropertyFilterForm({
  filters,
}: PropertyFilterFormProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Get initial values from URL or filters
  const initialMinPrice =
    Number(searchParams.get("min_price")) || filters?.prices?.min_price || 0;
  const initialMaxPrice =
    Number(searchParams.get("max_price")) ||
    filters?.prices?.max_price ||
    10000;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      country_code: searchParams.get("country_code") || "",
      city: searchParams.get("city") || "",
      district: searchParams.get("district") || "",
      rooms: searchParams.get("rooms") || "",
      min_price: initialMinPrice,
      max_price: initialMaxPrice,
    },
  });

  // Update URL params
  const updateQueryParams = useCallback(
    (newFilters: { [key: string]: string | number }) => {
      const params = new URLSearchParams(searchParams.toString());

      Object.entries(newFilters).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== "") {
          params.set(key, value.toString());
        } else {
          params.delete(key);
        }
      });

      router.push(`?${params.toString()}`, { scroll: false });
    },
    [router, searchParams]
  );

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Filter out empty values
    const filteredValues = Object.entries(values).reduce(
      (acc, [key, value]) => {
        if (value !== undefined && value !== null && value !== "") {
          acc[key] = value;
        }
        return acc;
      },
      {} as Record<string, string | number>
    );

    updateQueryParams(filteredValues);
  };

  // Reset form
  const handleReset = () => {
    form.reset({
      country_code: "",
      city: "",
      district: "",
      rooms: "",
      min_price: filters?.prices?.min_price || 0,
      max_price: filters?.prices?.max_price || 10000,
    });

    // Clear URL params
    router.push(window.location.pathname, { scroll: false });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex flex-wrap gap-3 items-end bg-emerald-50 p-4 rounded-xl mt-4"
        dir="rtl"
      >
        {/* الدولة (Country) */}
        {filters?.countries && filters.countries.length > 0 && (
          <FormField
            control={form.control}
            name="country_code"
            render={({ field }) => (
              <FormItem className="flex-1 min-w-[200px]">
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <MapPin className="w-4 h-4 ml-2 opacity-70" />
                      <SelectValue placeholder="الدولة" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {filters?.countries?.map((country) => (
                      <SelectItem key={country.code} value={country.code}>
                        {country.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
        )}

        {/* المدينة */}
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem className="flex-1 min-w-[200px]">
              <FormControl>
                <Input placeholder="المدينة" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        {/* الحي */}
        <FormField
          control={form.control}
          name="district"
          render={({ field }) => (
            <FormItem className="flex-1 min-w-[200px]">
              <FormControl>
                <Input placeholder="الحي" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        {/* عدد الغرف */}
        <FormField
          control={form.control}
          name="rooms"
          render={({ field }) => (
            <FormItem className="flex-1 min-w-[150px]">
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="عدد الغرف" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="1">1 غرفة</SelectItem>
                  <SelectItem value="2">2 غرفة</SelectItem>
                  <SelectItem value="3">3 غرف</SelectItem>
                  <SelectItem value="4">4 غرف</SelectItem>
                  <SelectItem value="5">5+ غرف</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        {/* السعر */}
        <div className="flex flex-col gap-2 min-w-[250px] flex-1">
          <span className="text-sm font-medium text-muted-foreground">
            السعر
          </span>
          <div className="flex gap-2">
            <FormField
              control={form.control}
              name="min_price"
              render={({ field }) => (
                <FormItem className="w-1/2">
                  <FormControl>
                    <Input
                      placeholder="من"
                      type="number"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="max_price"
              render={({ field }) => (
                <FormItem className="w-1/2">
                  <FormControl>
                    <Input
                      placeholder="إلى"
                      type="number"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <Slider
            min={filters?.prices?.min_price || 0}
            max={filters?.prices?.max_price || 10000}
            step={100}
            value={[
              form.watch("min_price") || initialMinPrice,
              form.watch("max_price") || initialMaxPrice,
            ]}
            onValueChange={(value) => {
              form.setValue("min_price", value[0]);
              form.setValue("max_price", value[1]);
            }}
          />
        </div>

        <div className="flex gap-2">
          <Button type="submit" className="mt-2">
            بحث
          </Button>
          <Button
            type="button"
            variant="outline"
            className="mt-2"
            onClick={handleReset}
          >
            مسح الفلاتر
          </Button>
        </div>
      </form>
    </Form>
  );
}
