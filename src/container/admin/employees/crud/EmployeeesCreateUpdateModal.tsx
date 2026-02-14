import { employeeApi } from "@/api/services/employees.api";
import MyButtonCreateUpdate from "@/components/admin/mybutton/MyButtonCreateUpdate";
import { IRoles } from "@/modules/interfaces/IRoles";
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
  TextInput,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { IconPencil } from "@tabler/icons-react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

type MyProps = {
  isCreateUpdate: boolean;
  title: string;
  data: any;
};

const fetchRoles = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/roles?current=1&pageSize=999`
  );

  if (!res.ok) {
    throw new Error("Lỗi khi lấy danh sách vai trò");
  }

  const json = await res.json();

  return {
    results: json.data.results,
    totalPages: json.data.totalPages,
    total: json.data.total,
  };
};

export default function EmployeeesCreateUpdateModal({
  isCreateUpdate = false,
  title = "",
  data = null,
}: MyProps) {
  const queryClient = useQueryClient();
  const [isCheckClose, setIsCheckClose] = useState<boolean>(false);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);

  const { data: rolesData, isLoading: rolesLoading } = useQuery({
    queryKey: ["roles"],
    queryFn: () => fetchRoles(),
  });

  const roleOptions =
    rolesData?.results.map((role: IRoles) => ({
      value: role._id,
      label: role.name,
    })) || [];

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
      role: "",
    },

    validate: {
      code: (v) => (!v.trim() ? "Mã nhân viên không được để trống" : null),

      name: (v) => (!v.trim() ? "Tên không được để trống" : null),

      role: (v) => (!v.trim() ? "Vai trò không được để trống" : null),

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
    },
  });

  const createMutation = useMutation({
    mutationFn: employeeApi.create,
    onSuccess: () => {
      notifications.show({
        title: "Thành công",
        message: "Thêm nhân viên thành công",
        color: "green",
        autoClose: 3000,
      });
      form.reset();
      setIsCheckClose(true);
      queryClient.invalidateQueries({ queryKey: ["employees"] });
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
    mutationFn: employeeApi.update,
    onSuccess: () => {
      notifications.show({
        title: "Thành công",
        message: "Cập nhật nhân viên thành công",
        color: "green",
        autoClose: 3000,
      });
      form.reset();
      setIsCheckClose(true);
      queryClient.invalidateQueries({ queryKey: ["employees"] });
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
    const formData = new FormData();

    Object.entries(values).forEach(([key, value]) => {
      if (key === "_id") return;

      if (key === "birthday" && value) {
        formData.append(key, (value as Date).toISOString());
      } else if (key !== "avatar") {
        formData.append(key, value as string);
      }
    });

    if (avatarFile) {
      formData.append("avatar", avatarFile);
    }

    if (isCreateUpdate) {
      formData.append("_id", values._id);
      updateMutation.mutate(formData);
    } else {
      createMutation.mutate(formData);
    }
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
        if (isCreateUpdate && data) {
          form.setValues({
            _id: data._id,
            code: data.code,
            name: data.name,
            email: data.email,
            phone: data.phone,
            address: data.address,
            gender: data.gender,
            avatar: data.avatar,
            birthday: data.birthday ? new Date(data.birthday) : null,
            role:
              typeof data.role === "object" ? data.role._id : (data.role ?? ""),
          });
        } else {
          form.reset();
        }
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
            <Stack gap={5}>
              <Group grow gap={"sm"} align="center">
                <Stack gap={5}>
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
                        src={
                          form.values.avatar
                            ? form.values.avatar.startsWith("blob:")
                              ? form.values.avatar
                              : `${process.env.NEXT_PUBLIC_API_URL}${form.values.avatar}`
                            : null
                        }
                        radius="100%"
                        w={130}
                        h={130}
                      />

                      <FileButton
                        accept="image/png,image/jpeg"
                        onChange={(file) => {
                          if (file) {
                            setAvatarFile(file);
                            form.setFieldValue(
                              "avatar",
                              URL.createObjectURL(file)
                            );
                          }
                        }}
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
                <Select
                  label="Vai trò"
                  placeholder="Chọn vai trò"
                  data={roleOptions}
                  {...form.getInputProps("role")}
                />
                <TextInput
                  label="Số điện thoại"
                  placeholder="0123456789"
                  {...form.getInputProps("phone")}
                />
              </Group>
              <TextInput
                label="Email"
                placeholder="email@gmail.com"
                {...form.getInputProps("email")}
              />
              <TextInput label="Địa chỉ" {...form.getInputProps("address")} />
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
