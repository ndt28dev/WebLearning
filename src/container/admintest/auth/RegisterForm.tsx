"use client";
import {
  Box,
  Button,
  Divider,
  Flex,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { IconArrowLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const router = useRouter();

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    validate: {
      name: (value) => {
        if (!value) return "Name không được bỏ trống";
        return null;
      },
      email: (value) => {
        if (!value) return "Email không được bỏ trống";
        if (!/^\S+@\S+$/.test(value)) return "Email không hợp lệ";
        return null;
      },
      password: (value) => (value ? null : "Mật khẩu không được bỏ trống"),
    },
  });

  const handleRegister = async (values: {
    name: string;
    email: string;
    password: string;
  }) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );

    const data = await res.json();
    if (data.statusCode === 201) {
      router.push(`/admintest/auth/verify/${data.data._id}`);
    } else if (data.statusCode === 400) {
      notifications.show({
        color: "red",
        title: "Error register",
        message: data.message,
        autoClose: 3000,
      });
    }
  };

  return (
    <Box style={{ width: "500px", margin: "0 auto", paddingTop: "100px" }}>
      <Title ta={"center"}>Đăng ký</Title>
      <form onSubmit={form.onSubmit(handleRegister)}>
        <TextInput
          mt="sm"
          label="Name"
          placeholder="Nhập name"
          key={form.key("name")}
          {...form.getInputProps("name")}
        />

        <TextInput
          mt="sm"
          label="Email"
          placeholder="Nhập email"
          key={form.key("email")}
          {...form.getInputProps("email")}
        />

        <PasswordInput
          mt="sm"
          label="Mật khẩu"
          placeholder="Nhập mật khẩu"
          key={form.key("password")}
          {...form.getInputProps("password")}
        />

        <Button type="submit" mt="md">
          Đăng ký
        </Button>
      </form>
      <Flex align={"center"} gap={5} pt={"md"}>
        <IconArrowLeft size={18} color={"var(--mantine-color-brand-5)"} />
        <Text
          fz={16}
          c={"var(--mantine-color-brand-5)"}
          style={{ cursor: "pointer" }}
          onClick={() => router.push("/admintest/auth/login")}
        >
          Quay lại trang chủ
        </Text>
      </Flex>
      <Divider my="md" />
      <Flex mt={"sm"} gap={5} justify={"center"} align={"center"}>
        <Text>Đã có tài khoản?</Text>
        <Text
          c={"var(--mantine-color-brand-5)"}
          style={{ cursor: "pointer" }}
          onClick={() => router.push("/admintest/auth/login")}
        >
          Đăng nhập
        </Text>
      </Flex>
    </Box>
  );
}
