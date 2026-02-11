"use client";
import MyFieldset from "@/components/admin/mylayoutadmin/MyFieldset";
import MyTableData from "@/components/admin/mytable/MyTableData";
import { ITeachers } from "@/modules/interfaces/ITeachers";
import { formatDate } from "@/utils/format";
import { Center, Group, Loader, Text } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { MRT_ColumnDef, MRT_RowSelectionState } from "mantine-react-table";
import { useEffect, useMemo, useRef, useState } from "react";
import TeachersCreateUpdateModal from "./crud/TeachersCreateUpdateModal";
import TeachersHideModal from "./crud/TeachersHideModal";
import TeachersHistoryTrashModal from "./TeachersHistoryTrashModal";
import TeachersHideManyModal from "./crud/TeachersHideManyModal";
import TeachersImportModal from "./crud/TeachersImportModal";
import TeachersExportModal from "./crud/TeachersExportModal";

const fetchTeachers = async ({ pageIndex, pageSize }: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/teachers?current=${pageIndex + 1}&pageSize=${pageSize}`
  );

  if (!res.ok) {
    throw new Error("Lỗi khi lấy danh sách giáo viên");
  }

  const json = await res.json();

  return {
    results: json.data.results,
    totalPages: json.data.totalPages,
    total: json.data.total,
  };
};

export default function AdminTeachersPage() {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data, isLoading, isError } = useQuery({
    queryKey: ["teachers", pagination],
    queryFn: () => fetchTeachers(pagination),
  });

  const [rowSelection, setRowSelection] = useState<MRT_RowSelectionState>({});

  const selectedTeachers = useMemo(() => {
    if (!data?.results) return [];

    return data.results.filter(
      (teacher: ITeachers) => teacher._id && rowSelection[teacher._id]
    );
  }, [data?.results, rowSelection]);

  const disabled = selectedTeachers.length === 0;

  const tableRef = useRef<any>(null);

  const teacherColumns: MRT_ColumnDef<ITeachers>[] = [
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
    { accessorKey: "code", header: "Mã GV", size: 100 },
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
      accessorKey: "degree",
      header: "Bằng cấp",
      Cell: ({ cell }) => {
        if (cell.getValue<string>() === "COLLEGE") return "Cao đẳng";
        if (cell.getValue<string>() === "BACHELOR") return "Cử nhân";
        if (cell.getValue<string>() === "ENGINEER") return "Kỹ sư";
        if (cell.getValue<string>() === "MASTER") return "Thạc sĩ";
        if (cell.getValue<string>() === "PHD") return "Tiến sĩ";
      },
    },
    { accessorKey: "specialization", header: "Chuyên ngành" },
    { accessorKey: "university", header: "Trường / Đơn vị đào tạo" },
    { accessorKey: "experience", header: "Kinh nghiệm" },
    {
      accessorKey: "achievements",
      header: "Thành tích",
      Cell: ({ cell }) =>
        cell.getValue<string>() ? (
          cell.getValue<string>()
        ) : (
          <Text size="sm" c={"dimmed"}>
            Chưa nhập dữ liệu
          </Text>
        ),
    },
    {
      accessorKey: "description",
      header: "Mô tả",
      Cell: ({ cell }) =>
        cell.getValue<string>() ? (
          cell.getValue<string>()
        ) : (
          <Text size="sm" c={"dimmed"}>
            Chưa nhập dữ liệu
          </Text>
        ),
    },
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
            <TeachersCreateUpdateModal
              isCreateUpdate={true}
              title="Sửa giáo viên"
              data={student}
            />

            <TeachersHideModal data={student} />
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
    <MyFieldset title="Danh sách giáo viên">
      <MyTableData<ITeachers>
        data={data?.results ?? []}
        columns={teacherColumns}
        totalPages={data?.totalPages ?? 0}
        pagination={pagination}
        onPaginationChange={setPagination}
        onRowSelectionChange={setRowSelection}
        onTableReady={(table) => {
          tableRef.current = table;
        }}
        topToolbar={
          <Group gap={"md"}>
            <TeachersCreateUpdateModal
              isCreateUpdate={false}
              title="Thêm giáo viên"
              data={null}
            />
            <TeachersImportModal />
            <TeachersExportModal />
            <TeachersHideManyModal
              teachers={selectedTeachers}
              disabled={disabled}
              onSuccess={() => {
                setRowSelection({});
                tableRef.current?.resetRowSelection();
              }}
            />
            <TeachersHistoryTrashModal />
          </Group>
        }
      />
    </MyFieldset>
  );
}
