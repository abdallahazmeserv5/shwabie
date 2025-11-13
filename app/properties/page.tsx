import CTA from "@/components/cta";
import Properties from "@/components/properties";
import { Suspense } from "react";

export default function Page() {
  return (
    <main className="mt-14">
      <Suspense fallback={<>...</>}>
        <Properties secondary />
      </Suspense>
      <CTA />
    </main>
  );
}
