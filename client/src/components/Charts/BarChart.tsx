import { VictoryBar, VictoryChart, VictoryTheme } from "victory";
import { ChartComponent, ChartProps } from "../../types/types";
import { LoadingOutlined } from "@ant-design/icons";
import styles from "./charts.module.css";

const BarChart: ChartComponent<ChartProps> = ({
  data = [],
  loading,
}: ChartProps) => {
  const categories = data ? { x: data.map((c) => c.type) } : { x: [] };

  return loading ? (
    <LoadingOutlined className={styles.loading} />
  ) : (
    <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
      <VictoryBar
        style={{ data: { fill: "#415CF2" } }}
        barWidth={40}
        categories={categories}
        data={data}
        x="type"
        y="count"
      />
    </VictoryChart>
  );
};

export default BarChart;
