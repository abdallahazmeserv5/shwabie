import { useLocale } from "next-intl";

export const useDirection = () => {
  const local = useLocale();
  const isRtl = local === "ar";
  return { isRtl };
};
