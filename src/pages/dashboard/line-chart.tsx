import React from "react";
import { Box, Title } from "@mantine/core";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface DataItem {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

function DashboardD(props: any) {
  const data: DataItem[] = [
    {
      name: "Yanvar",
      uv: 10,
      pv: 10,
      amt: 2400
    },
    {
      name: "Fevral",
      uv: 2300,
      pv: 1298,
      amt: 2210
    },
    {
      name: "Mart",
      uv: 4300,
      pv: 3500,
      amt: 2290
    },
    {
      name: "Aprel",
      uv: 5080,
      pv: 5908,
      amt: 2000
    },
    {
      name: "May",
      uv: 3700,
      pv: 4800,
      amt: 2181
    },
    {
      name: "Iyun",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Iyul",
      uv: 1290,
      pv: 4300,
      amt: 2100
    },
    {
      name: "Avgust",
      uv: 1590,
      pv: 5300,
      amt: 2100
    },
    {
      name: "Sentabr",
      uv: 5190,
      pv: 4300,
      amt: 2100
    },
    {
      name: "Oktabr",
      uv: 6090,
      pv: 4300,
      amt: 2100
    },
    {
      name: "Noyabr",
      uv: 5490,
      pv: 4300,
      amt: 2100
    },
    {
      name: "Dekabr",
      uv: 7490,
      pv: 5300,
      amt: 2100
    }
  ];

  return (
    <Box sx={{ padding:'20px', backgroundColor: "#fff", width: "100%", height: "460px", marginBottom: "100px", display: "flex", flexDirection: "column", borderRadius: "8px" }}>
      <Title order={3} sx={{ fontWeight: 700 }}>
        Homiylar va talabalar soni
      </Title>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "20px",
          color: "#7A7A9D",
          fontFamily: "SF-Pro",
          fontSize: "14px"
        }}
      >
        <Box w={12} h={12} sx={{ borderRadius: "50%", backgroundColor: "#4C6FFF" }} />
        Homiylar <Box w={12} h={12} sx={{ borderRadius: "50%", backgroundColor: "#FF92AE", marginLeft: "10px" }} />
        Talabalar
      </Box>
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fontSize: 14 }} />
          <YAxis tick={{ fontSize: 14 }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#4C6FFF" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#FF92AE" />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
}

export default DashboardD;
