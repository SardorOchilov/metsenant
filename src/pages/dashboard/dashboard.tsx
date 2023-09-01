import { Box, Text, Title } from "@mantine/core";

import { IEntity } from "modules/auth/types";

import Images from "components/dashboard-images";
import Images2 from "components/dashboard-images2";
import Images3 from "components/dashboard-images3";

import DashboardD from "./line-chart";

import "../../assets/styles/main.scss";

interface DashboardProps {
  user: IEntity.User | null;
}

const Dashboard = ({ user }: DashboardProps) => (
  <Box className="container">
    <Box
      sx={{
        backgroundColor: "#F5F5F7",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "30px",
        paddingTop: "30px"
      }}
    >
      <div className="payments">
        <div className="boxs">
          <Images />
          <div className="texts">
            <Title sx={{ color: "#7A7A9D", fontFamily: "Rubik", fontSize: "12px", fontStyle: "normal", fontWeight: 400, lineHeight: "12px" }}>Jami to'langan summa</Title>
            <Text
              sx={{
                display: "flex",
                gap: "10px",
                color: "#2E384D",
                fontFamily: "SF-Pro",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "20px"
              }}
            >
              1 684 325 000 <span className="uzs">UZS</span>
            </Text>
          </div>
        </div>
        <div className="boxs">
          <Images2 />
          <div className="texts">
            <Title sx={{ color: "#7A7A9D", fontFamily: "Rubik", fontSize: "12px", fontStyle: "normal", fontWeight: 400, lineHeight: "12px" }}>Jami so'ralgan summa</Title>
            <Text
              sx={{
                display: "flex",
                gap: "10px",
                color: "#2E384D",
                fontFamily: "SF-Pro",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "20px"
              }}
            >
              14 098 530 000 <span className="uzs">UZS</span>
            </Text>
          </div>
        </div>
        <div className="boxs">
          <Images3 />
          <div className="texts">
            <Title sx={{ color: "#7A7A9D", fontFamily: "Rubik", fontSize: "12px", fontStyle: "normal", fontWeight: 400, lineHeight: "12px" }}>To'lanishi kerak summa</Title>
            <Text
              sx={{
                display: "flex",
                gap: "10px",
                color: "#2E384D",
                fontFamily: "SF-Pro",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "20px"
              }}
            >
              12 414 205 000 <span className="uzs">UZS</span>
            </Text>
          </div>
        </div>
      </div>
      <DashboardD />
    </Box>
  </Box>
);

export default Dashboard;
