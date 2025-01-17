import { redirect } from "next/navigation";

async function Page({ params }: { params: Promise<{ palavraChave: string }> }) {
  const { palavraChave } = await params;

  redirect(`https://ui.shadcn.com/docs/components/toast`);
}

export default Page;
