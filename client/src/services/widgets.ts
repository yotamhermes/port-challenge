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
  widgets = widgets.filter((x) => x.id !== id);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Done");
    }, 1000);
  });
};

export const addWidget = (widget: IWidget) => {
  const id = Math.max(0, ...widgets.map((x) => x.id || 0)) + 1;
  widgets.push({ ...widget, id });

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Done");
    }, 1000);
  });
};
