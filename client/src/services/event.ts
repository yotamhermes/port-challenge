import { IChartData } from "../types/types";

export const getEventsCountBy = (schema: string, field: string) => {
  return new Promise<IChartData[]>((resolve) => {
    setTimeout(() => {
      resolve([
        {
          type: "info",
          count: 30,
        },
        {
          type: "warn",
          count: 2,
        },
        {
          type: "error",
          count: 1,
        },
      ]);
    }, 1000);
  });
};
