const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://chat2sales.ai";

export default function OrganizationJsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AI Growth Solution",
    alternateName: "Chat2Sales",
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.webp`,
    sameAs: [
      "https://www.facebook.com/chat2sales",
      "https://www.instagram.com/chat2sales",
      "https://www.linkedin.com/company/chat2sales",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+60-17-249-8763",
        contactType: "sales",
        email: "hello@chat2sales.ai",
        areaServed: ["MY", "SG", "ID", "TH", "VN", "PH"],
        availableLanguage: ["English", "Chinese", "Malay"],
      },
    ],
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}#localbusiness`,
    name: "AI Growth Solution",
    image: `${SITE_URL}/images/logo.webp`,
    url: SITE_URL,
    telephone: "+60-17-249-8763",
    email: "hello@chat2sales.ai",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Level 9, Tower B, Menara UOA Bangsar 5, Jln. Bangsar Utama 1",
      addressLocality: "Kuala Lumpur",
      postalCode: "59000",
      addressRegion: "Wilayah Persekutuan",
      addressCountry: "MY",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 3.1278,
      longitude: 101.6794,
    },
    priceRange: "$$",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
    </>
  );
}
