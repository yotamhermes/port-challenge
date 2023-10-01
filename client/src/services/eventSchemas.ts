import { IEventSchema } from "../types/types";
import { service } from "./service";

let eventSchemas: IEventSchema[] = [

];

export const getEventSchemas = () => {
  return service.get("/event-schemas").then((res) => {
    return res.data as IEventSchema[];
  });
};

export const deleteEventSchemas = (id: string) => {
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
