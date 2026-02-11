import { employeeApi } from "@/api/services/employees.api";
import MyButtonDelete from "@/components/admin/mybutton/MyButtonDelete";
import { Button, Flex, Group, Stack, Text } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

type Props = {
  data: any;
};

export default function EmployeesDeleteModal({ data }: Props) {
  const queryClient = useQueryClient();
  const [isCheckClose, setIsCheckClose] = useState<boolean>(false);

  const deleteMutation = useMutation({
    mutationFn: employeeApi.delete,
    onSuccess: () => {
      notifications.show({
        title: "Thành công",
        message: "Xoá nhân viên thành công",
        color: "green",
        autoClose: 3000,
      });
      setIsCheckClose(true);
      queryClient.invalidateQueries({ queryKey: ["employeesHistory"] });
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

  const handleDelete = () => {
    deleteMutation.mutate(data._id);
  };

  const handleCancel = () => {
    setIsCheckClose(true);
  };

  return (
    <MyButtonDelete
      isCheckClose={isCheckClose}
      onAfterClose={() => setIsCheckClose(false)}
      isHasTrashX={true}
    >
      <Stack gap={5}>
        <Text size="sm">Bạn có chắc chắn muốn xoá vĩnh viễn nhân viên:</Text>
        <Flex gap={5}>
          <Text fw={600}>
            {data?.code} - {data?.name}
          </Text>
        </Flex>
        <Text c="red" size="xs">
          Hành động này không thể hoàn tác.
        </Text>
      </Stack>
      <Group justify="flex-end" mt={12} gap={"sm"}>
        <Button variant="default" onClick={handleCancel}>
          Huỷ
        </Button>
        <Button color="red" onClick={handleDelete}>
          Xác nhận
        </Button>
      </Group>
    </MyButtonDelete>
  );
}
