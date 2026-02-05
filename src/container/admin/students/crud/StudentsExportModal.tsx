import { studentApi } from "@/api/services/students.api";
import MyButtonExport from "@/components/admin/mybutton/MyButtonExport";
import MyButtonImport from "@/components/admin/mybutton/MyButtonImport";
import { Button, FileInput, Group, Table, Text } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function StudentsExportModal() {
  const queryClient = useQueryClient();

  const exportMutation = useMutation<Blob>({
    mutationFn: studentApi.exportExcel,
    onSuccess: (blob) => {
      if (blob) {
        notifications.show({
          title: "Thành công",
          message: "File sẽ được tải về thư mục Downloads",
          color: "green",
          autoClose: 3000,
        });
      }
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "students.xlsx"; // hoặc .csv
      a.click();

      URL.revokeObjectURL(url);
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

  const handleExport = () => {
    exportMutation.mutate();
  };

  return <MyButtonExport onClick={handleExport} />;
}
