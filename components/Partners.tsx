/* eslint-disable @next/next/no-img-element */

const PARTNERS = [
  { src: "/images/partner-meta.webp", alt: "Meta Business Partners" },
  { src: "/images/partner-google.webp", alt: "Google Partner" },
  { src: "/images/partner-openai.webp", alt: "OpenAI" },
  { src: "/images/partner-deepseek.webp", alt: "DeepSeek" },
];

export default function Partners() {
  return (
    <section className="border-y border-ink-900/[0.06] bg-brand-50/30 py-14">
      <div className="container-xl">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-900/50">
          Global Accreditation and Strategic Partnerships
        </p>
        <div className="mt-8 grid grid-cols-2 items-center gap-8 sm:grid-cols-4 sm:gap-12">
          {PARTNERS.map((p) => (
            <div key={p.alt} className="flex items-center justify-center">
              <img
                src={p.src}
                alt={p.alt}
                className="h-10 w-auto object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-12"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
