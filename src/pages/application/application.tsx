import { useState } from "react";
import { Box, Button, Container, Flex, SegmentedControl, Text, TextInput, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import { ApplicationImg, Navbar, SozImg } from "../../components";
import PriceButton from "../../components/price-card/price-card";

interface ApplicationProps {}

const Application = (props: ApplicationProps) => {
  const [phoneNumber, setPhoneNumber] = useState("+998");
  const [activePriceIdx, setActivePriceIdx] = useState(-1);
  const [sponsorType, setSponsorType] = useState("jismoniy");

  const flex = useMediaQuery("(max-width: 940px)");
  const segment = useMediaQuery("(max-width: 600px)");

  const handlePhone = (e: any) => {
    if (e.target.length < 4) setPhoneNumber(phoneNumber);
    else setPhoneNumber(e.target.value);
  };

  const handlePrice = (idx: number) => {
    setActivePriceIdx(idx);
  };

  const handleChangeSponsorType = (value: string) => {
    setSponsorType(value);
  };

  return (
    <Box>
      <Navbar />

      <Box
        style={
          flex
            ? {
                background: "#F9FAFF"
              }
            : {
                background: "linear-gradient(to right, #F9FAFF 50%, #F5F5F7 50%)"
              }
        }
      >
        <Container>
          <Flex style={flex ? { flexDirection: "column-reverse" } : { flexDirection: "row" }}>
            <Box
              sx={segment ? { width: "100%" } : { width: "600px" }}
              style={flex ? { flex: "1", padding: "75px 0", alignSelf: "center" } : { flex: "1", padding: "75px 60px 0 0" }}
            >
              <Title
                w="400px"
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "700",
                  letterSpacing: "0.4px",
                  color: "#1D1D1F",
                  paddingBottom: "40px",
                  lineHeight: "140%"
                }}
                order={1}
              >
                Homiy sifatida ariza topshirish
              </Title>
              <SegmentedControl
                color="blue"
                style={{ width: "100%" }}
                data={[
                  { label: "jismoniy shaxs", value: "jismoniy" },
                  { label: "yuridik shaxs", value: "yuridik" }
                ]}
                onChange={(value: string) => handleChangeSponsorType(value)}
              />
              <TextInput placeholder="Your name" label="F.I.Sh. (Familiya Ism Sharifingiz)" style={{ padding: "28px 0", width: "100%" }} />
              <TextInput type="number" placeholder="+998 00 000-00-00" label="Telefon raqamingiz" value={phoneNumber} onChange={e => handlePhone(e)} />
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
                    gridTemplateColumns: "repeat(auto-fill,  minmax(200px, 1fr))",
                    gap: "16px"
                  }}
                >
                  {[1000000, 5000000, 7000000, 10000000, 30000000, "Boshqa"].map((item, idx) => (
                    <PriceButton key={item} onClick={() => handlePrice(idx)} isActive={idx === activePriceIdx} price={item} />
                  ))}
                </Box>
                <Box>
                  {" "}
                  <TextInput style={activePriceIdx === 5 ? { opacity: "1", marginTop: "17px" } : { marginTop: "17px", opacity: "0" }} type="number" placeholder="0" />
                </Box>
              </Box>

              {sponsorType === "yuridik" ? <TextInput placeholder="Orient group" label="TASHKILOT NOMI" style={{ marginTop: "20px" }} /> : ""}

              <Button
                mt="34px"
                mb="80px"
                style={{
                  backgroundColor: "rgba(46, 91, 255, 1)"
                }}
                fullWidth
              >
                Yuborish
              </Button>
            </Box>
            <Box style={{ flex: "1", position: "relative" }}>
              <Box style={{ height: "650px", paddingTop: "50px" }}>
                <SozImg />
              </Box>
              <ApplicationImg />
            </Box>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Application;
