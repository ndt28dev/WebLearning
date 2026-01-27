"use client";

import { Button } from "@mantine/core";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({
      redirect: false,
    });

    router.push("/admintest/auth/login");
  };

  return (
    <Button color="red" onClick={handleLogout}>
      Logout
    </Button>
  );
}
