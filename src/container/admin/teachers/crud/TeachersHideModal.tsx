import { teacherApi } from "@/api/services/teachers.api";
import MyButtonHide from "@/components/admin/mybutton/MyButtonHide";
import { Button, Flex, Group, Stack, Text } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

type Props = { data: any };

export default function TeachersHideModal({ data }: Props) {
  const queryClient = useQueryClient();
  const [isCheckClose, setIsCheckClose] = useState<boolean>(false);

  const hideMutation = useMutation({
    mutationFn: teacherApi.hide,
    onSuccess: () => {
      notifications.show({
        title: "Thành công",
        message: "Xoá giáo viên thành công",
        color: "green",
        autoClose: 3000,
      });
      setIsCheckClose(true);
      queryClient.invalidateQueries({ queryKey: ["teachers"] });
      queryClient.invalidateQueries({ queryKey: ["teachersHistory"] });
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

  const handleHide = () => {
    hideMutation.mutate(data._id);
  };

  const handleCancel = () => {
    setIsCheckClose(true);
  };
  return (
    <MyButtonHide
      isCheckClose={isCheckClose}
      onAfterClose={() => setIsCheckClose(false)}
    >
      <Stack gap={5}>
        <Text size="sm">Bạn có chắc chắn muốn xoá giáo viên:</Text>
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
        <Button color="red" onClick={handleHide}>
          Xác nhận
        </Button>
      </Group>
    </MyButtonHide>
  );
}
