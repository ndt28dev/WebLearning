"use client";
import MyFieldset from "@/components/admin/mylayoutadmin/MyFieldset";
import MyTableData from "@/components/admin/mytable/MyTableData";
import { IEmployees } from "@/modules/interfaces/IEmployees";
import { formatDate } from "@/utils/format";
import { Avatar, Center, Group, Loader, Text } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { MRT_ColumnDef, MRT_RowSelectionState } from "mantine-react-table";
import { useEffect, useMemo, useRef, useState } from "react";
import EmployeeesCreateUpdateModal from "./crud/EmployeeesCreateUpdateModal";
import EmployeeesHideModal from "./crud/EmployeeesHideModal";
import EmployeesHistoryTrashModal from "./EmployeesHistoryTrashModal";
import EmployeesHideManyModal from "./crud/EmployeesHideManyModal";
import EmployeesImportModal from "./crud/EmployeesImportModal";
import EmployeesExportModal from "./crud/EmployeesExportModal";

const fetchEmployees = async ({ pageIndex, pageSize }: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/employees?current=${pageIndex + 1}&pageSize=${pageSize}`
  );

  if (!res.ok) {
    throw new Error("Lỗi khi lấy danh sách nhân viên");
  }

  const json = await res.json();

  return {
    results: json.data.results,
    totalPages: json.data.totalPages,
    total: json.data.total,
  };
};

export default function AdminEmployeesPage() {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data, isLoading, isError } = useQuery({
    queryKey: ["employees", pagination],
    queryFn: () => fetchEmployees(pagination),
  });

  const [rowSelection, setRowSelection] = useState<MRT_RowSelectionState>({});

  const selectedEmployees = useMemo(() => {
    if (!data?.results) return [];

    return data.results.filter(
      (student: IEmployees) => student._id && rowSelection[student._id]
    );
  }, [data?.results, rowSelection]);

  const disabled = selectedEmployees.length === 0;

  const tableRef = useRef<any>(null);

  const employeeColumns: MRT_ColumnDef<IEmployees>[] = [
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
    { accessorKey: "role.name", header: "Vai trò" },
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
      id: "actions",
      header: "Thao tác",
      size: 120,
      enableSorting: false,
      enableColumnFilter: false,
      Cell: ({ row }) => {
        const student = row.original;

        return (
          <Group gap={8}>
            <EmployeeesCreateUpdateModal
              isCreateUpdate={true}
              title="Sửa nhân viên"
              data={student}
            />

            <EmployeeesHideModal data={student} />
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
    <MyFieldset title="Danh sách nhân viên">
      <MyTableData<IEmployees>
        data={data?.results ?? []}
        columns={employeeColumns}
        totalPages={data?.totalPages ?? 0}
        pagination={pagination}
        onPaginationChange={setPagination}
        onRowSelectionChange={setRowSelection}
        onTableReady={(table) => {
          tableRef.current = table;
        }}
        topToolbar={
          <Group gap={"md"}>
            <EmployeeesCreateUpdateModal
              isCreateUpdate={false}
              title="Thêm nhân viên"
              data={null}
            />
            <EmployeesImportModal />
            <EmployeesExportModal />
            <EmployeesHideManyModal
              employees={selectedEmployees}
              disabled={disabled}
              onSuccess={() => {
                setRowSelection({}); // reset state ngoài
                tableRef.current?.resetRowSelection(); // reset checkbox trong table
              }}
            />
            <EmployeesHistoryTrashModal />
          </Group>
        }
      />
    </MyFieldset>
  );
}
