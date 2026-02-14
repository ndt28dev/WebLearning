import { teacherCertificatesApi } from "@/api/services/teacherCertificates.api";
import MyButtonCreateUpdate from "@/components/admin/mybutton/MyButtonCreateUpdate";
import { ITeachers } from "@/modules/interfaces/ITeachers";
import {
  Box,
  Button,
  Fieldset,
  FileButton,
  Group,
  Image,
  Select,
  Stack,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

type MyProps = {
  isCreateUpdate: boolean;
  title: string;
  data: any;
};

const fetchTeachers = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/teachers?current=1&pageSize=999`
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

export default function TeacherCertificatesCreateUpdateModal({
  isCreateUpdate = false,
  title = "",
  data = null,
}: MyProps) {
  const queryClient = useQueryClient();
  const [isCheckClose, setIsCheckClose] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const { data: teachersData, isLoading: teachersIsLoading } = useQuery({
    queryKey: ["teachers"],
    queryFn: () => fetchTeachers(),
  });

  const teachersOptions =
    teachersData?.results.map((teacher: ITeachers) => ({
      value: teacher._id,
      label: teacher.code + " - " + teacher.name,
    })) || [];

  const form = useForm({
    initialValues: {
      _id: "",
      teacher: "",
      name: "",
      organization: "",
      certificate_number: "",
      issue_date: null as Date | null,
      expiry_date: null as Date | null,
      description: "",
      image_url: "",
    },

    validate: {
      name: (v) => (!v.trim() ? "Tên chứng chỉ không được để trống" : null),

      organization: (v) =>
        !v.trim() ? "Tổ chức cấp không được để trống" : null,

      teacher: (v) => (!v ? "Vui lòng chọn giáo viên" : null),

      issue_date: (v: Date | null) => {
        if (!v) return "Vui lòng chọn ngày cấp";
        return null;
      },

      expiry_date: (v, values) => {
        if (v && values.issue_date && v < values.issue_date)
          return "Ngày hết hạn phải sau ngày cấp";
        return null;
      },

      image_url: (v) => (!v ? "Vui lòng chọn hình ảnh chứng chỉ" : null),
    },
  });

  const createMutation = useMutation({
    mutationFn: teacherCertificatesApi.create,
    onSuccess: () => {
      notifications.show({
        title: "Thành công",
        message: "Thêm chứng chỉ giáo viên thành công",
        color: "green",
        autoClose: 3000,
      });
      form.reset();
      setIsCheckClose(true);
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

  const updateMutation = useMutation({
    mutationFn: teacherCertificatesApi.update,
    onSuccess: () => {
      notifications.show({
        title: "Thành công",
        message: "Cập nhật chứng chỉ giáo viên thành công",
        color: "green",
        autoClose: 3000,
      });
      form.reset();
      setIsCheckClose(true);
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

  const handleSubmit = (values: typeof form.values) => {
    const formData = new FormData();

    formData.append("teacher", values.teacher);
    formData.append("name", values.name);
    formData.append("organization", values.organization);
    formData.append("certificate_number", values.certificate_number);
    formData.append("issue_date", values.issue_date?.toISOString() || "");
    formData.append("expiry_date", values.expiry_date?.toISOString() || "");
    formData.append("description", values.description);

    if (selectedFile) {
      formData.append("image", selectedFile);
    }

    if (isCreateUpdate) {
      formData.append("_id", values._id);
      updateMutation.mutate(formData);
    } else {
      createMutation.mutate(formData);
    }
  };

  const handleCancel = () => {
    setIsCheckClose(true);
  };
  return (
    <MyButtonCreateUpdate
      size="80%"
      title={title}
      isCreateUpdate={isCreateUpdate}
      onOpen={() => {
        form.clearErrors();
        form.resetTouched();
        if (isCreateUpdate && data) {
          form.setValues({
            _id: data._id,
            teacher: data.teacher._id,
            name: data.name,
            organization: data.organization,
            certificate_number: data.certificate_number,
            image_url: data.image_url,
            description: data.description,
            issue_date: data.issue_date ? new Date(data.issue_date) : null,
            expiry_date: data.expiry_date ? new Date(data.expiry_date) : null,
          });
        } else {
          form.reset();
        }
      }}
      isCheckClose={isCheckClose}
      onAfterClose={() => setIsCheckClose(false)}
    >
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack gap={8}>
          <Fieldset
            p="sm"
            legend={
              <Text size="md" c="brand.5" fw={600}>
                Thông tin chứng chỉ
              </Text>
            }
          >
            <Group gap={"sm"} align="flex-start">
              <Stack gap={8} flex={1}>
                <Select
                  label="Giáo viên"
                  placeholder="Chọn giáo viên"
                  data={teachersOptions}
                  {...form.getInputProps("teacher")}
                />

                <TextInput
                  label="Tên chứng chỉ"
                  placeholder="VD: IELTS 8.0"
                  {...form.getInputProps("name")}
                />

                <TextInput
                  label="Tổ chức cấp"
                  placeholder="VD: British Council"
                  {...form.getInputProps("organization")}
                />

                <TextInput
                  label="Số chứng chỉ"
                  placeholder="VD: BC123456"
                  {...form.getInputProps("certificate_number")}
                />

                <Group grow>
                  <DateInput
                    label="Ngày cấp"
                    placeholder="Chọn ngày cấp"
                    valueFormat="DD/MM/YYYY"
                    {...form.getInputProps("issue_date")}
                  />

                  <DateInput
                    label="Ngày hết hạn"
                    placeholder="Chọn ngày hết hạn"
                    valueFormat="DD/MM/YYYY"
                    {...form.getInputProps("expiry_date")}
                  />
                </Group>

                <Textarea
                  label="Mô tả"
                  placeholder="Mô tả thêm về chứng chỉ..."
                  autosize
                  minRows={3}
                  {...form.getInputProps("description")}
                />
              </Stack>
              <Stack gap={5} flex={1}>
                <Text fw={500}>Hình ảnh chứng chỉ *</Text>

                <FileButton
                  accept="image/png,image/jpeg"
                  onChange={(file) => {
                    if (file) {
                      setSelectedFile(file); // lưu file thật
                      form.setFieldValue(
                        "image_url",
                        URL.createObjectURL(file)
                      ); // preview
                    }
                    form.setTouched({ image_url: true });
                  }}
                >
                  {(props) => (
                    <Button {...props} variant="light">
                      Tải ảnh lên
                    </Button>
                  )}
                </FileButton>

                {form.errors.image_url && (
                  <Text c="red" size="sm">
                    {form.errors.image_url}
                  </Text>
                )}

                {form.values.image_url && (
                  <Box h={375}>
                    <Image
                      src={
                        form.values.image_url
                          ? form.values.image_url.startsWith("blob:")
                            ? form.values.image_url
                            : `${process.env.NEXT_PUBLIC_API_URL}${form.values.image_url}`
                          : null
                      }
                      radius="sm"
                      w={"100%"}
                      h={"100%"}
                      fit="contain"
                    />
                  </Box>
                )}
              </Stack>
            </Group>
          </Fieldset>

          <Group justify="flex-end" gap={"sm"}>
            <Button variant="default" onClick={handleCancel}>
              Huỷ
            </Button>
            <Button type="submit" color="teal">
              Lưu
            </Button>
          </Group>
        </Stack>
      </form>
    </MyButtonCreateUpdate>
  );
}
