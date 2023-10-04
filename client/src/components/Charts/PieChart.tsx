import { VictoryPie } from "victory";
import { ChartComponent, ChartProps } from "../../types/types";
import { LoadingOutlined } from "@ant-design/icons";
import styles from "./charts.module.css";

const colorScale = ["#F27127", "#415CF2", "#2E97F2", "#48D9CA", "#F27127"];

const PieChart: ChartComponent<ChartProps> = ({
  data,
  loading,
}: ChartProps) => {
  return loading ? (
    <LoadingOutlined className={styles.loading} />
  ) : (
    <VictoryPie colorScale={colorScale} data={data} x="type" y="count" />
  );
};

export default PieChart;
