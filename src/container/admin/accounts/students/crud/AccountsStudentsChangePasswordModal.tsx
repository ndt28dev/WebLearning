import { accountsStudentsApi } from "@/api/services/accountsStudents";
import MyButtonChangePassword from "@/components/admin/mybutton/MyButtonChangePassword";
import { Button, Group, PasswordInput, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

type Props = {
  data: any;
};

export default function AccountsStudentsChangePasswordModal({ data }: Props) {
  const queryClient = useQueryClient();
  const [isCheckClose, setIsCheckClose] = useState<boolean>(false);

  const form = useForm({
    initialValues: {
      _id: data?._id,
      username: data?.username,
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },

    validate: {
      oldPassword: (v) => (!v ? "Vui lòng nhập mật khẩu cũ" : null),

      newPassword: (v) => (!v ? "Vui lòng nhập mật khẩu mới" : null),

      confirmPassword: (v, values) =>
        v !== values.newPassword ? "Mật khẩu xác nhận không khớp" : null,
    },
  });

  const changePasswordMutation = useMutation({
    mutationFn: accountsStudentsApi.changePassword,
    onSuccess: () => {
      notifications.show({
        title: "Thành công",
        message: "Đổi mật khẩu thành công",
        color: "green",
        autoClose: 3000,
      });
      form.reset();
      setIsCheckClose(true);
      queryClient.invalidateQueries({ queryKey: ["accountsStudents"] });
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

  const handleCancel = () => {
    setIsCheckClose(true);
  };

  const handleChangePassword = (values: typeof form.values) => {
    changePasswordMutation.mutate(values);
  };

  return (
    <MyButtonChangePassword
      isCheckClose={isCheckClose}
      onAfterClose={() => setIsCheckClose(false)}
    >
      <form onSubmit={form.onSubmit(handleChangePassword)}>
        <Stack gap="sm">
          <PasswordInput
            label="Mật khẩu cũ"
            placeholder="Nhập mật khẩu cũ"
            {...form.getInputProps("oldPassword")}
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

          <Group justify="flex-end" gap={"sm"}>
            <Button type="button" variant="default" onClick={handleCancel}>
              Huỷ
            </Button>
            <Button type="submit" color="teal">
              Lưu thay đổi
            </Button>
          </Group>
        </Stack>
      </form>
    </MyButtonChangePassword>
  );
}
