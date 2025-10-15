"use client";

import { useState } from "react";
import {
  Button,
  Card,
  Select,
  Stack,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";

const PROVINCES = [
  "Hà Nội",
  "TP. Hồ Chí Minh",
  "Đà Nẵng",
  "Hải Phòng",
  "Cần Thơ",
  "Bình Dương",
  "Đồng Nai",
  "Khác",
].map((v) => ({ value: v, label: v }));

export default function ConsultForm() {
  const [values, setValues] = useState({
    fullName: "",
    phone: "",
    email: "",
    province: "",
    company: "",
    message: "",
  });

  const handleChange = (key: keyof typeof values) => (val: string) =>
    setValues((s) => ({ ...s, [key]: val }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: gửi API nếu cần
    console.log("Submit form:", values);
  };

  // style chung: đổi màu label sang trắng
  const labelWhite = { label: { color: "white" } as React.CSSProperties };

  return (
    <Card
      radius="md"
      bg={"var(--mantine-color-brand-1)"}
      style={{
        border: "1px solid var(--mantine-color-brand-2)",
      }}
      p={10}
    >
      <Stack gap={5}>
        <Text ta="center" fz={20} fw={600} c={"var(--mantine-color-brand-5)"}>
          BẠN CẦN TƯ VẤN
        </Text>
        <Text ta="center" c={"var(--mantine-color-brand-5)"}>
          Chia sẻ thông tin và nhu cầu của bạn để đội ngũ T-Learning tư vấn kịp
          thời
        </Text>

        <form onSubmit={handleSubmit}>
          <Stack gap="sm" mt="sm">
            <TextInput
              label="Họ tên"
              placeholder="Nhập họ tên"
              value={values.fullName}
              onChange={(e) => handleChange("fullName")(e.currentTarget.value)}
            />

            <TextInput
              label="Phone"
              placeholder="Ví dụ: 0912345678"
              value={values.phone}
              onChange={(e) => handleChange("phone")(e.currentTarget.value)}
            />

            <TextInput
              label="E-mail"
              placeholder="you@example.com"
              value={values.email}
              onChange={(e) => handleChange("email")(e.currentTarget.value)}
            />

            <Select
              label="Tỉnh/thành của bạn?"
              placeholder="Chọn tỉnh/thành"
              data={PROVINCES}
              searchable
              nothingFoundMessage="Không tìm thấy"
              value={values.province}
              onChange={(v) => handleChange("province")(v || "")}
            />

            <TextInput
              label="Tên doanh nghiệp/công ty (không bắt buộc)"
              placeholder="Ví dụ: Công ty ABC"
              value={values.company}
              onChange={(e) => handleChange("company")(e.currentTarget.value)}
            />

            <Textarea
              label="Nội dung cần tư vấn (không bắt buộc)"
              placeholder="Hãy chia sẻ nội dung bạn muốn được hỗ trợ…"
              minRows={3}
              autosize
              value={values.message}
              onChange={(e) => handleChange("message")(e.currentTarget.value)}
            />

            <Button
              type="submit"
              size="md"
              radius="md"
              mt="xs"
              fullWidth
              styles={{ root: { background: "var(--mantine-color-brand-5)" } }}
            >
              Gửi Thông Tin
            </Button>
          </Stack>
        </form>
      </Stack>
    </Card>
  );
}
