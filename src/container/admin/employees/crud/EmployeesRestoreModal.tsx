import { employeeApi } from "@/api/services/employees.api";
import MyButtonRestore from "@/components/admin/mybutton/MyButtonRestore";
import { Button, Flex, Group, Stack, Text } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

type Props = {
  data: any;
};

export default function EmployeesRestoreModal({ data }: Props) {
  const queryClient = useQueryClient();
  const [isCheckClose, setIsCheckClose] = useState<boolean>(false);

  const restoreMutation = useMutation({
    mutationFn: employeeApi.restore,
    onSuccess: () => {
      notifications.show({
        title: "Thành công",
        message: "Khôi phục nhân viên thành công",
        color: "green",
        autoClose: 3000,
      });
      setIsCheckClose(true);
      queryClient.invalidateQueries({ queryKey: ["employees"] });
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

  const handleRestore = () => {
    restoreMutation.mutate(data._id);
  };

  const handleCancel = () => {
    setIsCheckClose(true);
  };

  return (
    <MyButtonRestore
      isCheckClose={isCheckClose}
      onAfterClose={() => setIsCheckClose(false)}
    >
      <Stack gap={5}>
        <Text size="sm">Bạn có chắc chắn muốn khôi phục nhân viên:</Text>
        <Flex gap={5}>
          <Text fw={600}>
            {data?.code} - {data?.name}
          </Text>
        </Flex>
      </Stack>
      <Group justify="flex-end" mt={12} gap={"sm"}>
        <Button variant="default" onClick={handleCancel}>
          Huỷ
        </Button>
        <Button color="teal" onClick={handleRestore}>
          Xác nhận
        </Button>
      </Group>
    </MyButtonRestore>
  );
}
