import { useState } from "react";
import { Box, Button, Flex, InputBase, Paper, PasswordInput, Title } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import * as yup from "yup";

import { setSession } from "services";

import { Api, Mappers } from "modules/auth";
import { useAuth } from "modules/auth/context";
import { IForm } from "modules/auth/types";

import { Logo3 } from "components";

interface LoginProps {}

const schema = yup.object({
  username: yup.string().min(5).label("Username").required(),
  password: yup.string().min(5).label("Password").required()
});

const Login = (props: LoginProps) => {
  const { methods } = useAuth();
  const [loading, setLoading] = useState(false);
  const form = useForm<IForm.Login>({
    initialValues: { username: "", password: "" },
    validate: yupResolver(schema)
  });

  const onSubmit = async (values: IForm.Login) => {
    setLoading(true);
    try {
      const { data } = await Api.Login(values);
      const { tokens, user } = data;

      setSession(tokens);
      methods.login(Mappers.User(user));
    } catch (err: any) {
      console.log("error = ", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box h="100vh" sx={{ display: "grid", placeItems: "center", backgroundColor: "#F5F5F7" }}>
      <Flex direction="column" gap={48} align="center">
        <Logo3 />
        <Paper w={380} p={32} bg="white">
          <Title mb={44} size={24}>
            Login
          </Title>

          <form onSubmit={form.onSubmit(onSubmit)}>
            <Flex direction="column" gap={22}>
              <InputBase label="Username" {...form.getInputProps("username")} />
              <PasswordInput label="Password" {...form.getInputProps("password")} />
              <Button style={{ backgroundColor: '#2E5BFF' }} loading={loading} type="submit">
                Login
              </Button>
            </Flex>
          </form>
        </Paper>
      </Flex>
    </Box>
  );
};

export default Login;
