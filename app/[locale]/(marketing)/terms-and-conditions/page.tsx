import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { isLocale } from "@/lib/i18n/config";
import { alternatesFor } from "@/lib/i18n/alternates";

export function generateMetadata(
  { params }: { params: { locale: string } },
): Metadata {
  if (!isLocale(params.locale)) return {};
  const dict = getDictionary(params.locale);
  return {
    title: dict.legal.termsMetaTitle,
    description: dict.legal.termsMetaDescription,
    alternates: alternatesFor(params.locale, "/terms-and-conditions"),
  };
}

export default function TermsPage({
  params,
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const t = getDictionary(params.locale).legal;
  return (
    <section className="section">
      <div className="container-xl max-w-3xl">
        <span className="eyebrow">{t.eyebrow}</span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
          {t.termsIntroTitle}
        </h1>
        <p className="mt-4 text-lg text-ink-900/70">{t.termsIntroBody}</p>

        <div className="prose prose-slate mt-12 max-w-none text-ink-900/80 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-ink-900 [&_p]:mt-3 [&_p]:leading-relaxed [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mt-1">
          <h2>1. Terminology</h2>
          <p>
            The terms &ldquo;Client&rdquo;, &ldquo;You&rdquo;, and
            &ldquo;Your&rdquo; refer to the person accessing this website. The
            terms &ldquo;The Company&rdquo;, &ldquo;Ourselves&rdquo;,
            &ldquo;We&rdquo;, &ldquo;Our&rdquo;, and &ldquo;Us&rdquo; refer to
            AI Growth Solution. The terms &ldquo;Party&rdquo;,
            &ldquo;Parties&rdquo;, and &ldquo;Us&rdquo; refer to both the Client
            and the Company. All terms relate to offer, acceptance, and
            consideration necessary to undertake assistance under the prevailing
            laws of Malaysia.
          </p>

          <h2>2. Cookies</h2>
          <p>
            By accessing Chat2SalesAI, you agree to the use of cookies per the
            Privacy Policy. Some affiliate or advertising partners may also use
            cookies for analytics or ad-performance tracking.
          </p>

          <h2>3. License</h2>
          <p>
            AI Growth Solution and/or its licensors own all IP rights in the
            material on Chat2SalesAI. You may access content for personal use
            only. You must not: republish, sell/rent/sub-license,
            reproduce/duplicate/copy, or redistribute content.
          </p>

          <h2>4. User-Generated Content (Comments &amp; Posts)</h2>
          <p>
            Comments are not pre-filtered; they reflect the poster&apos;s views.
            AI Growth Solution is not liable for Comments but reserves the
            right to remove any inappropriate, offensive, or infringing content.
            You warrant your Comments are permitted, non-infringing,
            non-defamatory, and not used to solicit business or unlawful
            activity. You grant AI Growth Solution a non-exclusive license to
            use, reproduce, and distribute Comments in any form.
          </p>

          <h2>5. Hyperlinking to Our Content</h2>
          <p>
            Government agencies, search engines, news organizations, online
            directories, and accredited businesses may link without prior
            approval. Other organizations may request approval via email.
            Approved orgs may link using the company name, the URL
            https://chat2sales.ai, or a contextual description. No use of logo
            or artwork without written permission.
          </p>

          <h2>6. iFrames</h2>
          <p>Framing the site without prior written consent is prohibited.</p>

          <h2>7. Content Liability</h2>
          <p>
            AI Growth Solution is not responsible for content on your site. You
            indemnify and defend AI Growth Solution against all claims arising
            from your website. No defamatory, obscene, criminal, or
            rights-infringing content is allowed.
          </p>

          <h2>8. Your Privacy</h2>
          <p>
            Refer to the{" "}
            <a href="/privacy-policy" className="text-brand-700 hover:underline">
              Privacy Policy
            </a>
            .
          </p>

          <h2>9. Reservation of Rights</h2>
          <p>
            AI Growth Solution may request removal of any link or reference and
            may amend the Terms at any time.
          </p>

          <h2>10. Removal of Links</h2>
          <p>
            Contact the company about offensive links. Removal is not guaranteed
            unless legally required. AI Growth Solution does not guarantee the
            website is complete, accurate, or up to date.
          </p>

          <h2>11. Third-Party Integrations</h2>
          <p>
            AI Growth Solution is not liable for failures of Integrated
            Software. Users are responsible for compatibility and best
            practices. No warranties, express or implied, on third-party tools.
            Users release and indemnify AI Growth Solution.
          </p>

          <h2>12. Facebook Ads Compliance</h2>
          <p>
            AI Growth Solution runs paid campaigns on Meta platforms (Facebook,
            Instagram, Messenger, WhatsApp). We adhere to Meta Ads policies, do
            not use deceptive/misleading/discriminatory practices, and handle
            custom audiences per the Privacy Policy. Users agree not to upload
            data that violates Meta&apos;s Terms (fake engagement, false claims,
            unauthorized personal-data sharing). Violations may result in
            account suspension or termination without notice.
          </p>

          <h2>13. Disclaimer</h2>
          <p>
            To the fullest extent permitted by law, all warranties and
            representations about the website are excluded. Nothing limits
            liability for death/personal injury, fraud, or misrepresentation,
            or liabilities that cannot be excluded by law. As long as the
            website and services are provided free of charge, AI Growth
            Solution is not liable for any loss or damage.
          </p>

          <h2>14. Contact Us</h2>
          <p>
            Email:{" "}
            <a href="mailto:hello@chat2sales.ai" className="text-brand-700 hover:underline">
              hello@chat2sales.ai
            </a>
            <br />
            Website: https://chat2sales.ai
            <br />
            Company: AI Growth Solution
          </p>
        </div>
      </div>
    </section>
  );
}
