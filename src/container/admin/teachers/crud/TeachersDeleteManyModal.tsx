import { teacherApi } from "@/api/services/teachers.api";
import MyButtonDeleteMany from "@/components/admin/mybutton/MyButtonDeleteMany";
import { ITeachers } from "@/modules/interfaces/ITeachers";
import { Button, Flex, Group, Stack, Text } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

type Props = {
  teachers: ITeachers[];
  disabled?: boolean;
  onSuccess?: () => void;
};

export default function TeachersDeleteManyModal({
  teachers,
  disabled,
  onSuccess,
}: Props) {
  const queryClient = useQueryClient();
  const [isCheckClose, setIsCheckClose] = useState<boolean>(false);

  const deleteManyMutation = useMutation({
    mutationFn: teacherApi.deleteMany,
    onSuccess: () => {
      notifications.show({
        title: "Thành công",
        message: "Xoá giáo viên thành công",
        color: "green",
        autoClose: 3000,
      });
      setIsCheckClose(true);
      onSuccess?.();
      queryClient.invalidateQueries({ queryKey: ["teachers"] });
      queryClient.invalidateQueries({ queryKey: ["teachersHistory"] });
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
    const ids = teachers
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
          Bạn có chắc chắn muốn xoá vĩnh viễn các giáo viên:
        </Text>
        {teachers.map((st) => (
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
