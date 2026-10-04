import type { Metadata } from "next";
import { termsContent } from "@/content/legal";
import { LegalPage } from "@/components/layout/LegalPage";
export const metadata: Metadata = { title: "Terms & Conditions", robots: { index: false, follow: false } };
export default function TermsPage() { return <LegalPage content={termsContent} />; }
