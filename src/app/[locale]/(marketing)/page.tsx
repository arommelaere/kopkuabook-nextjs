import FAQ from "@/components/faq";
import Features from "@/components/features";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";
import Testimonial from "@/components/testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      {/* <FAQ />
      <Testimonial /> */}
      <Pricing />
    </>
  );
}
