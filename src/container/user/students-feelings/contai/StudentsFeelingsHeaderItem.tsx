"use client";

import { feelingsData } from "@/modules/data/DataFeelings";
import { IFeelingsHeader } from "@/modules/interface/IFeelingsData";
import { Grid, Image } from "@mantine/core";

export default function StudentsFeelingsHeaderItem() {
  const data: IFeelingsHeader = feelingsData.feelingsHeader || {};
  return (
    <Grid>
      <Grid.Col span={{ base: 12, md: 6 }}>
        <Image
          src={data.image && data.image[0]}
          alt={"error-image"}
          h={"100%"}
          radius={"20px"}
        />
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 6 }}>
        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Image
              src={data.image && data.image[1]}
              alt={"error-image"}
              h={300}
              radius={"20px 20px 20px 20px"}
              mb={15}
            />
            <Image
              src={data.image && data.image[4]}
              alt={"error-image"}
              h={200}
              radius={"20px 20px 20px 20px"}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Image
              src={data.image && data.image[2]}
              alt={"error-image"}
              h={200}
              radius={"20px 80px 20px 20px"}
              mb={15}
            />
            <Image
              src={data.image && data.image[3]}
              alt={"error-image"}
              h={300}
              radius={"20px 20px 80px 20px"}
            />
          </Grid.Col>
        </Grid>
      </Grid.Col>
    </Grid>
  );
}
