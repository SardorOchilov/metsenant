import { Box } from "@mantine/core";

import { Check } from "components";

// import cls from "./price-card.module.scss";

interface PriceButtonProps {
  price: number | string;
  isActive: boolean;
  onClick: () => void;
  fontSize?: number;
}

function addSpacesToNumber(price: number | string) {
  if (price === "boshqa") return price;
  const numStr = price.toString();
  const data = numStr.replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  return `${data}`.toLowerCase();
}

const PriceButton = ({
  price,
  fontSize = 18,
  isActive,
  onClick,
}: PriceButtonProps) => (
  <Box
    sx={{
      position: "relative",
      cursor: "pointer",
      border: "2px solid #E0E7FF",
      borderRadius: "6px",
      textAlign: "center",
      fontFamily: "Rubik",
      textTransform: "uppercase",
    }}
    style={isActive ? { border: "2px solid #2E5BFF" } : {}}
    onClick={onClick}
  >
    {isActive ? <Check /> : null}

    {(addSpacesToNumber(price) === "boshqa" ||
    addSpacesToNumber(price) === "barchasi") ? (
      <p
        style={{
          fontSize: `${fontSize}px`,
          fontWeight: "500",
        }}
      >
        {addSpacesToNumber(price)}
      </p>
    ) : (
      <p
        style={{
          fontSize: `${fontSize}px`,
          fontWeight: "500",
        }}
      >
        {addSpacesToNumber(price)}
        <span
          style={{
            marginLeft: "4px",
            color: "#2E5BFF",
            fontWeight: "400",
            fontSize: "12px",
          }}
        >
          UZS
        </span>
      </p>
    )}
  </Box>
);

export default PriceButton;
