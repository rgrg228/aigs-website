import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SubPageTemplate from "@/components/SubPageTemplate";
import { SOLUTIONS, listSubPageSlugs } from "@/lib/sub-pages";

export function generateStaticParams() {
  return listSubPageSlugs("solutions").map((slug) => ({ slug }));
}

export async function generateMetadata(
  { params }: { params: { slug: string } },
): Promise<Metadata> {
  const page = SOLUTIONS[params.slug];
  if (!page) return {};
  return {
    title: `${page.eyebrow} | Chat2Sales`,
    description: page.subtitle,
  };
}

export default function SolutionPage({ params }: { params: { slug: string } }) {
  const page = SOLUTIONS[params.slug];
  if (!page) notFound();
  return <SubPageTemplate page={page} />;
}
