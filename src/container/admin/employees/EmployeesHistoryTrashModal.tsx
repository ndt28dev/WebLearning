import MyButtonHistoryTrash from "@/components/admin/mybutton/MyButtonHistoryTrash";
import MyTableData from "@/components/admin/mytable/MyTableData";
import { IEmployees } from "@/modules/interfaces/IEmployees";
import { formatDate } from "@/utils/format";
import { Avatar, Group } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { MRT_ColumnDef, MRT_RowSelectionState } from "mantine-react-table";
import { useMemo, useRef, useState } from "react";
import EmployeesRestoreModal from "./crud/EmployeesRestoreModal";
import EmployeesDeleteModal from "./crud/EmployeesDeleteModal";
import EmployeesRestoreManyModal from "./crud/EmployeesRestoreManyModal";
import EmployeesDeleteManyModal from "./crud/EmployeesDeleteManyModal";

const fetchEmployeesHistory = async ({ pageIndex, pageSize }: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/employees/history?current=${pageIndex + 1}&pageSize=${pageSize}`
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

export default function EmployeesHistoryTrashModal() {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data, isLoading, isError } = useQuery({
    queryKey: ["employeesHistory", pagination],
    queryFn: () => fetchEmployeesHistory(pagination),
  });

  const [rowSelection, setRowSelection] = useState<MRT_RowSelectionState>({});

  const selectedEmployees = useMemo(() => {
    if (!data?.results) return [];

    return data.results.filter(
      (employee: IEmployees) => employee._id && rowSelection[employee._id]
    );
  }, [data?.results, rowSelection]);

  const disabled = selectedEmployees.length === 0;

  const tableRef = useRef<any>(null);

  const historyEmployeeColumns: MRT_ColumnDef<IEmployees>[] = [
    {
      id: "stt",
      header: "STT",
      size: 80,
      enableSorting: false,
      enableColumnFilter: false,
      Cell: ({ row }) => row.index + 1,
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
            <EmployeesRestoreModal data={student} />
            <EmployeesDeleteModal data={student} />
          </Group>
        );
      },
    },
  ];
  return (
    <MyButtonHistoryTrash size={"100%"} title="nhân viên">
      <MyTableData<IEmployees>
        data={data?.results ?? []}
        columns={historyEmployeeColumns}
        totalPages={data?.totalPages ?? 0}
        pagination={pagination}
        onPaginationChange={setPagination}
        onRowSelectionChange={setRowSelection}
        onTableReady={(table) => {
          tableRef.current = table;
        }}
        topToolbar={
          <Group gap={"md"} align="center">
            <EmployeesRestoreManyModal
              employees={selectedEmployees}
              disabled={disabled}
              onSuccess={() => {
                setRowSelection({});
                tableRef.current?.resetRowSelection();
              }}
            />
            <EmployeesDeleteManyModal
              employees={selectedEmployees}
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
