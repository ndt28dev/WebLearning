import { studentApi } from "@/api/services/students.api";
import MyButtonCreateUpdate from "@/components/admin/mybutton/MyButtonCreateUpdate";
import { IStudents } from "@/modules/interface/IStudents";
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
  Switch,
  Text,
  TextInput,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { IconCamera, IconPencil } from "@tabler/icons-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

type MyProps = {
  isCreateUpdate: boolean;
  title: string;
  data: any;
};

export default function StudentsCreateUpdateModal({
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
      birthday: new Date() || null,
      avatar: "",
      educationLevel: "",
      educationClass: "",
      educationSchool: "",
    },

    validate: {
      code: (v) => (!v.trim() ? "Mã học viên không được để trống" : null),

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

      educationLevel: (v) => (!v ? "Trình độ không được để trống" : null),

      educationClass: (v) => (!v.trim() ? "Lớp học không được để trống" : null),

      educationSchool: (v) =>
        !v.trim() ? "Trường học không được để trống" : null,
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
        educationLevel: data?.educationLevel,
        educationClass: data?.educationClass,
        educationSchool: data?.educationSchool,
      });
    }
  }, [data]);

  const createMutation = useMutation({
    mutationFn: studentApi.create,
    onSuccess: () => {
      notifications.show({
        title: "Thành công",
        message: "Thêm học viên thành công",
        color: "green",
        autoClose: 3000,
      });
      form.reset();
      setIsCheckClose(true);
      queryClient.invalidateQueries({ queryKey: ["students"] });
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
    mutationFn: studentApi.update,
    onSuccess: () => {
      notifications.show({
        title: "Thành công",
        message: "Cập nhật học viên thành công",
        color: "green",
        autoClose: 3000,
      });
      form.reset();
      setIsCheckClose(true);
      queryClient.invalidateQueries({ queryKey: ["students"] });
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
    if (isCreateUpdate) {
      const payload = {
        ...values,
        birthday: values.birthday ? values.birthday.toISOString() : null,
      };
      updateMutation.mutate(payload);
    } else {
      const { _id, ...rest } = values;

      const payload = {
        ...rest,
        birthday: values.birthday ? values.birthday.toISOString() : null,
      };
      createMutation.mutate(payload);
    }
  };

  const handleCancel = () => {
    setIsCheckClose(true);
  };

  return (
    <MyButtonCreateUpdate
      title={title}
      isCreateUpdate={isCreateUpdate}
      onOpen={() => {}}
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
                  label="Mã học viên"
                  placeholder="SV001"
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
            p={"sm"}
            legend={
              <Text size="md" c={"brand.5"} fw={600}>
                Học vấn
              </Text>
            }
          >
            <Group gap="sm">
              <Select
                label="Trình độ"
                placeholder="Chọn trình độ"
                w={180}
                data={[
                  { value: "PRIMARY", label: "Tiểu học" },
                  { value: "SECONDARY", label: "Trung học cơ sở" },
                  { value: "HIGH_SCHOOL", label: "Trung học phổ thông" },
                  { value: "UNIVERSITY", label: "Đại học" },
                ]}
                {...form.getInputProps("educationLevel")}
              />

              <TextInput
                label="Lớp học"
                placeholder="VD: 12A1, CNTT K20"
                {...form.getInputProps("educationClass")}
              />

              <TextInput
                label="Trường học"
                placeholder="VD: THPT Nguyễn Huệ"
                flex={1}
                {...form.getInputProps("educationSchool")}
              />
            </Group>
          </Fieldset>

          <Group justify="flex-end" gap="md">
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
