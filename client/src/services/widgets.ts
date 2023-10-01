import { IWidget } from "../types/types";

let widgets: IWidget[] = [
  {
    id: 23,
    title: "Incomes By month",
    type: "bar",
    schema: "deploymentlog",
    schemField: "timestamp",
    position: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 47,
    title: "Revenew",
    type: "pie",
    schema: "deploymentlog",
    schemField: "timestamp",
    position: {
      x: 3,
      y: 0,
    },
  },
  {
    id: 12,
    title: "Logs By type",
    schema: "deploymentlog",
    schemField: "timestamp",
    type: "bar",
    position: {
      x: 6,
      y: 0,
    },
  },
  {
    id: 15,
    type: "bar",
    schema: "deploymentlog",
    schemField: "timestamp",
    title: "Mixpanel",
    position: {
      x: 9,
      y: 0,
    },
  },
  {
    id: 19,
    title: "Sales By Week",
    schema: "deploymentlog",
    schemField: "timestamp",
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
