import { useState } from "react";
import { Box, Button, Group, Modal, Select, Text } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useDisclosure } from "@mantine/hooks";

import ClearIcon from "./clearIcon";
import EyeIcon from "./eye";
import { PriceCard } from "./price-card";

interface FilterSponsorProps {}

const FilterSponsor = (props: FilterSponsorProps) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [activePriceIdx, setActivePriceIdx] = useState(-1);
  const [value, setValue] = useState<Date | null>(null);

  const handlePrice = (idx: number) => {
    setActivePriceIdx(idx);
  };

  return (
    <>
      <Modal opened={opened} onClose={close} title="Filter">
        <Select
          allowDeselect
          label="ariza holati"
          placeholder="Barchasi"
          data={[
            { value: "barchasi", label: "Barchasi" },
            { value: "yangi", label: "Yangi" },
            { value: "moderatsiyada", label: "Moderatsiyada" },
            { value: "tasdiqlangan", label: "Tasdiqlangan" },
            { value: "bekor qilingan", label: "Bekor qilingan" }
          ]}
        />
        <Text
          style={{
            color: "rgba(29, 29, 31, 1)",
            fontFamily: "Rubik",
            fontWeight: "500",
            padding: "28px 0 12px",
            letterSpacing: "1.13 px",
            fontSize: "12px",
            textTransform: "uppercase"
          }}
        >
          To‘lov summasi
        </Text>
        <Box>
          <Box
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,  minmax(100px, 1fr))",
              gap: "16px"
            }}
          >
            {["Barchasi", 1000000, 5000000, 7000000, 10000000, 30000000].map((item, idx) => (
              <PriceCard fontSize={14} key={item} onClick={() => handlePrice(idx)} isActive={idx === activePriceIdx} price={item} />
            ))}
          </Box>
        </Box>
        <DateInput clearable value={value} onChange={setValue} label="Sana" placeholder="kk.oo.yyyy - kk.oo.yyyy" maw={250} />
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
          <Button style={{ backgroundColor: "#3366FF" }} leftIcon={<EyeIcon />}>
            Natijalarni ko‘rish
          </Button>
        </Box>
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
          onClick={open}
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

export default FilterSponsor;
