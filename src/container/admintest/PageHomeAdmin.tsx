import { auth } from "@/auth";
import { Button } from "@mantine/core";
import LogoutButton from "./auth/LogoutButton";

export default async function PageHomeAdmin() {
  const session = await auth();

  return (
    <div>
      <h1>Hello {session?.user?.name}</h1>
      <p>{session?.user?.email}</p>
      <LogoutButton />
    </div>
  );
}
