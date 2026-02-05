import MyTableData from "@/components/admin/mytable/MyTableData";
import { IStudents } from "@/modules/interface/IStudents";
import { Center, Group, Loader, Text } from "@mantine/core";

import { useQuery } from "@tanstack/react-query";
import { useMemo, useRef, useState } from "react";
import { MRT_ColumnDef, MRT_RowSelectionState } from "mantine-react-table";
import { formatDate } from "@/utils/format";
import StudentsRestoreModal from "./crud/StudentsRestoreModal";
import StudentsRestoreManyModal from "./crud/StudentsRestoreManyModal";
import MyButtonHistoryTrash from "@/components/admin/mybutton/MyButtonHistoryTrash";
import StudentsDeleteModal from "./crud/StudentsDeleteModal";
import StudentsDeleteManyModal from "./crud/StudentsDeleteManyModal";

const fetchStudents = async ({ pageIndex, pageSize }: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/students/history?current=${pageIndex + 1}&pageSize=${pageSize}`
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

export default function StudentsHistoryTrashModal() {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data, isLoading, isError } = useQuery({
    queryKey: ["studentsHistory", pagination],
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

  const historyStudentColumns: MRT_ColumnDef<IStudents>[] = [
    {
      id: "stt",
      header: "STT",
      size: 80,
      enableSorting: false,
      enableColumnFilter: false,
      Cell: ({ row }) => row.index + 1,
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
        if (cell.getValue<string>() === "ORTHER") return "Khác";
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
            <StudentsRestoreModal data={student} />
            <StudentsDeleteModal data={student} />
          </Group>
        );
      },
    },
  ];

  return (
    <MyButtonHistoryTrash size={"100%"} title="học viên">
      <MyTableData<IStudents>
        data={data?.results ?? []}
        columns={historyStudentColumns}
        totalPages={data?.totalPages ?? 0}
        pagination={pagination}
        onPaginationChange={setPagination}
        onRowSelectionChange={setRowSelection}
        onTableReady={(table) => {
          tableRef.current = table;
        }}
        topToolbar={
          <Group gap={"md"} align="center">
            <StudentsRestoreManyModal
              students={selectedStudents}
              disabled={disabled}
              onSuccess={() => {
                setRowSelection({});
                tableRef.current?.resetRowSelection();
              }}
            />
            <StudentsDeleteManyModal
              students={selectedStudents}
              disabled={disabled}
              onSuccess={() => {
                setRowSelection({});
                tableRef.current?.resetRowSelection();
              }}
            />
          </Group>
        }
      />
    </MyButtonHistoryTrash>
  );
}
