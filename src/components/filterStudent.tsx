import { useState } from "react";
import { Box, Button, Group, LoadingOverlay, Modal, Select } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { StringParam, useQueryParam } from "use-query-params";
import { object, string } from "yup";

import { Types } from "modules/dashboard";
import { DEGREE } from "modules/dashboard/constants";
import { useUniversities } from "modules/dashboard/hooks";

import { ClearIcon, EyeIcon } from "components";

interface FilterStudentProps {}

const schema = object({
  degree: string().label("Degree").required(),
  university: string().label("University").required()
});

type IForm = Pick<Types.IApi.Students.Request, "degree" | "university">;

const FilterStudent = (props: FilterStudentProps) => {
  const [modal, setModal] = useState(false);
  const [activePriceIdx, setActivePriceIdx] = useState(-1);

  const { onSubmit, getInputProps } = useForm<IForm>({ validate: yupResolver(schema) });
  const { universities, isLoading } = useUniversities();
  const [degree = "", setDegree] = useQueryParam("degree", StringParam);
  const [university = "", setUniversity] = useQueryParam("university", StringParam);

  const handlePrice = (idx: number) => {
    setActivePriceIdx(idx);
  };

  const handleSubmit = (data: any) => {
    if (data.degree === "barchasi") setDegree(null);
    else setDegree(data.degree);
    setUniversity(data.university);
    setModal(false);
  };

  return (
    <>
      <Modal sx={{ position: "relative" }} opened={modal} onClose={() => setModal(false)} title="Filter">
        {isLoading ? (
          <LoadingOverlay visible overlayBlur={2} />
        ) : (
          <form onSubmit={onSubmit(handleSubmit)}>
            <Select
              label="talabalik turi"
              placeholder="Barchasi"
              data={[
                { value: "barchasi", label: "Barchasi" },
                { value: DEGREE.BACHELORS, label: "Bakalavr" },
                { value: DEGREE.MASTER, label: "Magistir" }
              ]}
              {...getInputProps("degree")}
            />
            <Select label="OTM" placeholder="Barchasi" data={universities.map(({ name, id }) => ({ value: id, label: name })) as any} {...getInputProps("university")} />
            <Box
              style={{
                borderTop: "1px solid rgba(245, 245, 247, 1)",
                paddingTop: "28px",
                marginTop: "28px",
                display: "flex",
                justifyContent: "flex-end",
                gap: "16px"
              }}
            >
              <Button style={{ color: "#3366FF", borderColor: "#3366FF" }} leftIcon={<ClearIcon />} variant="outline">
                Tozalash
              </Button>
              <Button type="submit" style={{ backgroundColor: "#3366FF" }} leftIcon={<EyeIcon />}>
                Natijalarni ko‘rish
              </Button>
            </Box>
          </form>
        )}
      </Modal>

      <Group position="center">
        <Button
          style={{
            backgroundColor: "#EDF1FD",
            color: "#3366FF",
            padding: "8px 32px",
            fontFamily: "sf-pro",
            fontWeight: "500",
            letterSpacing: "-0.35px",
            fontSize: "14px"
          }}
          onClick={() => setModal(true)}
        >
          <svg style={{ marginRight: "10px" }} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M11.6667 0.333374H2.33337C1.80294 0.333374 1.29423 0.544088 0.919161 0.919161C0.544088 1.29423 0.333374 1.80294 0.333374 2.33337V3.11337C0.333279 3.38867 0.390018 3.66102 0.500041 3.91337V3.95337C0.594227 4.16735 0.727636 4.36181 0.893374 4.52671L5.00004 8.60671V13C4.99981 13.1133 5.02846 13.2248 5.08329 13.324C5.13811 13.4231 5.2173 13.5067 5.31337 13.5667C5.41947 13.6325 5.54189 13.6671 5.66671 13.6667C5.77107 13.6661 5.87383 13.641 5.96671 13.5934L8.63337 12.26C8.74332 12.2046 8.83577 12.1199 8.90049 12.0152C8.96521 11.9104 8.99967 11.7898 9.00004 11.6667V8.60671L13.08 4.52671C13.2458 4.36181 13.3792 4.16735 13.4734 3.95337V3.91337C13.5926 3.66299 13.6584 3.39056 13.6667 3.11337V2.33337C13.6667 1.80294 13.456 1.29423 13.0809 0.919161C12.7058 0.544088 12.1971 0.333374 11.6667 0.333374ZM7.86004 7.86004C7.79825 7.92233 7.74937 7.99621 7.71619 8.07744C7.68302 8.15866 7.6662 8.24564 7.66671 8.33337V11.2534L6.33337 11.92V8.33337C6.33388 8.24564 6.31706 8.15866 6.28389 8.07744C6.25071 7.99621 6.20183 7.92233 6.14004 7.86004L2.60671 4.33337H11.3934L7.86004 7.86004ZM12.3334 3.00004H1.66671V2.33337C1.66671 2.15656 1.73695 1.98699 1.86197 1.86197C1.98699 1.73695 2.15656 1.66671 2.33337 1.66671H11.6667C11.8435 1.66671 12.0131 1.73695 12.1381 1.86197C12.2631 1.98699 12.3334 2.15656 12.3334 2.33337V3.00004Z"
              fill="#3365FC"
            />
          </svg>
          Filter
        </Button>
      </Group>
    </>
  );
};

export default FilterStudent;
