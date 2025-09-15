import FAQ from "@/components/faq";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { Navbar } from "@/components/navbar";
import Pricing from "@/components/pricing";
import Testimonial from "@/components/testimonial";

export default function Home({ params }: { params: { locale: string } }) {
  const { locale } = params;
  return (
    <>
      <Navbar locale={locale} />
      <Hero />
      <Features />
      <FAQ />
      <Testimonial />
      <Pricing />
      <Footer />
    </>
  );
}
