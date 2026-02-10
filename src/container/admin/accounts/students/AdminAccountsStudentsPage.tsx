"use client";
import MyFieldset from "@/components/admin/mylayoutadmin/MyFieldset";
import MyTableData from "@/components/admin/mytable/MyTableData";
import { IAccountsStudents } from "@/modules/interfaces/IAccountsStudents";
import { Badge, Center, Group, Loader, Text } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { MRT_ColumnDef, MRT_RowSelectionState } from "mantine-react-table";
import { useEffect, useMemo, useRef, useState } from "react";
import AccountsStudentsDeleteModal from "./crud/AccountsStudentsDeleteModal";
import AccountsStudentsChangePasswordModal from "./crud/AccountsStudentsChangePasswordModal";

const fetchAccountsStudents = async ({ pageIndex, pageSize }: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/account-students?current=${pageIndex + 1}&pageSize=${pageSize}`
  );

  if (!res.ok) {
    throw new Error("Lỗi khi lấy danh sách tài khoản học viên");
  }

  const json = await res.json();

  return {
    results: json.data.results,
    totalPages: json.data.totalPages,
    total: json.data.total,
  };
};

export default function AdminAccountsStudentsPage() {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data, isLoading, isError } = useQuery({
    queryKey: ["accountsStudents", pagination],
    queryFn: () => fetchAccountsStudents(pagination),
  });

  const [rowSelection, setRowSelection] = useState<MRT_RowSelectionState>({});

  const selectedAccountsStudents = useMemo(() => {
    if (!data?.results) return [];

    return data.results.filter(
      (student: IAccountsStudents) => student._id && rowSelection[student._id]
    );
  }, [data?.results, rowSelection]);

  const disabled = selectedAccountsStudents.length === 0;

  const tableRef = useRef<any>(null);

  const accountsStudentColumns: MRT_ColumnDef<IAccountsStudents>[] = [
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
    { accessorKey: "username", header: "Tài khoản" },

    { accessorKey: "student.name", header: "Họ và tên", size: 100 },
    { accessorKey: "student.email", header: "Email", size: 100 },
    {
      accessorKey: "is_active",
      header: "Trạng thái",
      size: 200,
      Cell: ({ cell }) => {
        const value = cell.getValue<boolean>();

        return value ? (
          <Badge variant="filled" color="teal">
            Đã kích hoạt
          </Badge>
        ) : (
          <Badge variant="filled" color="red">
            Chưa kích hoạt
          </Badge>
        );
      },
    },
    // { accessorKey: "code_id", header: "Code_id" },
    // { accessorKey: "code_expired", header: "Code_expired" },
    {
      id: "actions",
      header: "Thao tác",
      size: 120,
      enableSorting: false,
      enableColumnFilter: false,
      Cell: ({ row }) => {
        const accountsStudents = row.original;

        return (
          <Group gap={8}>
            {/* <AccountsStudentsDeleteModal data={accountsStudents} /> */}
            <AccountsStudentsChangePasswordModal data={accountsStudents} />
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
    <MyFieldset title="Danh sách tài khoản học viên">
      <MyTableData<IAccountsStudents>
        data={data?.results ?? []}
        columns={accountsStudentColumns}
        totalPages={data?.totalPages ?? 0}
        pagination={pagination}
        onPaginationChange={setPagination}
        onRowSelectionChange={setRowSelection}
        onTableReady={(table) => {
          tableRef.current = table;
        }}
        enableRowSelection={false}
      />
    </MyFieldset>
  );
}
