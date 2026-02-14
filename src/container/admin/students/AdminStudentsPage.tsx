"use client";
import MyFieldset from "@/components/admin/mylayoutadmin/MyFieldset";
import MyTableData from "@/components/admin/mytable/MyTableData";
import {
  ActionIcon,
  Avatar,
  Button,
  Center,
  Group,
  Image,
  Loader,
  Text,
} from "@mantine/core";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import { useQuery } from "@tanstack/react-query";
import { MRT_ColumnDef, MRT_RowSelectionState } from "mantine-react-table";
import StudentsCreateUpdateModal from "./crud/StudentsCreateUpdateModal";
import { useEffect, useMemo, useRef, useState } from "react";
import { formatDate } from "@/utils/format";

import StudentsHideManyModal from "./crud/StudentsHideManyModal";
import StudentsHideModal from "./crud/StudentsHideModal";
import StudentsHistoryTrashModal from "./StudentsHistoryTrashModal";
import MyButtonImport from "@/components/admin/mybutton/MyButtonImport";
import StudentsImportModal from "./crud/StudentsImportModal";
import MyButtonExport from "@/components/admin/mybutton/MyButtonExport";
import StudentsExportModal from "./crud/StudentsExportModal";
import { IStudents } from "@/modules/interfaces/IStudents";

const fetchStudents = async ({ pageIndex, pageSize }: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/students?current=${pageIndex + 1}&pageSize=${pageSize}`
  );

  if (!res.ok) {
    throw new Error("Lỗi khi lấy danh sách học viên");
  }

  const json = await res.json();

  return {
    results: json.data.results,
    totalPages: json.data.totalPages,
    total: json.data.total,
  };
};

export default function AdminStudentsPage() {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data, isLoading, isError } = useQuery({
    queryKey: ["students", pagination],
    queryFn: () => fetchStudents(pagination),
  });

  const [rowSelection, setRowSelection] = useState<MRT_RowSelectionState>({});

  const selectedStudents = useMemo(() => {
    if (!data?.results) return [];

    return data.results.filter(
      (student: IStudents) => student._id && rowSelection[student._id]
    );
  }, [data?.results, rowSelection]);

  const disabled = selectedStudents.length === 0;

  const tableRef = useRef<any>(null);

  const studentColumns: MRT_ColumnDef<IStudents>[] = [
    {
      id: "stt",
      header: "STT",
      size: 80,
      enableSorting: false,
      enableColumnFilter: false,
      Cell: ({ row, table }) => {
        const pageIndex = table.getState().pagination.pageIndex;
        const pageSize = table.getState().pagination.pageSize;

        return pageIndex * pageSize + row.index + 1;
      },
    },
    {
      accessorKey: "avatar",
      header: "Ảnh đại diện",
      Cell: ({ cell }) => {
        return (
          <Avatar
            src={`${process.env.NEXT_PUBLIC_API_URL}${cell.getValue<string>()}`}
            alt="image error"
            size={"lg"}
          />
        );
      },
    },
    { accessorKey: "code", header: "Mã SV", size: 100 },
    { accessorKey: "name", header: "Họ và tên" },
    {
      accessorKey: "gender",
      header: "Giới tính",
      size: 100,
      Cell: ({ cell }) => {
        if (cell.getValue<string>() === "MALE") return "Nam";
        if (cell.getValue<string>() === "FEMALE") return "Nữ";
        if (cell.getValue<string>() === "OTHER") return "Khác";
      },
    },
    {
      accessorKey: "birthday",
      header: "Ngày sinh",
      Cell: ({ cell }) => formatDate(new Date(cell.getValue<string>())),
    },
    { accessorKey: "email", header: "Email" },
    { accessorKey: "phone", header: "SĐT" },
    { accessorKey: "address", header: "Địa chỉ" },
    {
      accessorKey: "educationLevel",
      header: "Trình độ",
      Cell: ({ cell }) => {
        if (cell.getValue<string>() === "PRIMARY") return "Tiểu học";
        if (cell.getValue<string>() === "SECONDARY") return "Trung học cơ sở";
        if (cell.getValue<string>() === "HIGH_SCHOOL")
          return "Trung học phổ thông";
        if (cell.getValue<string>() === "UNIVERSITY") return "Cao đẳng/Đai học";
      },
    },
    { accessorKey: "educationClass", header: "Lớp học" },
    { accessorKey: "educationSchool", header: "Trường học" },
    {
      id: "actions",
      header: "Thao tác",
      size: 120,
      enableSorting: false,
      enableColumnFilter: false,
      Cell: ({ row }) => {
        const student = row.original;

        return (
          <Group gap={8}>
            <StudentsCreateUpdateModal
              isCreateUpdate={true}
              title="Sửa học viên"
              data={student}
            />

            <StudentsHideModal data={student} />
          </Group>
        );
      },
    },
  ];

  useEffect(() => {
    setRowSelection({});
  }, [data]);

  if (isLoading) {
    return (
      <Center h={300}>
        <Loader c={"var(--mantine-color-brand-5)"} />
      </Center>
    );
  }

  if (isError) {
    return (
      <Center h={300}>
        <Text c="red">Lỗi tải dữ liệu</Text>
      </Center>
    );
  }

  return (
    <MyFieldset title="Danh sách học viên">
      <MyTableData<IStudents>
        data={data?.results ?? []}
        columns={studentColumns}
        totalPages={data?.totalPages ?? 0}
        pagination={pagination}
        onPaginationChange={setPagination}
        onRowSelectionChange={setRowSelection}
        onTableReady={(table) => {
          tableRef.current = table;
        }}
        topToolbar={
          <Group gap={"md"}>
            <StudentsCreateUpdateModal
              isCreateUpdate={false}
              title="Thêm học viên"
              data={null}
            />
            <StudentsImportModal />
            <StudentsExportModal />
            <StudentsHideManyModal
              students={selectedStudents}
              disabled={disabled}
              onSuccess={() => {
                setRowSelection({}); // reset state ngoài
                tableRef.current?.resetRowSelection(); // reset checkbox trong table
              }}
            />
            <StudentsHistoryTrashModal />
          </Group>
        }
      />
    </MyFieldset>
  );
}
