import { IWidget } from "../types/types";

let widgets: IWidget[] = [
  {
    id: 23,
    title: "Incomes By month",
    type: "bar",
    size: 2,
    position: {
      x: 7,
      y: 2,
    },
  },
  {
    id: 47,
    title: "Revenew",
    type: "pie",
    size: 3,
    position: {
      x: 4,
      y: 0,
    },
  },
  {
    id: 12,
    title: "Logs By type",
    type: "bar",
    size: 4,
    position: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 15,
    type: "bar",
    title: "Mixpanel",
    size: 2,
    position: {
      x: 7,
      y: 0,
    },
  },
  {
    id: 19,
    title: "Sales By Week",
    type: "pie",
    size: 2,
    position: {
      x: 9,
      y: 0,
    },
  },
];

export const getWidgets = () => {
  return new Promise((resolve) => {
    resolve(widgets);
  });
};
