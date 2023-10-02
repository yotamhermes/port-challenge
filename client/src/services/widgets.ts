import { IWidget } from "../types/types";
import { service } from "./service";

export const getWidgets = () => {
  return service
    .get("/widgets")
    .then((res) => res.data)
    .then((data) => data?.map((w: any) => ({ ...w, id: w._id })));
};

export const deleteWidget = (id?: number) => {
  return service.delete(`/widgets/${id}`);
};

export const addWidget = (widget: IWidget) => {
  return service.post("/widgets", widget).then((x) => x.data);
};
