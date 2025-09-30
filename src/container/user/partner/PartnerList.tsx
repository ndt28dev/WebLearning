"use client";
import MyTitleBasic from "@/components/client/mytitle/MyTitleBasic";
import { partnerData } from "@/modules/data/DataPartner";
import {
  Box,
  Card,
  Container,
  Grid,
  Image,
  Modal,
  Stack,
  Text,
} from "@mantine/core";
import "@/styles/client/partner/PartnerList.scss";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import PartnerModal from "./contai/PartnerModal";
import { IDetailsPartner, IPartner } from "@/modules/interface/IPartner";

export default function PartnerList() {
  const data = (partnerData.partnerList ?? []) as IPartner[];
  const [opened, { open, close }] = useDisclosure(false);
  const [selected, setSelected] = useState<IPartner>(data[0]);

  const handleSelected = (item: IPartner) => {
    setSelected(item);
    open();
  };

  const renderListPartner = () => (
    <Grid>
      {data.map((item, index) => (
        <Grid.Col
          span={{ base: 6, sm: 4, md: 3 }}
          key={item.id ?? item.name ?? index}
        >
          <Card
            className="partnerList-item"
            onClick={() => handleSelected(item)}
          >
            <Image
              src={item.image}
              alt={item.name}
              w="100%"
              h={80}
              fit="contain"
            />
            <Text
              size="sm"
              mt={10}
              fw={500}
              c="var(--mantine-color-brand-5)"
              ta="center"
            >
              {item.name}
            </Text>
          </Card>
        </Grid.Col>
      ))}
    </Grid>
  );

  return (
    <>
      <Box pb={50} className="partnerList">
        <Container size="xl">
          <Stack gap={10}>
            <Text fz={25} fw={600} ta={"left"} c={"#333"}>
              Danh sách đối tác
            </Text>
            {renderListPartner()}
          </Stack>
        </Container>
      </Box>

      <Modal
        opened={opened}
        onClose={close}
        lockScroll={false}
        title={
          <Text fz={18} fw={500}>
            {selected?.name ?? "Thông tin đối tác"}
          </Text>
        }
        zIndex={999}
        size="xl"
      >
        {selected && <PartnerModal item={selected} />}
      </Modal>
    </>
  );
}
