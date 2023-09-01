import { useEffect, useMemo, useState } from "react";
import { notifications } from "@mantine/notifications";

import * as types from "../types";
import { Api, Mappers, Types } from "..";

interface Props extends Partial<types.IApi.Students.Request> {
  id: number;
}
export const useStudentsSingle = ({ id }: Props) => {
  const [state, setState] = useState<Types.IQuery.Students>({ students: [], count: 0, isLoading: true });

  const defaultParams: Partial<types.IApi.Students.Request> = useMemo(
    () => ({
      id: id || 1
    }),
    [id]
  );

  useEffect(() => {
    const request = async () => {
      try {
        const { data } = await Api.StudentsSingle(defaultParams);

        const students = (data.results || []).map(Mappers.Student);

        setState({ students, count: data.count, isLoading: false });
      } catch (err: any) {
        notifications.show({ message: err?.message, color: "red" });
        setState({ students: [], count: 0, isLoading: false });
      }
    };

    request();
  }, [defaultParams]);

  return state;
};
