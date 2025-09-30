"use client";
import MyTitleBasic from "@/components/client/mytitle/MyTitleBasic";
import MyModalImage from "@/components/mymodal/MyModalImage";
import { teachersData } from "@/modules/data/DataTeachers";
import { ITeacherInteract } from "@/modules/interface/ITeacherData";
import { Grid, Image, Modal, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

export default function TeachersInteractItem() {
  const [opened, { open, close }] = useDisclosure(false);
  const [selected, setSelected] = useState<string>("");

  const data: ITeacherInteract = teachersData.teachersInteract || {};

  const zoomInImage = (image: string) => {
    setSelected(image);
    open();
  };
  return (
    <Stack gap={20} className="teacherAdvisorItem">
      <MyTitleBasic
        textTitle={data.title}
        textDesc={data.description}
        colorTitle="var(--mantine-color-brand-5)"
      />
      <Grid>
        {data.iamgeInteract &&
          data.iamgeInteract.map((item, index) => (
            <Grid.Col span={{ base: 12, md: 3 }} key={index}>
              <Image
                src={item}
                alt="teacher-interact-error-image"
                w={"100%"}
                h={200}
                radius={"sm"}
                style={{ cursor: "zoom-in" }}
                onClick={() => zoomInImage(item)}
              />
            </Grid.Col>
          ))}
      </Grid>
      <MyModalImage opened={opened} close={close} image={selected} />
    </Stack>
  );
}
