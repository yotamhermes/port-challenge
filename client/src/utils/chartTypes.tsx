import BarChart from "../components/Charts/BarChart";
import PieChart from "../components/Charts/PieChart";
import { ChartComponent, ChartProps } from "../types/types";

export const chartTypes = [
  {
    id: "bar",
    name: "Bar Chart",
  },
  {
    id: "pie",
    name: "Pie Chart",
  },
];

export const typeToChart = (type: string): ChartComponent<ChartProps> => {
  switch (type) {
    case "bar":
      return BarChart;
    case "pie":
      return PieChart;
    default:
      throw new Error("No such chart type");
  }
};
