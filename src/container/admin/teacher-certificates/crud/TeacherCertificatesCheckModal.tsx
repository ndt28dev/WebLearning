import { teacherCertificatesApi } from "@/api/services/teacherCertificates.api";
import { ITeacherCertificates } from "@/modules/interfaces/ITeacherCertificates";
import { formatDate } from "@/utils/format";
import {
  ActionIcon,
  Box,
  Button,
  Divider,
  Group,
  Image,
  Modal,
  Stack,
  Text,
  Textarea,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

type Props = {
  data: ITeacherCertificates;
  isStatus?: boolean;
};

export default function TeacherCertificatesCheckModal({
  data,
  isStatus = false,
}: Props) {
  const [opened, { open, close }] = useDisclosure(false);
  const queryClient = useQueryClient();
  const [reason, setReason] = useState<string>("");

  const verificationMutation = useMutation({
    mutationFn: teacherCertificatesApi.updateVerification,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["teacherCertificates"] });
    },
    onError: (error: any) => {
      notifications.show({
        title: "Lỗi",
        message: error,
        color: "red",
        autoClose: 3000,
      });
    },
  });

  const acceptMutation = useMutation({
    mutationFn: teacherCertificatesApi.accept,
    onSuccess: () => {
      notifications.show({
        title: "Thành công",
        message: "Đã duyệt chứng chỉ",
        color: "green",
      });
      queryClient.invalidateQueries({ queryKey: ["teacherCertificates"] });
      close();
    },
    onError: (error: any) => {
      notifications.show({
        title: "Lỗi",
        message: error?.message || "Có lỗi xảy ra",
        color: "red",
      });
    },
  });

  const cancelMutation = useMutation({
    mutationFn: ({ id, reason }: { id: string; reason: string }) =>
      teacherCertificatesApi.cancel(id, reason),
    onSuccess: () => {
      notifications.show({
        title: "Thất bại",
        message: "Đã từ chối duyệt chứng chỉ",
        color: "red",
      });
      queryClient.invalidateQueries({ queryKey: ["teacherCertificates"] });
      close();
    },
    onError: (error: any) => {
      notifications.show({
        title: "Lỗi",
        message: error,
        color: "red",
        autoClose: 3000,
      });
    },
  });

  const handleVerification = () => {
    open();
    verificationMutation.mutate(data._id as string);
  };

  const handleOpenAccept = () => {
    open();
  };

  const handleAccept = () => {
    acceptMutation.mutate(data._id as string);
  };

  const handleCancel = () => {
    if (!reason.trim()) {
      notifications.show({
        title: "Thiếu thông tin",
        message: "Vui lòng nhập lý do từ chối",
        color: "red",
      });
      return;
    }

    cancelMutation.mutate({
      id: data._id as string,
      reason,
    });
  };

  return (
    <>
      <Button
        variant="filled"
        color={isStatus ? "orange" : "cyan"}
        size="sm"
        loading={verificationMutation.isPending}
        onClick={isStatus ? handleOpenAccept : handleVerification}
      >
        {isStatus ? "Đang xác minh" : "Kiểm tra"}
      </Button>
      {isStatus && (
        <Modal
          opened={opened}
          onClose={close}
          size={"80%"}
          title={<Text fw={600}>Kiểm tra chứng chỉ giáo viên</Text>}
        >
          <Stack gap="sm">
            <Group gap={"sm"} align="flex-start">
              <Stack gap={8} flex={1}>
                <Text>
                  <b>Tên chứng chỉ:</b> {data.name}
                </Text>

                <Text>
                  <b>Giáo viên:</b> {data.teacher?.name}
                </Text>

                <Text>
                  <b>Tổ chức cấp:</b> {data.organization}
                </Text>

                <Text>
                  <b>Số chứng chỉ:</b> {data.certificate_number}
                </Text>

                <Text>
                  <b>Ngày cấp:</b>{" "}
                  {data.issue_date
                    ? formatDate(new Date(data.issue_date))
                    : "Không có"}
                </Text>

                <Text>
                  <b>Hạn chứng chỉ:</b>{" "}
                  {data.expiry_date
                    ? formatDate(new Date(data.expiry_date))
                    : "Không thời hạn"}
                </Text>

                <Text>
                  <b>Mô tả:</b> {data.description || "Không có"}
                </Text>
                <Divider />
                <Stack gap={8}>
                  <Textarea
                    label="Lý do từ chối"
                    placeholder="Nhập lý do từ chối"
                    autosize
                    minRows={10}
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                  />

                  <Button
                    color="red"
                    loading={cancelMutation.isPending}
                    onClick={handleCancel}
                  >
                    Từ chối
                  </Button>
                </Stack>
              </Stack>
              <Box flex={3}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_URL}${data.image_url}`}
                  radius="md"
                  alt="certificate"
                />
              </Box>
            </Group>

            <Group justify="flex-end" gap={"sm"}>
              <Button variant="default" onClick={close}>
                Huỷ
              </Button>

              <Button
                color="teal"
                loading={acceptMutation.isPending}
                onClick={handleAccept}
              >
                Duyệt chứng chỉ
              </Button>
            </Group>
          </Stack>
        </Modal>
      )}
    </>
  );
}
