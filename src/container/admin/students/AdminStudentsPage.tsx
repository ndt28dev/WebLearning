"use client";
import MyButtonAddAdmin from "@/components/admin/mybutton/MyButtonAddAdmin";
import MyButtonDeleteAdmin from "@/components/admin/mybutton/MyButtonDeleteAdmin";
import MyButtonExportAdmin from "@/components/admin/mybutton/MyButtonExportAdmin";
import MyButtonImportAdmin from "@/components/admin/mybutton/MyButtonImportAdmin";
import MyFieldset from "@/components/admin/mylayoutadmin/MyFieldset";
import MyTableData from "@/components/admin/mytable/MyTableData";
import { ActionIcon, Button, Group } from "@mantine/core";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import { MRT_ColumnDef } from "mantine-react-table";

export type Student = {
  id: string;
  code: string;
  fullName: string;
  gender: "Nam" | "Nữ";
  email: string;
  phone: string;
  className: string;
  status: "Đang học" | "Bảo lưu" | "Đã tốt nghiệp";
};

export const studentData: Student[] = [
  {
    id: "1",
    code: "SV001",
    fullName: "Nguyễn Văn An",
    gender: "Nam",
    email: "an.nguyen@gmail.com",
    phone: "0901234567",
    className: "CNTT K21",
    status: "Đang học",
  },
  {
    id: "2",
    code: "SV002",
    fullName: "Trần Thị Bình",
    gender: "Nữ",
    email: "binh.tran@gmail.com",
    phone: "0912345678",
    className: "CNTT K21",
    status: "Đang học",
  },
  {
    id: "3",
    code: "SV003",
    fullName: "Lê Quốc Cường",
    gender: "Nam",
    email: "cuong.le@gmail.com",
    phone: "0987654321",
    className: "QTKD K20",
    status: "Bảo lưu",
  },
];

export default function AdminStudentsPage() {
  const studentColumns: MRT_ColumnDef<Student>[] = [
    {
      accessorKey: "code",
      header: "Mã SV",
    },
    {
      accessorKey: "fullName",
      header: "Họ và tên",
    },
    {
      accessorKey: "gender",
      header: "Giới tính",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "phone",
      header: "SĐT",
    },
    {
      accessorKey: "className",
      header: "Lớp",
    },
    {
      accessorKey: "status",
      header: "Trạng thái",
    },
    {
      id: "actions",
      header: "Thao tác",
      size: 120,
      enableSorting: false,
      enableColumnFilter: false,
      Cell: () => (
        <Group gap={8}>
          <ActionIcon color="yellow" variant="light">
            <IconEdit size={16} />
          </ActionIcon>
          <ActionIcon color="red" variant="light">
            <IconTrash size={16} />
          </ActionIcon>
        </Group>
      ),
    },
  ];

  const handleAdd = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users`, {
      method: "GET",
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <MyFieldset title="Danh sách học viên">
      <MyTableData
        data={studentData}
        columns={studentColumns}
        topToolbar={
          <Group gap={"md"}>
            <MyButtonAddAdmin onClick={handleAdd} />
            <MyButtonImportAdmin />
            <MyButtonExportAdmin />
            <MyButtonDeleteAdmin />
          </Group>
        }
      />
    </MyFieldset>
  );
}
