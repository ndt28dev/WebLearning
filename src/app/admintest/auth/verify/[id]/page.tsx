import VerifyForm from "@/container/admintest/auth/VerifyForm";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <VerifyForm id={id} />;
}
