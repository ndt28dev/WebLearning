import { employeeApi } from "@/api/services/employees.api";
import MyButtonDeleteMany from "@/components/admin/mybutton/MyButtonDeleteMany";
import { IEmployees } from "@/modules/interfaces/IEmployees";
import { Button, Flex, Group, Stack, Text } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

type Props = {
  employees: IEmployees[];
  disabled?: boolean;
  onSuccess?: () => void;
};

export default function EmployeesDeleteManyModal({
  employees,
  disabled,
  onSuccess,
}: Props) {
  const queryClient = useQueryClient();
  const [isCheckClose, setIsCheckClose] = useState<boolean>(false);

  const deleteManyMutation = useMutation({
    mutationFn: employeeApi.deleteMany,
    onSuccess: () => {
      notifications.show({
        title: "Thành công",
        message: "Xoá nhân viên thành công",
        color: "green",
        autoClose: 3000,
      });
      setIsCheckClose(true);
      onSuccess?.();
      queryClient.invalidateQueries({ queryKey: ["employees"] });
      queryClient.invalidateQueries({ queryKey: ["employeesHistory"] });
    },
    onError: (error: any) => {
      notifications.show({
        title: "Lỗi",
        message: error?.response?.data?.message ?? "Xoá thất bại",
        color: "red",
      });
    },
  });

  const handleDeleteMany = () => {
    const ids = employees
      .map((st) => st._id)
      .filter((id): id is string => Boolean(id));

    deleteManyMutation.mutate(ids);
  };

  const handleCancel = () => {
    setIsCheckClose(true);
  };
  return (
    <MyButtonDeleteMany
      disabled={disabled}
      isCheckClose={isCheckClose}
      onAfterClose={() => setIsCheckClose(false)}
    >
      <Stack gap={5}>
        <Text size="sm">
          Bạn có chắc chắn muốn xoá vĩnh viễn các nhân viên:
        </Text>
        {employees.map((st) => (
          <Flex gap={5} key={st._id}>
            <Text fw={600}>
              {st.code} - {st.name}
            </Text>
          </Flex>
        ))}
        <Text c="red" size="xs">
          Hành động này không thể hoàn tác.
        </Text>
      </Stack>
      <Group justify="flex-end" mt={12} gap={"sm"}>
        <Button variant="default" onClick={handleCancel}>
          Huỷ
        </Button>
        <Button color="red" onClick={handleDeleteMany}>
          Xác nhận
        </Button>
      </Group>
    </MyButtonDeleteMany>
  );
}
