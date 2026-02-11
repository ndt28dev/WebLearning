"use client";
import MyFieldset from "@/components/admin/mylayoutadmin/MyFieldset";
import MyTableData from "@/components/admin/mytable/MyTableData";
import { IAccountsTeachers } from "@/modules/interfaces/IAccountsTeachers";
import { Badge, Center, Group, Loader, Text } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { MRT_ColumnDef, MRT_RowSelectionState } from "mantine-react-table";
import { useEffect, useMemo, useRef, useState } from "react";
import AccountsTeachersChangePasswordModal from "./crud/AccountsTeachersChangePasswordModal";
import AccountsTeachersDeleteModal from "./crud/AccountsTeachersDeleteModal";

const fetchAccountsTeachers = async ({ pageIndex, pageSize }: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/account-teachers?current=${pageIndex + 1}&pageSize=${pageSize}`
  );

  if (!res.ok) {
    throw new Error("Lỗi khi lấy danh sách tài khoản giáo viên");
  }

  const json = await res.json();

  return {
    results: json.data.results,
    totalPages: json.data.totalPages,
    total: json.data.total,
  };
};

export default function AdminAccountsTeachersPage() {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data, isLoading, isError } = useQuery({
    queryKey: ["accountsTeachers", pagination],
    queryFn: () => fetchAccountsTeachers(pagination),
  });

  const [rowSelection, setRowSelection] = useState<MRT_RowSelectionState>({});

  const selectedAccountsTeachers = useMemo(() => {
    if (!data?.results) return [];

    return data.results.filter(
      (student: IAccountsTeachers) => student._id && rowSelection[student._id]
    );
  }, [data?.results, rowSelection]);

  const disabled = selectedAccountsTeachers.length === 0;

  const tableRef = useRef<any>(null);

  const accountsTeacherColumns: MRT_ColumnDef<IAccountsTeachers>[] = [
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

    { accessorKey: "teacher.name", header: "Họ và tên", size: 100 },
    { accessorKey: "teacher.email", header: "Email", size: 100 },
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
            {/* <AccountsTeachersDeleteModal data={accountsStudents} /> */}
            <AccountsTeachersChangePasswordModal data={accountsStudents} />
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
    <MyFieldset title="Danh sách tài khoản giáo viên">
      <MyTableData<IAccountsTeachers>
        data={data?.results ?? []}
        columns={accountsTeacherColumns}
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
