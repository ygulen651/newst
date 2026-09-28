import React from "react";
import { notFound } from "next/navigation";
import { getSolutions } from "@/lib/firebase/solutions";
import SolutionDetail from "./SolutionDetail";

export const dynamic = "force-dynamic";

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solutions = await getSolutions();
  const solution = solutions.find((item) => item.slug === slug);

  if (!solution) {
    notFound();
  }

  return <SolutionDetail solution={solution} others={solutions.filter((item) => item.slug !== slug)} />;
}
