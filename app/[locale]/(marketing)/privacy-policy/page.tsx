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
    title: dict.legal.privacyMetaTitle,
    description: dict.legal.privacyMetaDescription,
    alternates: alternatesFor(params.locale, "/privacy-policy"),
  };
}

export default function PrivacyPolicyPage({
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
          {t.privacyIntroTitle}
        </h1>
        <p className="mt-4 text-lg text-ink-900/70">{t.privacyIntroBody}</p>

        <div className="prose prose-slate mt-12 max-w-none text-ink-900/80 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-ink-900 [&_h3]:mt-6 [&_h3]:font-semibold [&_h3]:text-ink-900 [&_p]:mt-3 [&_p]:leading-relaxed [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mt-1">
          <h2>1. Parties</h2>
          <p>
            1.1. This Privacy Policy describes how AI Growth Solution collects,
            uses, stores, shares, and protects your information in connection
            with services offered by AI Growth Solution — including services
            provided at or using the domain https://chat2sales.ai (the
            &ldquo;Site&rdquo;); tools or applications related to the Site (the
            &ldquo;Applications&rdquo;); and any images, text, chatbot data,
            metadata, and other material available through the Service
            (collectively, the &ldquo;Service&rdquo;).
          </p>
          <p>
            1.2. This Privacy Policy applies when you (&ldquo;you&rdquo;,
            &ldquo;User&rdquo;, or &ldquo;Respondent&rdquo;) access, visit, or
            use any portion of the Service. A User creates chatbots; a Respondent
            interacts with them.
          </p>
          <p>
            1.3. This Privacy Policy forms part of, and is governed by, the AI
            Growth Solution Terms and Conditions.
          </p>

          <h2>2. Agreement to Terms of Privacy Policy</h2>
          <p>
            2.1. Use of the Service is voluntary. You are not required to provide
            personal information unless you want features that require it.
          </p>
          <p>
            2.2. By creating a Chat2SalesAI Account, or otherwise using the
            Service, you expressly consent to the collection, use, disclosure,
            and retention described here.
          </p>

          <h2>3. Changes to the Privacy Policy</h2>
          <p>
            3.1. AI Growth Solution may update the policy periodically; users
            may need to accept the updated version on login. Material changes
            are posted on the Site or emailed. If you do not agree, discontinue
            use within 30 days.
          </p>

          <h2>4. Rights to Access, Rectify, Cancel, and Object</h2>
          <p>
            4.1. You may access, correct, delete, or object to processing of
            your data by contacting AI Growth Solution via the Site or emailing
            the data protection contact.
          </p>

          <h2>5. Personal Information About Users and Respondents</h2>
          <h3>5.1. Chat2SalesAI Users</h3>
          <p>
            Data collected directly includes Registration Info, Chatbot Data,
            Plan &amp; Billing Info, and other shared data (testimonials,
            campaign inputs). Indirectly collected data includes Usage Data,
            Device &amp; Application Data (IP, browser, device type, inferred
            geolocation), Referral Data, Third-Party Information (with
            permission), and Cookies.
          </p>
          <h3>5.2. Chat2SalesAI Respondents</h3>
          <p>
            Chatbot Responses are stored on behalf of, and under instructions
            of, the User. Indirectly collected: Usage Data, Device &amp;
            Application Data, Referral Data, Cookies, and Email Address (only
            if the chatbot asks and the Respondent provides it).
          </p>

          <h2>6. Purposes of Use and Information Sharing</h2>
          <ul>
            <li>6.1–6.3 Operate, maintain, and improve the Services; analyze usage patterns; conduct statistical analysis.</li>
            <li>6.4 Internal processing for testing, troubleshooting, fraud/spam prevention, research &amp; development.</li>
            <li>6.5 Use contact details to answer inquiries, send updates and educational tips. Opt-out available by emailing support.</li>
            <li>6.6 AI Growth Solution does not sell chatbot data. Data is shared only with service providers contractually bound to this policy.</li>
            <li>6.7 Disclosure limited to requested services, legal requirements, permission, or fraud/compliance needs.</li>
            <li>6.8 Data is not used beyond stated purposes.</li>
            <li>6.9 Data stored on AWS servers in Singapore and/or Stockholm (eu-north-1).</li>
            <li>6.10 Sub-processors comply with international data-transfer standards.</li>
            <li>6.11 In a merger/acquisition, data transfers to the successor entity under this policy.</li>
          </ul>

          <h2>7. Cookies</h2>
          <p>
            Cookies are small text files used to improve performance and
            remember preferences.
          </p>
          <ul>
            <li>7.1 Minimal necessary cookies (authentication + analytics).</li>
            <li>7.2 Future cookies: the policy will be updated, consent sought where required (e.g., GDPR), and cookie management options provided.</li>
            <li>7.3 Services are not intended for children under 16.</li>
            <li>7.4 Cookie policy updates will be posted on the page.</li>
          </ul>

          <h2>8. Account Cancellation, Opt-Out &amp; Data Modification</h2>
          <ul>
            <li>8.1 You may cancel or opt out at any time by email. Deleting your account permanently removes chatbot data within a reasonable time unless retention is legally required.</li>
            <li>8.2 You may modify or correct personal data by emailing the updated information.</li>
            <li>8.3 Some behavioral or technical data may be retained for legitimate business purposes.</li>
          </ul>

          <h2>9. Retention of Your Information</h2>
          <p>
            9.1 Retained while your account is active and needed for operations
            and compliance. After closure, limited data may be retained to
            fulfill legal obligations, prevent fraud, resolve disputes, and
            enforce Terms.
          </p>

          <h2>10. Use of Third-Party APIs and Data Access</h2>
          <p>
            10.1 We comply with data-protection policies of integrated APIs
            (WhatsApp, Meta, Google). Google Workspace and other third-party
            APIs are not used to develop or train unrelated AI/ML models. API
            access is restricted to legitimate operational functions.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            Data Protection Officer (DPO)
            <br />
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
