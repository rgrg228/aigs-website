import CTA from "@/components/CTA";
import Channels from "@/components/Channels";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Pillars from "@/components/Pillars";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Partners />
        <Features />
        <Pillars />
        <Channels />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
