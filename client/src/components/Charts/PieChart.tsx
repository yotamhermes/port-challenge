import { VictoryPie } from "victory";
import { ChartComponent, ChartProps } from "../../types/types";

const colorScale = ["#F27127", "#415CF2", "#2E97F2", "#48D9CA", "#F27127"];

const PieChart: ChartComponent<ChartProps> = ({ data }: ChartProps) => {
  return <VictoryPie colorScale={colorScale} data={data} x="type" y="count" />;
};

export default PieChart;
