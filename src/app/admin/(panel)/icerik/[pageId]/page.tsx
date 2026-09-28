import { notFound } from "next/navigation";
import { getPageOverrides } from "@/lib/firebase/content";
import { requireAdmin } from "@/lib/firebase/session";
import { getPageDef, resolvePageValues } from "@/lib/content/registry";
import ContentForm from "../ContentForm";

export default async function EditPageContent({ params }: { params: Promise<{ pageId: string }> }) {
  await requireAdmin();
  const { pageId } = await params;
  const page = getPageDef(pageId);
  if (!page) notFound();

  const values = resolvePageValues(page, await getPageOverrides(pageId));
  return <ContentForm pageId={pageId} initialValues={values} />;
}
