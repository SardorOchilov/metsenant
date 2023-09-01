import get from "lodash/get";

import { IEntity } from "./types";

export const Student = (item: any): IEntity.Student => ({
  id: get(item, "id") || "",
  fullName: get(item, "full_name") || "",
  degree: get(item, "degree") || "",
  tuitionFee: get(item, "tuition_fee") || "",
  phone: get(item, "phone") || "",
  createdAt: get(item, "created_at") || "",
  university: get(item, "university") || ""
});

export const University = (item: any): IEntity.University => ({
  id: get(item, "id") || "",
  name: get(item, "name") || ""
});

export const Sponsor = (item: any): IEntity.Sponsor => ({
  id: get(item, "id") || "",
  fullName: get(item, "full_name") || "",
  phone: get(item, "phone") || "",
  amount: get(item, "amount") || "",
  spendMoney: get(item, "spendMoney") || "",
  createdAt: get(item, "created_at") || "",
  status: get(item, "status") || ""
});
