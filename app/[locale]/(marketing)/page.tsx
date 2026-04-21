import CTA from "@/components/CTA";
import Channels from "@/components/Channels";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Pillars from "@/components/Pillars";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { isLocale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";

export default function Page({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const dict = getDictionary(locale);

  return (
    <>
      <Hero dict={dict.hero} mockupDict={dict.chatMockup} locale={locale} />
      <Partners dict={dict.partners} />
      <Features dict={dict.features} />
      <Pillars dict={dict.pillars} />
      <Channels dict={dict.channels} />
      <FAQ dict={dict.faq} locale={locale} />
      <CTA dict={dict.cta} locale={locale} />
    </>
  );
}
