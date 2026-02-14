"use client";
import MyFieldset from "@/components/admin/mylayoutadmin/MyFieldset";
import MyTableData from "@/components/admin/mytable/MyTableData";
import { ITeacherCertificates } from "@/modules/interfaces/ITeacherCertificates";
import { formatDate } from "@/utils/format";
import {
  Badge,
  Button,
  Center,
  Group,
  Image,
  Loader,
  Text,
} from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { MRT_ColumnDef, MRT_RowSelectionState } from "mantine-react-table";
import { useEffect, useRef, useState } from "react";
import TeacherCertificatesCreateUpdateModal from "./crud/TeacherCertificatesCreateUpdateModal";
import TeacherCertificatesDeleteModal from "./crud/TeacherCertificatesDeleteModal";
import { VerificationStatus } from "@/modules/enums/enums";
import TeacherCertificatesCheckModal from "./crud/TeacherCertificatesCheckModal";

const fetchTeachersCertificates = async ({ pageIndex, pageSize }: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/certificates-teacher?current=${pageIndex + 1}&pageSize=${pageSize}`
  );

  if (!res.ok) {
    throw new Error("Lỗi khi lấy danh sách chứng chỉ giáo viên");
  }

  const json = await res.json();

  return {
    results: json.data.results,
    totalPages: json.data.totalPages,
    total: json.data.total,
  };
};

export default function AdminTeacherCertificatesPage() {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data, isLoading, isError } = useQuery({
    queryKey: ["teacherCertificates", pagination],
    queryFn: () => fetchTeachersCertificates(pagination),
  });

  const [rowSelection, setRowSelection] = useState<MRT_RowSelectionState>({});

  const tableRef = useRef<any>(null);

  const teacherCertificatesColumns: MRT_ColumnDef<ITeacherCertificates>[] = [
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
      accessorKey: "verification_status",
      header: "Trạng thái",
      Cell: ({ row }) => {
        const status = row.original.verification_status;

        if (status === VerificationStatus.REGISTERED) {
          return <TeacherCertificatesCheckModal data={row.original} />;
        }

        if (status === VerificationStatus.PENDING) {
          return <TeacherCertificatesCheckModal data={row.original} isStatus />;
        }

        if (status === VerificationStatus.VERIFIED) {
          return (
            <Badge size="sm" color="green">
              Được chấp nhận
            </Badge>
          );
        }

        if (status === VerificationStatus.CANCELLED) {
          return (
            <Badge size="sm" color="red">
              Bị từ chối
            </Badge>
          );
        }

        return null;
      },
    },
    {
      accessorKey: "image_url",
      header: "Hình ảnh",
      Cell: ({ cell }) => {
        return (
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}${cell.getValue<string>()}`}
            alt="image error"
            height={70}
            radius={"md"}
          />
        );
      },
    },
    { accessorKey: "name", header: "Tên chứng chỉ" },
    { accessorKey: "teacher.name", header: "Giáo viên" },
    { accessorKey: "organization", header: "Tổ chức cấp" },
    { accessorKey: "certificate_number", header: "Số chứng chỉ" },
    {
      accessorKey: "issue_date",
      header: "Ngày cấp",
      Cell: ({ cell }) => formatDate(new Date(cell.getValue<string>())),
    },
    {
      accessorKey: "expiry_date",
      header: "Hạn chứng chỉ",
      Cell: ({ cell }) => {
        const value = cell.getValue<string | null>();

        if (!value) return "Không thời hạn";

        return formatDate(new Date(value));
      },
    },
    { accessorKey: "description", header: "Mô tả" },

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
            <TeacherCertificatesCreateUpdateModal
              isCreateUpdate={true}
              title="Sửa chứng chỉ giáo viên"
              data={student}
            />

            <TeacherCertificatesDeleteModal data={student} />
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
    <MyFieldset title="Danh sách chứng chỉ giáo viên">
      <MyTableData<ITeacherCertificates>
        data={data?.results ?? []}
        columns={teacherCertificatesColumns}
        totalPages={data?.totalPages ?? 0}
        pagination={pagination}
        onPaginationChange={setPagination}
        onRowSelectionChange={setRowSelection}
        onTableReady={(table) => {
          tableRef.current = table;
        }}
        topToolbar={
          <Group gap={"md"}>
            <TeacherCertificatesCreateUpdateModal
              isCreateUpdate={false}
              title="Thêm chứng chỉ giáo viên"
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
            {/* <StudentsHistoryTrashModal /> */}
          </Group>
        }
      />
    </MyFieldset>
  );
}
