import { IWidget } from "../types/types";

let widgets: IWidget[] = [
  {
    id: 23,
    title: "Incomes By month",
    type: "bar",
    position: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 47,
    title: "Revenew",
    type: "pie",
    position: {
      x: 3,
      y: 0,
    },
  },
  {
    id: 12,
    title: "Logs By type",
    type: "bar",
    position: {
      x: 6,
      y: 0,
    },
  },
  {
    id: 15,
    type: "bar",
    title: "Mixpanel",
    position: {
      x: 9,
      y: 0,
    },
  },
  {
    id: 19,
    title: "Sales By Week",
    type: "pie",
    position: {
      x: 0,
      y: 3,
    },
  },
];

export const getWidgets = () => {
  return new Promise((resolve) => {
    resolve(widgets);
  });
};
