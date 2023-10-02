import { IEventSchema } from "../types/types";
import { service } from "./service";

let eventSchemas: IEventSchema[] = [];

export const getEventSchemas = () => {
  return service.get("/event-schemas").then((res) => {
    return res.data as IEventSchema[];
  });
};

export const deleteEventSchemas = (id: string) => {
  return service.delete(`/event-schemas/${id}`);
};

export const addEventSchema = (widget: IEventSchema) => {
  eventSchemas.push(widget);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Done");
    }, 1000);
  });
};
