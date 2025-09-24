import {
  cities,
  dayStudyData,
  levelStudyData,
  subjects,
  timeStudyData,
} from "@/modules/data/DataFindClient";
import {
  ICity,
  ILevelStudy,
  ISubject,
} from "@/modules/interface/InterfaceFindClient";
import {
  Checkbox,
  Group,
  MultiSelect,
  RangeSlider,
  Select,
  Stack,
  Text,
} from "@mantine/core";
import { useEffect, useMemo, useState } from "react";

export default function SlideBarCourse1v1() {
  const [cityId, setCityId] = useState<string | null>(null);
  const [levelId, setLevelId] = useState<string | null>(null);
  const [educationalLevel, setEducationalLevel] = useState<string | null>(null);
  const [price, setPrice] = useState<[number, number]>([0, 10000000]);

  const cityOptions = (cities: ICity[]) =>
    cities.map((c) => ({ value: String(c.id), label: c.name }));

  const levelOptions = (data: ILevelStudy) =>
    data.levels.map((c, idx) => ({ value: String(idx), label: c }));

  const districtOptionsByCityId = (cities: ICity[], cityId?: string | null) => {
    const city = cities.find((c) => String(c.id) === String(cityId));
    return city
      ? city.districts.map((d) => ({ value: String(d.id), label: d.name }))
      : [];
  };

  const subjectByEducationalLevel = (
    subjects: ISubject[],
    educationalLevel?: string | null
  ) => {
    const sub = subjects.find(
      (s) => String(s.educationalLevel) === String(educationalLevel)
    );
    return sub
      ? sub.subject.map((d, idx) => ({ value: String(idx), label: d }))
      : [];
  };

  const cityData = useMemo(() => cityOptions(cities), []);
  const districtData = useMemo(
    () => districtOptionsByCityId(cities, cityId),
    [cityId]
  );
  const subjectData = useMemo(
    () => subjectByEducationalLevel(subjects, educationalLevel),
    [educationalLevel]
  );
  const levelData = useMemo(() => levelOptions(levelStudyData), []);

  return (
    <Stack
      gap={0}
      style={{
        borderRadius: "8px",
        overflow: "hidden",
        border: "1px solid var(--mantine-color-brand-2)",
      }}
      bg={"white"}
    >
      <Text
        fz={18}
        fw={600}
        bg={"var(--mantine-color-brand-5)"}
        ta={"center"}
        c={"white"}
        p={6}
      >
        Tìm kiếm gia sư
      </Text>
      <Stack gap={10} p={10}>
        <Stack gap={5} pb={10} style={{ borderBottom: "2px solid #E3E9F0" }}>
          <Select
            label={
              <Text size="md" fw={500} mb={5}>
                Tỉnh/Thành Phố
              </Text>
            }
            placeholder="Chọn tỉnh/thành phố"
            data={cityData}
            value={cityId}
            onChange={setCityId}
            clearable
            styles={{
              input: { fontSize: 14 },
              option: {
                fontSize: 14,
              },
            }}
          />

          <MultiSelect
            disabled={cityId ? false : true}
            label={
              <Text size="md" fw={500} mb={5}>
                Quận/Huyện
              </Text>
            }
            placeholder={cityId ? "Chọn quận/huyện" : "Chọn tỉnh/thành trước"}
            data={districtData}
            rightSection={null}
            rightSectionWidth={0}
            styles={{
              input: { fontSize: 14 },
              pill: { fontSize: 14 },
              option: {
                fontSize: 14,
              },
            }}
          />
        </Stack>
        <Stack gap={5} pb={10} style={{ borderBottom: "2px solid #E3E9F0" }}>
          <Checkbox.Group
            value={educationalLevel ? [educationalLevel] : []}
            onChange={(vals) => {
              const last = vals[vals.length - 1] ?? null;
              setEducationalLevel(last);
            }}
            label={
              <Text size="md" fw={500}>
                Cấp bậc học
              </Text>
            }
          >
            <Group mt={5}>
              <Checkbox
                value="TTH"
                label="Tiểu học"
                color="brand.5"
                styles={{
                  input: {
                    borderColor: "var(--mantine-color-brand-5)",
                    "&:checked": { backgroundColor: "red", borderColor: "red" },
                  },
                  label: { marginLeft: -8 },
                }}
              />
              <Checkbox
                value="THCS"
                label="THCS"
                color="brand.5"
                styles={{
                  input: {
                    borderColor: "var(--mantine-color-brand-5)",
                    "&:checked": { backgroundColor: "red", borderColor: "red" },
                  },
                  label: { marginLeft: -8 },
                }}
              />
              <Checkbox
                value="THPT"
                label="THPT"
                color="brand.5"
                styles={{
                  input: {
                    borderColor: "var(--mantine-color-brand-5)",
                    "&:checked": { backgroundColor: "red", borderColor: "red" },
                  },
                  label: { marginLeft: -8 },
                }}
              />
            </Group>
          </Checkbox.Group>
          <MultiSelect
            disabled={educationalLevel ? false : true}
            label={
              <Text size="md" fw={500} mb={5}>
                Môn học
              </Text>
            }
            placeholder={
              educationalLevel ? "Chọn môn học" : "Chọn cấp bậc học trước"
            }
            data={subjectData}
            rightSection={null}
            rightSectionWidth={0}
            styles={{
              input: { fontSize: 14 },
              pill: { fontSize: 14 },
              option: {
                fontSize: 14,
              },
            }}
          />
        </Stack>
        <Stack gap={5} pb={10} style={{ borderBottom: "2px solid #E3E9F0" }}>
          <MultiSelect
            label={
              <Text size="md" fw={500} mb={5}>
                Ngày học
              </Text>
            }
            placeholder={"Chọn ngày học"}
            data={dayStudyData.day}
            rightSection={null}
            rightSectionWidth={0}
            styles={{
              input: { fontSize: 14 },
              pill: { fontSize: 14 },
              option: {
                fontSize: 14,
              },
            }}
          />
          <MultiSelect
            label={
              <Text size="md" fw={500} mb={5}>
                Thời gian học
              </Text>
            }
            placeholder={"Chọn thời gian học"}
            data={timeStudyData.time}
            rightSection={null}
            rightSectionWidth={0}
            styles={{
              input: { fontSize: 14 },
              pill: { fontSize: 14 },
              option: {
                fontSize: 14,
              },
            }}
          />
        </Stack>
        <Stack gap={5} pb={10} style={{ borderBottom: "2px solid #E3E9F0" }}>
          <Select
            label={
              <Text size="md" fw={500} mb={5}>
                Trình độ
              </Text>
            }
            placeholder="Chọn trình độ gia sư"
            data={levelData}
            value={levelId}
            onChange={setLevelId}
            clearable
            styles={{
              input: { fontSize: 14 },
              option: {
                fontSize: 14,
              },
            }}
          />
          <Text size="md" fw={500} mb={5}>
            Giá:{" "}
            <span
              style={{ color: "var(--mantine-color-brand-5)", fontWeight: 400 }}
            >
              {price[0]} - {price[1]}
            </span>{" "}
            VNĐ
          </Text>
          <RangeSlider
            min={0}
            max={10000000}
            minRange={500000}
            value={price} // controlled
            onChange={setPrice} // lấy giá trị liên tục khi kéo
            onChangeEnd={setPrice}
            step={100000}
            defaultValue={[0, 10000000]}
            color="brand.5"
            size="md"
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
