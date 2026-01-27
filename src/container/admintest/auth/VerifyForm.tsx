"use client";

import {
  Box,
  Button,
  Divider,
  Flex,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { IconArrowLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

type Props = { id: string };

export default function VerifyForm({ id }: Props) {
  const router = useRouter();

  const form = useForm({
    initialValues: {
      code: "",
    },
    validate: {
      code: (value) => (value ? null : "Code không được bỏ trống"),
    },
  });

  const handleCheckCode = async (values: { code: string }) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/check-code`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id: id, code: values.code }),
      }
    );

    const data = await res.json();
    console.log(data);
    if (data.statusCode === 201) {
      notifications.show({
        color: "green",
        title: "Kiểm tra code",
        message: "Kích hoạt tài khoản thành công",
        autoClose: 3000,
      });
      router.push(`/admintest/auth/login`);
    } else if (data.statusCode === 400) {
      notifications.show({
        color: "red",
        title: "Error check code",
        message: data.message,
        autoClose: 3000,
      });
    }
  };

  return (
    <Box style={{ width: 500, margin: "0 auto", paddingTop: 100 }}>
      <Title ta="center">Kích hoạt tài khoản</Title>
      <Text ta="center" c="dimmed">
        Mã code đã được gửi tới email đăng ký, vui lòng kiểm tra email.
      </Text>

      <form onSubmit={form.onSubmit(handleCheckCode)}>
        <TextInput
          mt="sm"
          label="Code"
          placeholder="Nhập code"
          {...form.getInputProps("code")}
        />

        <Flex justify="space-between" align="center" mt="md">
          <Button type="submit">Xác thực</Button>
          <Text c="var(--mantine-color-brand-5)" style={{ cursor: "pointer" }}>
            Gửi lại mã
          </Text>
        </Flex>
      </form>

      <Flex align="center" gap={5} pt="md">
        <IconArrowLeft size={18} color="var(--mantine-color-brand-5)" />
        <Text
          c="var(--mantine-color-brand-5)"
          style={{ cursor: "pointer" }}
          onClick={() => router.push("/admintest/auth/login")}
        >
          Quay lại trang đăng nhập
        </Text>
      </Flex>
    </Box>
  );
}
