import { employeeApi } from "@/api/services/employees.api";
import MyButtonImport from "@/components/admin/mybutton/MyButtonImport";
import { Button, em, FileInput, Group, Table, Text } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export default function EmployeesImportModal() {
  const queryClient = useQueryClient();
  const [file, setFile] = useState<File | null>(null);
  const [isCheckClose, setIsCheckClose] = useState<boolean>(false);

  const importMutation = useMutation({
    mutationFn: (formData: FormData) => employeeApi.importExcel(formData),

    onSuccess: () => {
      setFile(null);
      notifications.show({
        title: "Thành công",
        message: "Thêm nhân viên thành công",
        color: "green",
        autoClose: 3000,
      });
      setIsCheckClose(true);
      queryClient.invalidateQueries({ queryKey: ["employees"] });
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
      size="70%"
    >
      <Text size="sm" c="yellow">
        Ví dụ dữ liệu trong file:
      </Text>

      <Table withColumnBorders striped mb={4}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>code</Table.Th>
            <Table.Th>name</Table.Th>
            <Table.Th>role</Table.Th>
            <Table.Th>gender</Table.Th>
            <Table.Th>birthday</Table.Th>
            <Table.Th>email</Table.Th>
            <Table.Th>phone</Table.Th>
            <Table.Th>address</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td>ABC</Table.Td>
            <Table.Td>ABC</Table.Td>
            <Table.Td>Quản trị viên</Table.Td>
            <Table.Td>Nam</Table.Td>
            <Table.Td>2003-01-01</Table.Td>
            <Table.Td>ABC@gmail.com</Table.Td>
            <Table.Td>0992333111</Table.Td>
            <Table.Td>ABC</Table.Td>
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
