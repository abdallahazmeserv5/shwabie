import CTA from "@/components/cta";
import FontactusForm from "@/features/contactus/components/contactus-form";

export default function Page() {
  return (
    <main className="mt-2 lg:mt-24 flex flex-col gap-10">
      <FontactusForm />
      <CTA />
    </main>
  );
}
