import CTA from "@/components/cta";
import AboutUsFeatures from "@/features/contactus/components/about-us-features";
import AboutusSection from "@/features/contactus/components/aboutus-section";
import { Root } from "@/features/shared/types";
import { createClient } from "@/lib/ofetch";
import { createQueryClient } from "@/lib/query-client";

export interface AboutUs {
  title: string;
  description: string;
  second_title: string;
  second_description: string;
  image: string;
  features: AboutusFeature[];
  footers: Footer[];
  galleries: string[];
}

export interface AboutusFeature {
  description: string;
  image: string;
}

export interface Footer {
  title: string;
}

export default async function Page() {
  const queryClient = createQueryClient();

  const aboutusResponse = await queryClient.fetchQuery({
    queryKey: ["/about-us"],
    queryFn: () => createClient().get<Root<AboutUs>>("/about-us"),
  });

  const aboutusData = aboutusResponse.data;

  return (
    <main className="mt-2 lg:mt-24 flex flex-col gap-10">
      <AboutusSection data={aboutusData} />
      <AboutUsFeatures features={aboutusData.features} />
      <CTA />
    </main>
  );
}
