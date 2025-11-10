import { createClient } from "@/lib/ofetch";
import { queryOptions } from "@tanstack/react-query";
import { HomeData, Root, SiteSettings } from "./types";

export const SiteSettingsQuery = queryOptions({
  queryKey: ["/site-settings"],
  queryFn: () => createClient().get<Root<SiteSettings>>("/site-settings"),
});

export const HomeDataQuery = queryOptions({
  queryKey: ["/home"],
  queryFn: () => createClient().get<Root<HomeData>>("/home"),
});
