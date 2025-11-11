import { createClient } from "@/lib/ofetch";
import { queryOptions } from "@tanstack/react-query";
import { Property } from "./types";
import { Root } from "../shared/types";

export const PropertiesDataQuery = queryOptions({
  queryKey: ["/hotels"],
  queryFn: () => createClient().get<Root<Property[]>>("/hotels"),
});
export const PropertyDataQuery = (propertySlug: string) =>
  queryOptions({
    queryKey: [`/hotels/${propertySlug}`],
    queryFn: () => createClient().get<Root<Property>>(`/hotel/${propertySlug}`),
  });
