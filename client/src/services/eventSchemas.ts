import { IEventSchema, INewEventSchema } from "../types/types";
import { service } from "./service";

export const getEventSchemas = () => {
  return service.get("/event-schemas").then((res) => {
    return res.data as IEventSchema[];
  });
};

export const deleteEventSchemas = (id: string) => {
  return service.delete(`/event-schemas/${id}`);
};

export const addEventSchema = (eventSchema: INewEventSchema) => {
  return service.post("/event-schemas", eventSchema);
};
