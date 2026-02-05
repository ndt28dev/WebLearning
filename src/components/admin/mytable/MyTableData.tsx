"use client";

import { Group } from "@mantine/core";
import {
  MantineReactTable,
  MRT_RowSelectionState,
  MRT_TableInstance,
  useMantineReactTable,
  type MRT_ColumnDef,
} from "mantine-react-table";
import { useEffect, useState, type ReactNode } from "react";

type WithId = {
  _id?: string;
};

type TableDataProps<T extends WithId> = {
  data: T[];
  columns: MRT_ColumnDef<T>[];
  totalPages: number;
  pagination: {
    pageIndex: number;
    pageSize: number;
  };
  onPaginationChange: (updater: any) => void;
  topToolbar?: ReactNode;
  onRowSelectionChange?: (rowSelection: MRT_RowSelectionState) => void;
  onTableReady?: (table: MRT_TableInstance<T>) => void;
  enableRowSelection?: boolean;
};

export default function MyTableData<T extends WithId>({
  data,
  columns,
  topToolbar,
  totalPages,
  pagination,
  onPaginationChange,
  onRowSelectionChange,
  onTableReady,
  enableRowSelection = true,
}: TableDataProps<T>) {
  const [rowSelection, setRowSelection] = useState<MRT_RowSelectionState>({});

  useEffect(() => {
    onTableReady?.(table);
  }, []);

  useEffect(() => {
    onRowSelectionChange?.(rowSelection);
  }, [rowSelection]);

  const table = useMantineReactTable({
    data,
    columns,

    getRowId: (row) => row._id,

    manualPagination: true,
    rowCount: totalPages * pagination.pageSize,

    state: {
      pagination,
      rowSelection,
    },

    onPaginationChange,

    onRowSelectionChange: (updater) => {
      setRowSelection((prev) =>
        typeof updater === "function" ? updater(prev) : updater
      );
    },

    enableRowSelection: enableRowSelection,
    enableMultiRowSelection: true,

    renderTopToolbarCustomActions: () => (
      <Group w="100%" justify="space-between">
        <Group>{topToolbar}</Group>
      </Group>
    ),

    enableColumnPinning: true,

    initialState: {
      columnPinning: {
        left: ["mrt-row-select"],
        right: ["actions"],
      },
    },

    localization: {
      selectedCountOfRowCountRowsSelected:
        "{selectedCount} / {rowCount} dòng đã chọn",
      clearSelection: "Bỏ chọn",
      rowsPerPage: "Số dòng / trang",
      of: "trên",
      noRecordsToDisplay: "Không có dữ liệu",
    },
  });

  return <MantineReactTable table={table} />;
}
