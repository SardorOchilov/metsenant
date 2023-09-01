import { Link } from "react-router-dom";
import { Box, Burger, Button, Container, Drawer, Flex, List, MediaQuery, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import Login from "../login";
import Logo2 from "../logo2";

import cls from "./navbar.module.scss";

interface NavbarProps {}

const Navbar = (props: NavbarProps) => {
  const [opened, { open, close }] = useDisclosure(false);
  const label = opened ? "Close navigation" : "Open navigation";

  return (
    <Box
      sx={{
        boxShadow: "0px 25px 40px 0px rgba(0, 0, 0, 0.03)",
        padding: "15px 0",
      }}
    >
      <Container
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Logo2 />

        <Box sx={{ display: "flex", alignItems: "center", gap: "39px" }}>
          <MediaQuery query="(max-width: 940px)" styles={{ display: "none" }}>
            <Box>
              <List className={cls["nav-links"]}>
                <List.Item>
                  <Link className={cls.link} to="/asosiy">
                    Asosiy
                  </Link>
                </List.Item>
                <List.Item>
                  <Link className={cls.link} to="/grantlar">
                    Grantlar
                  </Link>
                </List.Item>
                <List.Item>
                  <Link className={cls.link} to="/soliqlar">
                    Soliq imtiyozlari
                  </Link>
                </List.Item>
              </List>
            </Box>
          </MediaQuery>
          <MediaQuery query="(max-width: 740px)" styles={{ display: "none" }}>
            <Flex gap="36px">
              <Link className={cls.login} to="/auth/login">
                <Login />
                <Text
                  style={{
                    fontFamily: "sf-pro",
                    fontWeight: "700",
                    color: "#28293D",
                    fontSize: "14px",
                  }}
                >
                  Kirish
                </Text>
              </Link>
              <Button
                style={{
                  fontFamily: "sf-pro",
                  borderRadius: "8px",
                  border: "2px solid #36F",
                  color: "#36F",
                  padding: "8px 32px",
                  fontSize: "14px",
                }}
                to="auth/register"
                variant="outline"
                component={Link}
              >
                Ro'yxatdan o'tish
              </Button>
            </Flex>
          </MediaQuery>

          <MediaQuery query="(min-width: 940px)" styles={{ display: "none" }}>
            <Burger opened={opened} onClick={open} aria-label={label} />
          </MediaQuery>
          <MediaQuery query="(min-width: 940px)" styles={{ display: "none" }}>
            <Drawer opened={opened} onClose={close}>
              <Box>
                <List
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    listStyle: "none",
                  }}
                >
                  <Link className={cls.drawerLink} to="/asosiy">
                    <List.Item className={cls.drawer}>Asosiy</List.Item>{" "}
                  </Link>
                  <Link className={cls.drawerLink} to="/grantlar">
                    <List.Item className={cls.drawer}>Grantlar</List.Item>
                  </Link>
                  <Link className={cls.drawerLink} to="/soliqlar">
                    <List.Item className={cls.drawer}>Soliq imtiyozlari</List.Item>{" "}
                  </Link>
                </List>
              </Box>
            </Drawer>
          </MediaQuery>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;