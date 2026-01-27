"use client";

import {
  Modal,
  Stepper,
  Button,
  Group,
  Text,
  TextInput,
  Stack,
  Flex,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import Email from "next-auth/providers/email";
import { useState } from "react";

type Props = {
  opened: boolean;
  close: () => void;
  userEmail: string;
};

export default function ModalAccount({ opened, close, userEmail }: Props) {
  const [active, setActive] = useState(0);
  const [id, setId] = useState("");

  const form = useForm({
    initialValues: {
      code: "",
    },
    validate: {
      code: (value) => (value ? null : "Code không được bỏ trống"),
    },
  });

  const handleStep1 = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/retry-active`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userEmail,
        }),
      }
    );
    const data = await res.json();
    if (data.statusCode === 201) {
      setActive((current) => (current < 2 ? current + 1 : current));
      setId(data.data._id);
    } else {
      notifications.show({
        color: "red",
        title: "Error login",
        message: data.message,
        autoClose: 3000,
      });
    }
  };

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
      setActive(2);
    } else {
      notifications.show({
        color: "red",
        title: "Error check code",
        message: data.message,
        autoClose: 3000,
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
      title="Kích hoạt tài khoản"
      size="lg"
    >
      <Stepper active={active} radius="md">
        <Stepper.Step label="Bước 1" description="Login">
          <Stack gap={5}>
            <Text size="md" c={"red"}>
              Tài khoản của bạn chưa được kích hoạt
            </Text>
            <TextInput
              type="text"
              label="Email"
              value={userEmail}
              disabled
              placeholder="Nhập email"
            />
            <Group>
              <Button type="submit" mt={10} onClick={handleStep1}>
                Resend
              </Button>
            </Group>
          </Stack>
        </Stepper.Step>

        <Stepper.Step label="Bước 2" description="Verification">
          <Stack gap={5}>
            <Text size="md" c={"yellow"}>
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
                <Text
                  c="var(--mantine-color-brand-5)"
                  style={{ cursor: "pointer" }}
                >
                  Gửi lại mã
                </Text>
              </Flex>
            </form>
          </Stack>
        </Stepper.Step>

        <Stepper.Step label="Done">
          <Text size="sm">
            Tài khoản của bạn đã được kích hoạt thành công. Vui lòng đăng
            nhập!!!
          </Text>
        </Stepper.Step>
      </Stepper>
    </Modal>
  );
}
