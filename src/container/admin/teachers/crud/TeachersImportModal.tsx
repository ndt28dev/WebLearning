import { teacherApi } from "@/api/services/teachers.api";
import MyButtonImport from "@/components/admin/mybutton/MyButtonImport";
import { Button, FileInput, Group, Table, Text } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export default function TeachersImportModal() {
  const queryClient = useQueryClient();
  const [file, setFile] = useState<File | null>(null);
  const [isCheckClose, setIsCheckClose] = useState<boolean>(false);

  const importMutation = useMutation({
    mutationFn: (formData: FormData) => teacherApi.importExcel(formData),

    onSuccess: () => {
      setFile(null);
      notifications.show({
        title: "Thành công",
        message: "Thêm giáo viên thành công",
        color: "green",
        autoClose: 3000,
      });
      setIsCheckClose(true);
      queryClient.invalidateQueries({ queryKey: ["teachers"] });
    },

    onError: (error: any) => {
      notifications.show({
        title: "Lỗi",
        message: error,
        color: "red",
        autoClose: 5000,
      });
      setIsCheckClose(true);
    },
  });

  const handleImport = () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    importMutation.mutate(formData);
  };

  const handleCancel = () => {
    setIsCheckClose(true);
  };
  return (
    <MyButtonImport
      isCheckClose={isCheckClose}
      onAfterClose={() => setIsCheckClose(false)}
      onOpen={() => setFile(null)}
      size="90%"
    >
      <Text size="sm" c="yellow">
        Ví dụ dữ liệu trong file:
      </Text>

      <Table withColumnBorders striped mb={4}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>code</Table.Th>
            <Table.Th>name</Table.Th>
            <Table.Th>gender</Table.Th>
            <Table.Th>birthday</Table.Th>
            <Table.Th>email</Table.Th>
            <Table.Th>phone</Table.Th>
            <Table.Th>address</Table.Th>
            <Table.Th>degree</Table.Th>
            <Table.Th>specialization</Table.Th>
            <Table.Th>university</Table.Th>
            <Table.Th>experience</Table.Th>
            <Table.Th>achievements</Table.Th>
            <Table.Th>description</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td>GVTH2025001</Table.Td>
            <Table.Td>Nguyễn Thị Hồng</Table.Td>
            <Table.Td>Nữ</Table.Td>
            <Table.Td>1990-04-12</Table.Td>
            <Table.Td>hong.nguyen@th.edu.vn</Table.Td>
            <Table.Td>0912345671</Table.Td>
            <Table.Td>Quận 12, TP.HCM</Table.Td>
            <Table.Td>Cử nhân</Table.Td>
            <Table.Td>Giáo dục Tiểu học</Table.Td>
            <Table.Td>ĐH Sư Phạm TP.HCM</Table.Td>
            <Table.Td>8 năm giảng dạy Tiểu học</Table.Td>
            <Table.Td>Giáo viên giỏi cấp quận</Table.Td>
            <Table.Td>Chủ nhiệm lớp 1, nhiều năm kinh nghiệm</Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </Table>
      <FileInput
        label="Chọn file Excel"
        placeholder="Chọn file .xlsx hoặc .csv"
        value={file}
        onChange={setFile}
        accept=".xlsx,.csv"
        clearable
      />

      <Group justify="flex-end" mt="md" gap={"sm"}>
        <Button variant="default" onClick={handleCancel}>
          Huỷ
        </Button>
        <Button
          color="teal"
          loading={importMutation.isPending}
          disabled={!file}
          onClick={handleImport}
        >
          Xác nhận
        </Button>
      </Group>
    </MyButtonImport>
  );
}
