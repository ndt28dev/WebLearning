"use client";

import {
  Button,
  Flex,
  Group,
  Modal,
  Stack,
  Stepper,
  Text,
  TextInput,
  PasswordInput,
  em,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useState } from "react";

type Props = {
  opened: boolean;
  close: () => void;
};

export default function ModalForgotPassword({ opened, close }: Props) {
  const [active, setActive] = useState(0);
  const [userId, setUserId] = useState("");

  const form = useForm({
    initialValues: {
      email: "",
      code: "",
      newPassword: "",
      confirmPassword: "",
    },

    validate: {
      email: (v) => {
        if (!v) return "Email không được bỏ trống";
        if (!/^\S+@\S+$/.test(v)) return "Email không hợp lệ";
        return null;
      },

      code: (v) => (active === 1 && !v ? "Code không được bỏ trống" : null),

      newPassword: (v) => {
        if (active !== 1) return null;
        if (!v) return "Mật khẩu mới không được bỏ trống";
        return null;
      },

      confirmPassword: (v, values) => {
        if (active !== 1) return null;
        if (!v) return "Xác nhận mật khẩu không được bỏ trống";
        if (v !== values.newPassword) return "Mật khẩu xác nhận không khớp";
        return null;
      },
    },
  });

  // STEP 1: gửi code
  const handleSendCode = async (values: { email: string }) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/retry-password`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: values.email }),
      }
    );

    const data = await res.json();

    if (data.statusCode === 201) {
      setUserId(data.data._id);
      setActive(1);
    } else {
      notifications.show({
        color: "red",
        title: "Lỗi",
        message: data.message,
      });
    }
  };

  // STEP 2: xác thực code + đổi mật khẩu
  const handleResetPassword = async (values: typeof form.values) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/change-password`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: values.email,
          code: values.code,
          newPassword: values.newPassword,
          confirmPassword: values.confirmPassword,
        }),
      }
    );

    const data = await res.json();

    if (data.statusCode === 201) {
      setActive(2);
    } else {
      notifications.show({
        color: "red",
        title: "Lỗi",
        message: data.message,
      });
    }
  };

  return (
    <Modal
      opened={opened}
      onClose={close}
      closeOnClickOutside={false}
      closeOnEscape={false}
      centered
      title="Quên mật khẩu"
      size="lg"
    >
      <Stepper active={active} radius="md">
        <Stepper.Step label="Bước 1" description="Nhập email">
          <form onSubmit={form.onSubmit(handleSendCode)}>
            <Stack>
              <TextInput
                label="Email"
                placeholder="Nhập email đăng ký"
                {...form.getInputProps("email")}
              />

              <Group>
                <Button type="submit">Gửi mã xác nhận</Button>
              </Group>
            </Stack>
          </form>
        </Stepper.Step>

        <Stepper.Step label="Bước 2" description="Xác thực & mật khẩu mới">
          <form onSubmit={form.onSubmit(handleResetPassword)}>
            <Stack>
              <TextInput
                label="Mã xác nhận"
                placeholder="Nhập code"
                {...form.getInputProps("code")}
              />

              <PasswordInput
                label="Mật khẩu mới"
                placeholder="Nhập mật khẩu mới"
                {...form.getInputProps("newPassword")}
              />

              <PasswordInput
                label="Xác nhận mật khẩu mới"
                placeholder="Nhập lại mật khẩu mới"
                {...form.getInputProps("confirmPassword")}
              />

              <Flex justify="space-between" mt="md">
                <Button
                  variant="default"
                  onClick={() => setActive(0)}
                  type="button"
                >
                  Quay lại
                </Button>

                <Button type="submit">Xác nhận</Button>
              </Flex>
            </Stack>
          </form>
        </Stepper.Step>

        <Stepper.Step label="Hoàn tất">
          <Stack align="center">
            <Text c="green" fw={500}>
              Đổi mật khẩu thành công!
            </Text>
          </Stack>
        </Stepper.Step>
      </Stepper>
    </Modal>
  );
}
