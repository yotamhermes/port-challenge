import { VictoryBar, VictoryChart, VictoryTheme } from "victory";
import { ChartComponent, ChartProps } from "../../types/types";

const BarChart: ChartComponent<ChartProps> = ({ data = [] }: ChartProps) => {
  const categories = { x: data.map((c) => c.type) };

  return (
    <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
      <VictoryBar
        style={{ data: { fill: "#415CF2" } }}
        categories={categories}
        data={data}
        x="type"
        y="count"
      />
    </VictoryChart>
  );
};

export default BarChart;
