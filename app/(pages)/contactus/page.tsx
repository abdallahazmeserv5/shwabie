import CTA from "@/components/cta";
import ContactusForm from "@/features/contactus/components/contactus-form";

export default function Page() {
  return (
    <main className="mt-2 lg:mt-24 flex flex-col gap-10">
      <ContactusForm />
      <CTA />
    </main>
  );
}
