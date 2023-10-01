import { IChartData } from "../types/types";
import { service } from "./service";

export const getEventsCountBy = (schema: string, field: string) => {
  return service.get(`${schema}/events?countBy=${field}`).then(
    (res) =>
      (res.data as Array<any>).map((x) => ({
        type: x._id,
        count: x.count,
      })) as IChartData[]
  );
};
