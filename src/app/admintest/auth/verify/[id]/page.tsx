import VerifyForm from "@/container/admintest/auth/VerifyForm";

export default function page({ params }: { params: { id: string } }) {
  return <VerifyForm id={params.id} />;
}
