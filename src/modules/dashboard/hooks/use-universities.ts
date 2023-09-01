import { useEffect, useState } from "react";
import { notifications } from "@mantine/notifications";

import { IApi } from "../types";
import { Api, Mappers, Types } from "..";

interface Props extends Partial<IApi.Universities.Request> {}

export const useUniversities = () => {
  const [state, setState] = useState<Types.IQuery.Universities>({ universities: [], count: 0, isLoading: true });

  useEffect(() => {
    setState(prev => ({ ...prev, isLoading: true }));
    const request = async () => {
      try {
        const { data } = await Api.Universities({});

        const universities = (data.results || []).map(Mappers.University);

        setState({ universities, count: data.count, isLoading: false });
      } catch (err: any) {
        notifications.show({ message: err?.message, color: "red" });
        setState({ universities: [], count: 0, isLoading: false });
      }
    };

    request();
  }, []);

  return state;
};
