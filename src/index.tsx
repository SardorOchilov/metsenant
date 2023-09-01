import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import ReactDOM from "react-dom/client";
/* eslint-disable  */
import { Routes } from "routes";
import { QueryParamProvider } from "use-query-params";
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6";

/* eslint-disable  */
import { Containers } from "modules/auth";

import "./assets/styles/main.scss";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <BrowserRouter>
    <QueryParamProvider adapter={ReactRouter6Adapter}>
      <MantineProvider
        theme={{
          fontFamily: "Open Sans",
          globalStyles: theme => ({
            "*, *::before, *::after": {
              boxSizing: "border-box"
            },
            body: { ...theme.fn.fontStyles() }
          }),
          fontSizes: {
            xs: "12px",
            xl: "15px",
            sm: "18px",
            md: "20px",
            lg: "24px"
          },
          components: {
            Container: {
              defaultProps: {
                sizes: {
                  xs: 540,
                  sm: 720,
                  md: 1260,
                  lg: 1540,
                  xl: 1620
                }
              }
            },
            SegmentedControl: {
              styles: {
                root: {
                  border: "2px solid #E0E7FF",
                  padding: "0",
                  backgroundColor: "#F9FAFF"
                },
                indicator: {
                  left: "5px",
                  right: "0",
                  height: "2",
                  bottom: "-4px",
                  backgroundColor: "#3366FF"
                },
                label: {
                  padding: "10px",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  color: "rgba(51, 102, 255, 0.60)",
                  letterSpacing: "1.125px",
                  fontFamily: "Rubik"
                }
              }
            },
            TextInput: {
              styles: {
                label: {
                  textTransform: "uppercase",
                  fontFamily: "Rubik",
                  fontSize: "12px",
                  fontWeight: "-moz-initial"
                },
                input: {
                  background: "rgba(224, 231, 255, 0.2)",
                  border: "1px solid rgba(224, 231, 255, 1)",
                  padding: "12px 16px",
                  fontFamily: "Rubik",
                  fontSize: "15px",
                  color: "#2E384D"
                }
              }
            },
            Button: {
              styles: {
                root: {
                  fontFamily: "Rubik",
                  fontSize: "15px",
                  fontWeight: 500,
                  height: "2.8rem"
                }
              }
            },
            Select: {
              styles: {
                root: {
                  fontFamily: "Rubik"
                },
                label: {
                  textTransform: "uppercase",
                  fontFamily: "Rubik",
                  fontSize: "12px",
                  fontWeight: "-moz-initial"
                },
                input: {
                  background: "rgba(224, 231, 255, 0.2)",
                  border: "1px solid rgba(224, 231, 255, 1)",
                  padding: "12px 16px",
                  fontSize: "15px",
                  color: "#2E384D"
                },
                item: {
                  textTransform: "capitalize",
                  fontSize: "14px"
                }
              }
            },
            Modal: {
              styles: {
                title: {
                  fontFamily: "sf-pro",
                  fontWeight: "bold",
                  fontSize: "24px"
                }
              }
            },
            DateInput: {
              styles: {
                root: {
                  fontFamily: "Rubik"
                },
                label: {
                  textTransform: "uppercase",
                  fontFamily: "Rubik",
                  fontSize: "12px",
                  fontWeight: "-moz-initial"
                },
                input: {
                  background: "rgba(224, 231, 255, 0.2)",
                  border: "1px solid rgba(224, 231, 255, 1)",
                  padding: "12px 16px",
                  fontSize: "15px",
                  color: "#2E384D",
                  fontWeight: "lighter"
                }
              }
            },
            InputBase: {
              styles: {
                input: {
                  background: "linear-gradient(0deg, rgba(224, 231, 255, 0.2), rgba(224, 231, 255, 0.2))"
                },
                label: {
                  textTransform: "uppercase",
                  fontFamily: "Rubik",
                  fontSize: "12px",
                  fontWeight: "-moz-initial"
                }
              }
            },
            PasswordInput: {
              styles: {
                input: {
                  background: "rgba(224, 231, 255, 0.2)",
                  border: "1px solid rgba(224, 231, 255, 1)",
                  padding: "12px 16px",
                  fontFamily: "Rubik",
                  fontSize: "15px",
                  color: "#2E384D"
                },
                label: {
                  textTransform: "uppercase",
                  fontFamily: "Rubik",
                  fontSize: "12px",
                  fontWeight: "-moz-initial"
                }
              }
            }
          }
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Containers.Auth>
          <Routes />
          <Notifications position="top-right" autoClose={4000} />
        </Containers.Auth>
      </MantineProvider>
    </QueryParamProvider>
  </BrowserRouter>
);
