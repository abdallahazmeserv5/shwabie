import { createClient } from "@/lib/ofetch";
import { queryOptions } from "@tanstack/react-query";
import { Property } from "./types";
import { Root } from "../shared/types";

export const PropertyDataQuery = queryOptions({
  queryKey: ["/hotels"],
  queryFn: () => createClient().get<Root<Property[]>>("/hotels"),
});
