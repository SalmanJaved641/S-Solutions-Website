import type { Metadata } from "next";
import { privacyContent } from "@/content/legal";
import { LegalPage } from "@/components/layout/LegalPage";
export const metadata: Metadata = { title: "Privacy Policy", robots: { index: false, follow: false } };
export default function PrivacyPage() { return <LegalPage content={privacyContent} />; }
