import { createClient } from "@/lib/ofetch";
import { queryOptions } from "@tanstack/react-query";
import { Property } from "./types";
import { Root } from "../shared/types";

export const PropertyDataQuery = (propertySlug: string) =>
  queryOptions({
    queryKey: [`/hotels/${propertySlug}`],
    queryFn: () => createClient().get<Root<Property>>(`/hotel/${propertySlug}`),
  });

// Hook version for easier use in components
export const usePropertiesQuery = (searchParams?: URLSearchParams | null) => {
  return PropertiesDataQuery(searchParams);
};

// Types matching the actual API response
interface ApiResponse<T> {
  status: string;
  message: string;
  data: T;
  pagination?: {
    currentPage: number;
    lastPage: number;
    perPage: number;
    total: number;
  };
}

export interface FiltersData {
  countries?: Array<{ code: string; name: string }>;
  prices?: {
    min_price: number;
    max_price: number;
  };
  features?: Array<{ id: number; name: string }>;
}

// Updated query that accepts URL search params
export const PropertiesDataQuery = (searchParams?: URLSearchParams | null) => {
  // Build query string from search params
  const queryString = searchParams ? `?${searchParams.toString()}` : "";

  return queryOptions({
    queryKey: ["/hotels", queryString], // Include params in query key for proper caching
    queryFn: async () => {
      const response = await createClient().get<ApiResponse<Property[]>>(
        `/hotels${queryString}`
      );

      // Transform the response to include pagination in meta
      return {
        data: response.data,
        meta: response.pagination
          ? {
              current_page: response.pagination.currentPage,
              last_page: response.pagination.lastPage,
              per_page: response.pagination.perPage,
              total: response.pagination.total,
            }
          : undefined,
      };
    },
  });
};

// Alternative: If you want more granular control
export const createPropertiesQuery = (params: {
  type?: string; // rent, buy, sell
  search?: string;
  country_code?: string;
  city?: string;
  district?: string;
  rooms?: string;
  min_price?: number;
  max_price?: number;
  features?: string[];
  ratings?: string[];
  page?: number;
}) => {
  // Build URLSearchParams from params object
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      if (Array.isArray(value)) {
        // Handle array params (features, ratings)
        value.forEach((v) => searchParams.append(`${key}[]`, v));
      } else {
        searchParams.set(key, value.toString());
      }
    }
  });

  const queryString = searchParams.toString()
    ? `?${searchParams.toString()}`
    : "";

  return queryOptions({
    queryKey: ["/hotels", params], // Use params object for more precise cache key
    queryFn: async () => {
      const response = await createClient().get<ApiResponse<Property[]>>(
        `/hotels${queryString}`
      );

      return {
        data: response.data,
        meta: response.pagination
          ? {
              current_page: response.pagination.currentPage,
              last_page: response.pagination.lastPage,
              per_page: response.pagination.perPage,
              total: response.pagination.total,
            }
          : undefined,
      };
    },
  });
};

// Filters query
export const FiltersDataQuery = queryOptions({
  queryKey: ["/hotels/filters"],
  queryFn: async () => {
    const response = await createClient().get<ApiResponse<FiltersData>>(
      "/hotels/filters"
    );
    return response;
  },
});
