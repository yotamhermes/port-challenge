import { VictoryPie } from "victory";

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 },
];

const colorScale = ["#F27127", "#415CF2", "#2E97F2", "#48D9CA", "#F27127"];

function PieChart() {
  return (
    <VictoryPie colorScale={colorScale} data={data} x="quarter" y="earnings" />
  );
}

export default PieChart;
