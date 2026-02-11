import { teacherApi } from "@/api/services/teachers.api";
import MyButtonExport from "@/components/admin/mybutton/MyButtonExport";
import { notifications } from "@mantine/notifications";
import { useMutation } from "@tanstack/react-query";

export default function TeachersExportModal() {
  const exportMutation = useMutation<Blob>({
    mutationFn: teacherApi.exportExcel,
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
      a.download = "teachers.xlsx";
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
