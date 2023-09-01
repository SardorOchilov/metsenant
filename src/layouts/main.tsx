import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Container, Flex, Input, SegmentedControl, Text } from "@mantine/core";
import { StringParam, useQueryParam } from "use-query-params";

import { useAuth } from "modules/auth/context";

import { Avatar, FilterSponsor, FilterStudent, Logo, Logout } from "components";

interface MainProps {
  children: ReactNode;
}

const Main = ({ children }: MainProps) => {
  const { user, methods } = useAuth();
  const [search = "", setSearch] = useQueryParam("search", StringParam);
  const navigate = useNavigate();

  return (
    <Box sx={{ backgroundColor: "#fff" }}>
      <Container>
        <Flex
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            padding: "11px 0"
          }}
        >
          <Logo />
          <Flex sx={{ alignItems: "center", gap: "40px" }}>
            <Flex
              sx={{
                alignItems: "center",
                backgroundColor: "#F1F1F3",
                padding: "4px 4px 4px 20px",
                gap: "24px",
                borderRadius: "6px"
              }}
            >
              <Text
                sx={{
                  fontFamily: "SF-Pro",
                  fontSize: "14px"
                }}
                style={{ fontWeight: "700" }}
              >
                {user?.username}
              </Text>
              <Box
                sx={{
                  backgroundColor: "#00AE69",
                  padding: "3px 4px 0 4px",
                  borderRadius: "4px",
                  cursor: "pointer"
                }}
              >
                <Avatar />
              </Box>
            </Flex>
            <Logout />
          </Flex>
        </Flex>
      </Container>
      <Box
        sx={{
          backgroundColor: "#F9FAFF"
        }}
      >
        <Container>
          <Flex
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
              padding: "12px 0"
            }}
          >
            <SegmentedControl
              w="50%"
              value={window.location.pathname}
              onChange={path => navigate(path)}
              color="blue"
              data={[
                { label: "Dashboard", value: "/dashboard" },
                { label: "Homiylar", value: "/dashboard/sponsors" },
                { label: "Talabalar", value: "/dashboard/students" }
              ]}
            />

            <Flex sx={{ alignItems: "center", gap: "20px" }}>
              {!window.location.pathname.endsWith("dashboard") ? (
                <>
                  <Flex
                    sx={{
                      alignItems: "center",
                      gap: "8px",
                      backgroundColor: "#E8E8E8",
                      padding: "3px 10px",
                      borderRadius: "5px",
                      width: "284px"
                    }}
                  >
                    <svg cursor="pointer" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_120_308)">
                        <path
                          d="M8.33333 14.1667C11.555 14.1667 14.1667 11.555 14.1667 8.33333C14.1667 5.11167 11.555 2.5 8.33333 2.5C5.11167 2.5 2.5 5.11167 2.5 8.33333C2.5 11.555 5.11167 14.1667 8.33333 14.1667Z"
                          stroke="#B1B1B8"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path d="M17.5 17.5L12.5 12.5" stroke="#B1B1B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </g>
                      <defs>
                        <clipPath id="clip0_120_308">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <Input
                      styles={{
                        input: {
                          backgroundColor: "#E8E8E8",
                          border: "none",
                          padding: 0,
                          fontFamily: "Rubik",
                          fontWeight: 400,
                          fontSize: "16px"
                        }
                      }}
                      value={search!}
                      onChange={e => setSearch(e.target.value)}
                      sx={{ width: "100%" }}
                      placeholder="Izlash"
                    />
                  </Flex>
                  {window.location.pathname.includes("sponsors") ? <FilterSponsor /> : <FilterStudent />}
                </>
              ) : null}
            </Flex>
          </Flex>
        </Container>
      </Box>
      <Box style={{ backgroundColor: " #F5F5F7" }}>
        <Container>{children}</Container>
      </Box>
    </Box>
  );
};

export default Main;