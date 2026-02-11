import { rolesApi } from "@/api/services/roles.api";
import MyButtonCreateUpdate from "@/components/admin/mybutton/MyButtonCreateUpdate";
import {
  Box,
  Button,
  Group,
  Stack,
  Switch,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

type MyProps = {
  isCreateUpdate: boolean;
  title: string;
  data: any;
};

export default function RolesCreateUpdateModal({
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
      description: "",
      is_system: false,
    },

    validate: {
      code: (value) =>
        !value.trim() ? "Mã vai trò không được để trống" : null,

      name: (value) =>
        !value.trim() ? "Tên vai trò không được để trống" : null,

      description: (value) =>
        !value.trim()
          ? "Mô tả không được để trống! Vui lòng nhập để hiểu hơn về vai trò"
          : null,
    },
  });

  useEffect(() => {
    if (data) {
      form.setValues({
        _id: data?._id,
        code: data?.code,
        name: data?.name,
        description: data?.description,
        is_system: data?.is_system,
      });
    }
  }, [data]);

  const createMutation = useMutation({
    mutationFn: rolesApi.create,
    onSuccess: () => {
      notifications.show({
        title: "Thành công",
        message: "Thêm vai trò thành công",
        color: "green",
        autoClose: 3000,
      });
      form.reset();
      setIsCheckClose(true);
      queryClient.invalidateQueries({ queryKey: ["roles"] });
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
    mutationFn: rolesApi.update,
    onSuccess: () => {
      notifications.show({
        title: "Thành công",
        message: "Cập nhật vai trò thành công",
        color: "green",
        autoClose: 3000,
      });
      form.reset();
      setIsCheckClose(true);
      queryClient.invalidateQueries({ queryKey: ["roles"] });
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
      size="sm"
    >
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack gap="sm">
          <Stack gap={5}>
            <TextInput
              label="Mã vai trò"
              disabled={isCreateUpdate}
              placeholder="VD: CONTENT_MANAGER"
              {...form.getInputProps("code")}
            />

            <TextInput
              label="Tên vai trò"
              placeholder="VD: Quản lý nội dung"
              {...form.getInputProps("name")}
            />

            <Textarea
              label="Mô tả"
              placeholder="Mô tả vai trò này dùng để làm gì"
              minRows={3}
              {...form.getInputProps("description")}
            />

            {isCreateUpdate && (
              <Switch
                label={form.values.is_system ? "Không thể xoá" : "Có thể xoá"}
                {...form.getInputProps("is_system", { type: "checkbox" })}
              />
            )}
          </Stack>

          <Group justify="flex-end" gap={"sm"}>
            <Button variant="default" onClick={handleCancel}>
              Huỷ
            </Button>
            <Button type="submit" color={"teal"}>
              Lưu
            </Button>
          </Group>
        </Stack>
      </form>
    </MyButtonCreateUpdate>
  );
}
