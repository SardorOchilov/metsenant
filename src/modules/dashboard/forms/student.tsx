import { Button, LoadingOverlay, Paper, Select } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { object, string } from "yup";

import { DEGREE } from "../constants";
import { useUniversities } from "../hooks";
import { Types } from "..";

interface StudentProps {}

const schema = object({
  degree: string().label("Degree").required(),
  university: string().label("University").required()
});

type IForm = Pick<Types.IApi.Students.Request, "degree" | "university">;

const Student = (props: StudentProps) => {
  const { onSubmit, getInputProps } = useForm<IForm>({ validate: yupResolver(schema) });
  const { universities, isLoading } = useUniversities();

  const handleSubmit = (data: IForm) => {
    console.log("data = ", data);
  };

  return (
    <Paper sx={{ position: "relative" }}>
      {isLoading ? (
        <LoadingOverlay visible overlayBlur={2} />
      ) : (
        <form onSubmit={onSubmit(handleSubmit)}>
          <Select
            label="Degree"
            placeholder="Degree"
            data={[
              { value: DEGREE.BACHELORS, label: "Bakalavr" },
              { value: DEGREE.MASTER, label: "Magistir" }
            ]}
            {...getInputProps("degree")}
          />
          <Select
            label="University"
            placeholder="University"
            data={universities.map(({ name, id }) => ({ value: id, label: name })) as any}
            {...getInputProps("university")}
          />
          <Button type="reset">Clear</Button>
          <Button>Filter</Button>
        </form>
      )}
    </Paper>
  );
};

export default Student;
