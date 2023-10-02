import { IWidget } from "../types/types";
import { service } from "./service";
let widgets: IWidget[] = [
  // {
  //   id: 23,
  //   title: "Incomes By month",
  //   type: "bar",
  //   schema: "deploymentlog",
  //   schemField: "timestamp",
  //   position: {
  //     x: 0,
  //     y: 0,
  //   },
  // },
];

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
