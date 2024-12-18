"use client";
import dynamic from "next/dynamic";

const TermsMain = dynamic(() => import("./terms-main"), { ssr: false });

export default function Page() {
  return <TermsMain />;
}
