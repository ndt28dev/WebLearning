import { teacherApi } from "@/api/services/teachers.api";
import MyButtonCreateUpdate from "@/components/admin/mybutton/MyButtonCreateUpdate";
import {
  ActionIcon,
  Avatar,
  Box,
  Button,
  Fieldset,
  FileButton,
  Group,
  Select,
  Stack,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { IconPencil } from "@tabler/icons-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

type MyProps = {
  isCreateUpdate: boolean;
  title: string;
  data: any;
};

export default function TeachersCreateUpdateModal({
  isCreateUpdate = false,
  title = "",
  data = null,
}: MyProps) {
  const queryClient = useQueryClient();
  const [isCheckClose, setIsCheckClose] = useState<boolean>(false);

  const form = useForm({
    initialValues: {
      _id: "",
      code: "",
      name: "",
      email: "",
      phone: "",
      address: "",
      gender: "",
      birthday: null as Date | null,
      avatar: "",
      degree: "",
      specialization: "",
      university: "",
      experience: "",
      achievements: "",
      description: "",
    },

    validate: {
      code: (v) => (!v.trim() ? "Mã giáo viên không được để trống" : null),

      name: (v) => (!v.trim() ? "Tên không được để trống" : null),

      email: (v) => {
        if (!v.trim()) return "Email không được để trống";
        if (!/^\S+@\S+\.\S+$/.test(v)) return "Email không đúng định dạng";
        return null;
      },

      phone: (v) => {
        if (!v?.trim()) return "Số điện thoại không được để trống";

        const vnPhoneRegex = /^(?:\+84|84|0)(3|5|7|8|9)\d{8}$/;

        if (!vnPhoneRegex.test(v)) return "Số điện thoại không đúng định dạng";

        return null;
      },

      address: (v) => (!v.trim() ? "Địa chỉ không được để trống" : null),

      gender: (v) => (!v ? "Giới tính không được để trống" : null),

      birthday: (v: Date | null) => {
        if (!v) return "Vui lòng chọn ngày sinh";
        if (v > new Date()) return "Ngày sinh không được ở tương lai";
        return null;
      },

      degree: (v) => (!v ? "Bằng cấp không được để trống" : null),
      specialization: (v) => (!v ? "Chuyên môn không được để trống" : null),
      university: (v) =>
        !v ? "Trường / Đơn vị đào tạo không được để trống" : null,
      experience: (v) => (!v ? "Kinh nghiệm không được để trống" : null),
    },
  });

  useEffect(() => {
    if (data) {
      form.setValues({
        _id: data?._id,
        code: data?.code,
        name: data?.name,
        email: data?.email,
        phone: data?.phone,
        address: data?.address,
        gender: data?.gender,
        birthday: new Date(data?.birthday),
        avatar: data?.avatar,
        degree: data?.degree,
        specialization: data?.specialization,
        university: data?.university,
        experience: data?.experience,
        achievements: data?.achievements,
        description: data?.description,
      });
    }
  }, [data]);

  const createMutation = useMutation({
    mutationFn: teacherApi.create,
    onSuccess: () => {
      notifications.show({
        title: "Thành công",
        message: "Thêm giáo viên thành công",
        color: "green",
        autoClose: 3000,
      });
      form.reset();
      setIsCheckClose(true);
      queryClient.invalidateQueries({ queryKey: ["teachers"] });
    },
    onError: (error: any) => {
      notifications.show({
        title: "Lỗi",
        message: error,
        color: "red",
        autoClose: 3000,
      });
    },
  });

  const updateMutation = useMutation({
    mutationFn: teacherApi.update,
    onSuccess: () => {
      notifications.show({
        title: "Thành công",
        message: "Cập nhật giáo viên thành công",
        color: "green",
        autoClose: 3000,
      });
      form.reset();
      setIsCheckClose(true);
      queryClient.invalidateQueries({ queryKey: ["teachers"] });
    },
    onError: (error: any) => {
      notifications.show({
        title: "Lỗi",
        message: error,
        color: "red",
        autoClose: 3000,
      });
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    const { _id, ...payload } = values;

    isCreateUpdate
      ? updateMutation.mutate(values)
      : createMutation.mutate(payload);
  };

  const handleCancel = () => {
    setIsCheckClose(true);
  };

  return (
    <MyButtonCreateUpdate
      title={title}
      isCreateUpdate={isCreateUpdate}
      onOpen={() => {
        form.clearErrors();
        form.resetTouched();
      }}
      isCheckClose={isCheckClose}
      onAfterClose={() => setIsCheckClose(false)}
    >
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack gap="sm">
          <Fieldset
            p={"sm"}
            legend={
              <Text size="md" c={"brand.5"} fw={600}>
                Thống tin cơ bản
              </Text>
            }
          >
            <Group grow gap={"sm"} align="center">
              <Stack gap="sm">
                <TextInput
                  disabled={isCreateUpdate}
                  label="Mã giáo viên"
                  placeholder="GV001"
                  {...form.getInputProps("code")}
                />
                <TextInput
                  label="Họ và tên"
                  placeholder="Nguyễn Văn A"
                  {...form.getInputProps("name")}
                />
              </Stack>
              <Stack gap="sm">
                <Group justify="center">
                  <Box pos="relative">
                    <Avatar
                      src={form.values.avatar || null}
                      radius="100%"
                      w={130}
                      h={130}
                    />

                    <FileButton
                      accept="image/png,image/jpeg"
                      onChange={(file) =>
                        form.setFieldValue(
                          "avatar",
                          file ? URL.createObjectURL(file) : ""
                        )
                      }
                    >
                      {(props) => (
                        <ActionIcon
                          {...props}
                          size="lg"
                          radius="xl"
                          variant="filled"
                          color="brand.5"
                          pos="absolute"
                          bottom={4}
                          right={4}
                          style={{
                            boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
                          }}
                        >
                          <IconPencil size={18} />
                        </ActionIcon>
                      )}
                    </FileButton>
                  </Box>
                </Group>
              </Stack>
            </Group>
            <Group grow>
              <Select
                label="Giới tính"
                data={[
                  { value: "MALE", label: "Nam" },
                  { value: "FEMALE", label: "Nữ" },
                  { value: "OTHER", label: "Khác" },
                ]}
                {...form.getInputProps("gender")}
              />
              <DateInput
                label="Ngày sinh"
                placeholder="Chọn ngày sinh"
                valueFormat="DD/MM/YYYY"
                {...form.getInputProps("birthday")}
              />
            </Group>
            <Group grow gap={"sm"}>
              <TextInput
                label="Số điện thoại"
                placeholder="0123456789"
                {...form.getInputProps("phone")}
              />
              <TextInput
                label="Email"
                placeholder="email@gmail.com"
                {...form.getInputProps("email")}
              />
            </Group>

            <TextInput label="Địa chỉ" {...form.getInputProps("address")} />
          </Fieldset>

          <Fieldset
            p="sm"
            legend={
              <Text size="md" c="brand.5" fw={600}>
                Học vấn & Kinh nghiệm
              </Text>
            }
          >
            <Stack gap="sm">
              <Group gap="sm">
                <Select
                  label="Bằng cấp"
                  placeholder="Chọn bằng cấp"
                  w={200}
                  data={[
                    { value: "COLLEGE", label: "Cao đẳng" },
                    { value: "BACHELOR", label: "Cử nhân" },
                    { value: "ENGINEER", label: "Kỹ sư" },
                    { value: "MASTER", label: "Thạc sĩ" },
                    { value: "PHD", label: "Tiến sĩ" },
                  ]}
                  {...form.getInputProps("degree")}
                />
                <TextInput
                  label="Chuyên ngành"
                  placeholder="VD: Công nghệ thông tin"
                  flex={1}
                  {...form.getInputProps("specialization")}
                />
              </Group>

              <TextInput
                label="Trường / Đơn vị đào tạo"
                placeholder="VD: Đại học Bách Khoa TP.HCM"
                {...form.getInputProps("university")}
              />
              <Textarea
                label="Kinh nghiệm"
                placeholder="VD: 2 năm Frontend, 1 năm Backend"
                autosize
                minRows={2}
                {...form.getInputProps("experience")}
              />
              <Textarea
                label="Thành tích"
                placeholder="VD: Giải khuyến khích Olympic Tin học, học bổng..."
                autosize
                minRows={2}
                {...form.getInputProps("achievements")}
              />

              <Textarea
                label="Mô tả thêm"
                placeholder="Mô tả chi tiết về học vấn, kinh nghiệm, định hướng..."
                autosize
                minRows={3}
                {...form.getInputProps("description")}
              />
            </Stack>
          </Fieldset>

          <Group justify="flex-end" gap="sm">
            <Button variant="default" onClick={handleCancel}>
              Huỷ
            </Button>
            <Button type="submit" color="teal">
              Lưu
            </Button>
          </Group>
        </Stack>
      </form>
    </MyButtonCreateUpdate>
  );
}
