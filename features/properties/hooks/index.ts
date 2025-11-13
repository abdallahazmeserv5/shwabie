// hooks/useReservation.ts
import { createClient } from "@/lib/ofetch";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

export interface ReservationData {
  customer_name: string;
  customer_mobile: string;
  reservable_type: string;
  reservable_id: number;
  guest_count: number;
}

export interface ReservationResponse {
  // Define your API response type here
  success: boolean;
  message?: string;
  data?: any;
}

const client = createClient();

const createReservation = async (
  data: ReservationData
): Promise<ReservationResponse> => {
  return client.post<ReservationResponse>("/reservation", data);
};

export const useReservation = (
  options?: UseMutationOptions<ReservationResponse, Error, ReservationData>
) => {
  return useMutation({
    mutationFn: createReservation,
    ...options,
  });
};
