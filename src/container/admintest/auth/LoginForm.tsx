"use client";

import {
  Button,
  TextInput,
  PasswordInput,
  Box,
  Title,
  Divider,
  Flex,
  Text,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconArrowLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { authenticate } from "@/utils/action";
import { useSession } from "next-auth/react";
import { notifications } from "@mantine/notifications";
import { useState } from "react";
import ModalAccount from "./ModalAccount";
import ModaForgotPassword from "./ModaForgotPassword";

export default function LoginForm() {
  const router = useRouter();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenModalForgotPass, setIsOpenModalForgotPass] = useState(false);
  const [email, setEmail] = useState("");

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) => {
        if (!value) return "Email không được bỏ trống";
        if (!/^\S+@\S+$/.test(value)) return "Email không hợp lệ";
        return null;
      },
      password: (value) => (value ? null : "Mật khẩu không được bỏ trống"),
    },
  });

  const handleLogin = async (values: { email: string; password: string }) => {
    setEmail("");
    const res = await authenticate(values.email, values.password);
    if (res?.error) {
      if (res.code === 2) {
        setEmail(values.email);
        setIsOpenModal(true);
        return;
      }
      notifications.show({
        color: "red",
        title: "Error login",
        message: res.error,
        autoClose: 3000,
      });
    } else {
      router.push("/admintest");
    }
  };

  return (
    <>
      <Box style={{ width: "500px", margin: "0 auto", paddingTop: "100px" }}>
        <Title ta={"center"}>Đăng nhập</Title>
        <form onSubmit={form.onSubmit(handleLogin)}>
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

          <Flex align={"center"} justify={"space-between"} mt="md">
            <Button type="submit">Đăng nhập</Button>
            <Text
              c={"var(--mantine-color-brand-5)"}
              style={{ cursor: "pointer" }}
              onClick={() => setIsOpenModalForgotPass(true)}
            >
              Quên mật khẩu
            </Text>
          </Flex>
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
          <Text>Chưa có tài khoản?</Text>
          <Text
            c={"var(--mantine-color-brand-5)"}
            style={{ cursor: "pointer" }}
            onClick={() => router.push("/admintest/auth/register")}
          >
            Đăng ký tại đây
          </Text>
        </Flex>
      </Box>
      <ModalAccount
        opened={isOpenModal}
        userEmail={email}
        close={() => setIsOpenModal(false)}
      />
      <ModaForgotPassword
        opened={isOpenModalForgotPass}
        close={() => setIsOpenModalForgotPass(false)}
      />
    </>
  );
}
