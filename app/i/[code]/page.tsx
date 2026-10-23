import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { InviteClient } from "@/components/InviteClient";

export const metadata: Metadata = {
  title: "You're invited",
  description: "Join Hypefindr with your invite code.",
  robots: { index: false, follow: false },
};

export default async function InvitePage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;

  return (
    <>
      <Nav />
      <main className="invite">
        <InviteClient code={decodeURIComponent(code)} />
      </main>
      <Footer />
    </>
  );
}
