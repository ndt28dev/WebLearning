"use client";
import MyTitleBasic from "@/components/client/mytitle/MyTitleBasic";
import { teachersData } from "@/modules/data/DataTeachers";
import { ITeacherList } from "@/modules/interface/ITeacherData";
import { Card, Center, Grid, Image, Stack, Text } from "@mantine/core";
import TeachersItem from "./TeachersItem";
import "@/styles/client/teachers/Teachers.scss";

export default function TeachersContai() {
  const data: ITeacherList = teachersData.teachersList || {};

  return (
    <Stack gap={20} className="teachersItem">
      <MyTitleBasic
        textTitle={data.title}
        textDesc={data.description}
        colorTitle="var(--mantine-color-brand-5)"
      />
      <Stack gap={10}>
        <Text fz={25} fw={600} ta={"left"} c={"#333"}>
          Danh sách giáo viên
        </Text>
        <Grid>
          {data.teachers &&
            data.teachers.map((item) => {
              if (item.role !== "Teacher") return null;
              return <TeachersItem key={item.id} item={item} />;
            })}
        </Grid>
      </Stack>
      <Stack gap={10}>
        <Text fz={25} fw={600} ta={"left"} c={"#333"}>
          Danh sách gia sư
        </Text>
        <Grid>
          {data.teachers &&
            data.teachers.map((item) => {
              if (item.role !== "Tutor") return null;
              return <TeachersItem key={item.id} item={item} />;
            })}
        </Grid>
      </Stack>
    </Stack>
  );
}
