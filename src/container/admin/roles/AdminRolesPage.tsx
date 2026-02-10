"use client";
import MyFieldset from "@/components/admin/mylayoutadmin/MyFieldset";
import { Center, Group, Loader, Text } from "@mantine/core";
import MyTableData from "@/components/admin/mytable/MyTableData";
import { useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { MRT_ColumnDef, MRT_RowSelectionState } from "mantine-react-table";
import RolesCreateUpdateModal from "./crud/RolesCreateUpdateModal";
import StudentsHideModal from "../students/crud/StudentsHideModal";
import RolesDeleteModal from "./crud/RolesDeleteModal";
import { IRoles } from "@/modules/interfaces/IRoles";

const fetchRoles = async ({ pageIndex, pageSize }: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/roles?current=${pageIndex + 1}&pageSize=${pageSize}`
  );

  if (!res.ok) {
    throw new Error("Lỗi khi lấy danh sách vai trò");
  }

  const json = await res.json();

  return {
    results: json.data.results,
    totalPages: json.data.totalPages,
    total: json.data.total,
  };
};

export default function AdminRolesPage() {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data, isLoading, isError } = useQuery({
    queryKey: ["roles", pagination],
    queryFn: () => fetchRoles(pagination),
  });

  const [rowSelection, setRowSelection] = useState<MRT_RowSelectionState>({});

  const tableRef = useRef<any>(null);

  const studentColumns: MRT_ColumnDef<IRoles>[] = [
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
    { accessorKey: "code", header: "Mã vai trò", size: 100 },
    { accessorKey: "name", header: "Tên vai trò" },
    { accessorKey: "description", header: "Mô tả" },
    { accessorKey: "description1", header: "Phân quyền" },
    {
      id: "actions",
      header: "Thao tác",
      size: 120,
      enableSorting: false,
      enableColumnFilter: false,
      Cell: ({ row }) => {
        const role = row.original;

        return (
          <Group gap={8}>
            <RolesCreateUpdateModal
              isCreateUpdate={true}
              title="Sửa học viên"
              data={role}
            />

            <RolesDeleteModal data={role} />
          </Group>
        );
      },
    },
  ];

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
    <MyFieldset title="Danh sách vai trò">
      <MyTableData
        data={data?.results ?? []}
        columns={studentColumns}
        totalPages={data?.totalPages ?? 0}
        pagination={pagination}
        onPaginationChange={setPagination}
        enableRowSelection={false}
        topToolbar={
          <Group gap={"md"}>
            <RolesCreateUpdateModal
              isCreateUpdate={false}
              title="Thêm vai trò"
              data={null}
            />
            {/* <StudentsImportModal /> */}
            {/* <StudentsExportModal /> */}
            {/* <StudentsHideManyModal
                students={selectedStudents}
                disabled={disabled}
                onSuccess={() => {
                  setRowSelection({}); // reset state ngoài
                  tableRef.current?.resetRowSelection(); // reset checkbox trong table
                }}
              /> */}
          </Group>
        }
      />
    </MyFieldset>
  );
}
