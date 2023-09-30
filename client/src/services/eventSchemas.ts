import { IEventSchema } from "../types/types";

let eventSchemas: IEventSchema[] = [
  {
    id: 23,
    name: "deployment-log",
    fields: ["timestamp", "level"],
  },
  {
    id: 24,
    name: "sale",
    fields: ["byWho", "month"],
  },
  {
    id: 25,
    name: "i-am-an",
    fields: ["byWho", "month"],
  },
  {
    id: 26,
    name: "object-with-fields",
    fields: ["byWho", "month"],
  },
  {
    id: 27,
    name: "why-not",
    fields: ["byWho", "month"],
  },
  {
    id: 28,
    name: "uganda",
    fields: ["byWho", "month"],
  },
];

export const getEventSchemas = () => {
  return new Promise((resolve) => {
    resolve(eventSchemas);
  });
};

export const deleteEventSchemas = (id: number) => {
  eventSchemas = eventSchemas.filter((x) => x.id !== id);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Done");
    }, 1000);
  });
};

export const addEventSchema = (widget: IEventSchema) => {
  eventSchemas.push(widget);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Done");
    }, 1000);
  });
};
